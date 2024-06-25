export interface Produto {
  nome: string
  valor: number
}

export interface Cliente {
  nome: string
  email: string
  cpf: string
}

type Status =
  | 'Rastreio e nota enviados'
  | 'Problema na entrega'
  | 'Confirmação de Entrega'
  | 'Reembolso solicitado'

export interface Transaction {
  id: number
  data: string
  valorTotal: number
  produtos: Produto[]
  cliente: Cliente
  status: Status
}
