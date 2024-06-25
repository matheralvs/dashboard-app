import { Header } from '@/components/header'
import { Statistics } from '@/components/statistics'
import { TransactionsCard } from '@/components/transactions-card'
import { TransactionsTable } from '@/components/transactions-table'
import { getTransactions } from '@/services/transactions'

export default async function Home() {
  const transactions = await getTransactions()

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-12 bg-zinc-100">
        <Statistics data={transactions} />

        <TransactionsCard>
          <TransactionsTable data={transactions} />
        </TransactionsCard>
      </main>
    </div>
  )
}
