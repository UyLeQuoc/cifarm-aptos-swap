"use client"

import { useState } from "react"
import { ArrowUpDown, Copy, Settings, RotateCcw, Edit3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export const SwapInterface = () => {
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [slippage, setSlippage] = useState("0.1")

  const handlePercentageClick = (percentage: number) => {
    const balance = 0.69878099
    const amount = ((balance * percentage) / 100).toFixed(8)
    setFromAmount(amount)
  }

  const handleSwapTokens = () => {
    // Swap logic would go here
    console.log("Swapping tokens")
  }

  return (
    <Card className="w-full p-6 bg-white/80 backdrop-blur-sm max-w-[500px]">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
        <div className="text-center flex-1">
        <h1 className="text-2xl font-bold text-purple-900 mb-1">Swap</h1>
        <p className="text-sm text-purple-600">Trade tokens in an instant</p>
        </div>
    </div>

    {/* From Token */}
    <div className="space-y-4">
        <div className="bg-purple-50 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="font-semibold text-gray-900">APT</span>
            <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                <Copy className="h-3 w-3" />
            </Button>
            </div>
            <span className="text-sm text-purple-600">Balance: 0.69878099</span>
        </div>

        <div className="relative">
            <Input
            type="text"
            placeholder="0.0"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            className="text-right text-2xl font-semibold border-0 bg-transparent p-0 h-auto focus-visible:ring-0 placeholder:text-gray-400"
            />
        </div>

        <div className="flex gap-2 mt-3">
            <Button
            variant="outline"
            size="sm"
            className="bg-cyan-400 hover:bg-cyan-500 text-white border-cyan-400 rounded-full px-3 py-1 text-xs"
            onClick={() => handlePercentageClick(25)}
            >
            25%
            </Button>
            <Button
            variant="outline"
            size="sm"
            className="bg-cyan-400 hover:bg-cyan-500 text-white border-cyan-400 rounded-full px-3 py-1 text-xs"
            onClick={() => handlePercentageClick(50)}
            >
            50%
            </Button>
            <Button
            variant="outline"
            size="sm"
            className="bg-cyan-400 hover:bg-cyan-500 text-white border-cyan-400 rounded-full px-3 py-1 text-xs"
            onClick={() => handlePercentageClick(75)}
            >
            75%
            </Button>
            <Button
            variant="outline"
            size="sm"
            className="bg-cyan-400 hover:bg-cyan-500 text-white border-cyan-400 rounded-full px-3 py-1 text-xs"
            onClick={() => handlePercentageClick(100)}
            >
            MAX
            </Button>
        </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
        <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white border-gray-200 hover:bg-gray-50"
            onClick={handleSwapTokens}
        >
            <ArrowUpDown className="h-4 w-4 text-gray-600" />
        </Button>
        </div>

        {/* To Token */}
        <div className="bg-purple-50 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">🔥</span>
            </div>
            <span className="font-semibold text-gray-900">CAKE</span>
            <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                <Copy className="h-3 w-3" />
            </Button>
            <div className="w-4 h-4 text-purple-500">
                <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
            </div>
            </div>
            <span className="text-sm text-purple-600">Balance: 0.02032641</span>
        </div>

        <div className="relative">
            <Input
            type="text"
            placeholder="0.0"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            className="text-right text-2xl font-semibold border-0 bg-transparent p-0 h-auto focus-visible:ring-0 placeholder:text-gray-400"
            />
        </div>
        </div>

        {/* Slippage Tolerance */}
        <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-purple-600">Slippage Tolerance</span>
            <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
            <Edit3 className="h-3 w-3 text-purple-500" />
            </Button>
        </div>
        <span className="text-sm font-semibold text-cyan-500">0.1%</span>
        </div>

        {/* Swap Button */}
        <Button
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-500 rounded-2xl py-6 text-lg font-medium"
        disabled
        >
        Enter an amount
        </Button>
    </div>
    </Card>
  )
}