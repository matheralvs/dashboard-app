'use client'

import { motion } from 'framer-motion'
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react'

import { SparkAreaChart } from '@/components/spark-chart'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Transaction } from '@/dtos/TransactionDTO'
import { variants } from '@/motion'

interface StatisticsProps {
  data: Transaction[]
}

export function Statistics({ data }: StatisticsProps) {
  const price = data.reduce((acc, curr) => {
    return acc + curr.valorTotal
  }, 0)

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  const qntTransactions = data.length

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2"
    >
      <Card
        x-chunk="dashboard-01-chunk-0"
        className="border-l-8 border-l-primary"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total de Pedidos
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold">{priceFormatted}</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Badge className="bg-emerald-500/20 px-2 text-emerald-500 hover:bg-emerald-500/20">
                +20.1% <ArrowUpRight className="ml-[2px] h-4 w-4" />
              </Badge>
              do mês passado
            </div>
          </div>

          <SparkAreaChart
            data={data}
            categories={['valorTotal']}
            index={'data'}
            colors={['emerald']}
            className="h-8 w-20 sm:h-10 sm:w-36"
          />
        </CardContent>
      </Card>
      <Card
        x-chunk="dashboard-01-chunk-1"
        className="border-l-8 border-l-primary"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total de Pedidos
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold">+{qntTransactions}</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Badge className="bg-red-500/20 px-2 text-red-500 hover:bg-red-500/20">
                -180.1% <ArrowDownLeft className="ml-[2px] h-4 w-4" />
              </Badge>
              do mês passado
            </div>
          </div>
          <SparkAreaChart
            data={data}
            categories={['valorTotal']}
            index={'data'}
            colors={['violet']}
            className="h-8 w-20 sm:h-10 sm:w-36"
            color="violet"
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}
