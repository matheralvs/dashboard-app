'use client'

import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { Transaction } from '@/dtos/TransactionDTO'
import { cn } from '@/lib/utils'
import { variants } from '@/motion'

import { motion } from 'framer-motion'

interface TransactionTableProps {
  data: Transaction[]
}

export function TransactionsTable({ data }: TransactionTableProps) {
  function getStatusColor(status: Transaction['status']) {
    const colorMap = {
      'Rastreio e nota enviados': 'bg-primary/20 text-primary',
      'Problema na entrega': 'bg-rose-500/20 text-rose-500',
      'Confirmação de Entrega': 'bg-emerald-500/20 text-emerald-500',
      'Reembolso solicitado': 'bg-amber-500/20 text-amber-500',
    }
    return colorMap[status] || 'bg-gray-500/20 text-gray-500'
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status do processamento</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((transaction) => {
            const {
              produtos,
              valorTotal,
              cliente: { email },
              status,
            } = transaction

            const productName = produtos
              .map((product) => product.nome)
              .join(', ')

            const valueFormatted = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(valorTotal)

            return (
              <TableRow key={transaction.id}>
                <TableCell>
                  <div className="font-medium">{productName}</div>
                </TableCell>
                <TableCell>{valueFormatted}</TableCell>
                <TableCell className=" md:table-cell">{email}</TableCell>
                <TableCell>
                  <Badge
                    className={cn('text-xs', getStatusColor(status))}
                    variant="outline"
                  >
                    {status}
                  </Badge>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </motion.div>
  )
}
