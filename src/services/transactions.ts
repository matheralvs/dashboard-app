import type { Transaction } from '@/dtos/TransactionDTO'
import { api } from '@/lib/axios'

export async function getTransactions() {
  const { data } = await api.get<Transaction[]>('/transactions')

  return data
}
