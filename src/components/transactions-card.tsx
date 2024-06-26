'use client'

import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { variants } from '@/motion'

interface TransactionsCardProps {
  children: ReactNode
}

export function TransactionsCard({ children }: TransactionsCardProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Transações</CardTitle>
            <CardDescription>Transações recentes da sua loja.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  )
}
