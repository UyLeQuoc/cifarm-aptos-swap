"use client"

import { Header } from '@/components/Header'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { SwapInterface } from './_components'

const Page = () => {
  const { connected } = useWallet();

  return (
    <>
      <Header />
      <div className="flex items-center justify-center flex-col min-h-screen">
        {connected ? (
          <SwapInterface />
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