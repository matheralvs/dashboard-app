export interface Produto {
  nome: string
  valor: number
}

export interface Cliente {
  nome: string
  email: string
  cpf: string
}

export interface Transaction {
  id: number
  data: string
  valorTotal: number
  produtos: Produto[]
  cliente: Cliente
  status: string
}

export interface TransactionDTO {
  transactions: Transaction[]
}
