'use client'

import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Header } from '@/components/header'
import { Statistics } from '@/components/statistics'
import { TransactionsCard } from '@/components/transactions-card'
import { TransactionsTable } from '@/components/transactions-table'
import type { Transaction } from '@/dtos/TransactionDTO'

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getTransactions() {
    try {
      setIsLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`)
      const data = await res.json()
      setTransactions(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-12 bg-zinc-100">
        {isLoading ? (
          <div className="flex flex-1 items-center justify-center">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <Statistics data={transactions} />
            <TransactionsCard>
              <TransactionsTable data={transactions} />
            </TransactionsCard>
          </>
        )}
      </main>
    </div>
  )
}
