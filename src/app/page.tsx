import { Header } from '@/components/header'
import { Statistics } from '@/components/statistics'
import { TransactionsCard } from '@/components/transactions-card'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-12 bg-zinc-100">
        <Statistics />
        <div className="grid lg:grid-cols-1 xl:grid-cols-1 overflow-x-auto">
          <TransactionsCard />
        </div>
      </main>
    </div>
  )
}
