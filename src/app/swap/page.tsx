"use client"

import { AccountInfo } from '@/components/AccountInfo'
import { Header } from '@/components/Header'
import { TransferAPT } from '@/components/TransferAPT'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import React from 'react'

const Page = () => {
  const { connected } = useWallet();

  return (
    <>
      <Header />
      <div className="flex items-center justify-center flex-col">
        {connected ? (
          <Card>
            <CardContent className="flex flex-col gap-10 pt-6">
              <AccountInfo />
              <TransferAPT showTransfer={false} />
            </CardContent>
          </Card>
        ) : (
          <CardHeader>
            <CardTitle>To get started Connect a wallet</CardTitle>
          </CardHeader>
        )}
      </div>
    </>
  )
}

export default Page