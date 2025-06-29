"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useWalletClient } from "@thalalabs/surf/hooks";
// Internal components
import { toast } from "@/components/ui/use-toast";
import { aptosClient } from "@/utils/aptosClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAccountAPTBalance } from "@/view-functions/getAccountBalance";
import { COIN_ABI } from "@/utils/coin_abi";

interface ITransferAPT {
  showTransfer?: boolean
}

export function TransferAPT({
  showTransfer = true
}: ITransferAPT) {
  const { account } = useWallet();
  const { client } = useWalletClient();

  const queryClient = useQueryClient();

  const [aptBalance, setAptBalance] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>();
  const [transferAmount, setTransferAmount] = useState<number>();

  const { data } = useQuery({
    queryKey: ["apt-balance", account?.address],
    refetchInterval: 10_000,
    queryFn: async () => {
      try {
        if (account === null) {
          console.error("Account not available");
        }

        const balance = await getAccountAPTBalance({ accountAddress: account!.address.toStringLong() });

        return {
          balance,
        };
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error,
        });
        return {
          balance: 0,
        };
      }
    },
  });

  const onClickButton = async () => {
    if (!client || !recipient || !transferAmount) {
      return;
    }

    try {
      const committedTransaction = await client.useABI(COIN_ABI).transfer({
        type_arguments: ["0x1::aptos_coin::AptosCoin"],
        arguments: [recipient as `0x${string}`, Math.pow(10, 8) * transferAmount],
      });
      const executedTransaction = await aptosClient().waitForTransaction({
        transactionHash: committedTransaction.hash,
      });
      queryClient.invalidateQueries({
        queryKey: ["apt-balance", account?.address],
      });
      toast({
        title: "Success",
        description: `Transaction succeeded, hash: ${executedTransaction.hash}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (data) {
      setAptBalance(data.balance);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-lg font-medium">APT balance: {aptBalance / Math.pow(10, 8)}</h4>
      {
        showTransfer && (
          <>
            Recipient <Input disabled={!account} placeholder="0x1" onChange={(e) => setRecipient(e.target.value)} />
            Amount{" "}
            <Input disabled={!account} placeholder="100" onChange={(e) => setTransferAmount(parseFloat(e.target.value))} />
            <Button
              disabled={!account || !recipient || !transferAmount || transferAmount > aptBalance || transferAmount <= 0}
              onClick={onClickButton}
            >
              Transfer
            </Button>
          </>
        )
      }
    </div>
  );
}
