import { ArrowDownLeft, ArrowUpRight } from 'lucide-react'

import { SparkAreaChart } from '@/components/spark-chart'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const chartdata = [
  {
    month: 'Jan 21',
    Performance: 4000,
  },
  {
    month: 'Feb 21',
    Performance: 3000,
  },
  {
    month: 'Mar 21',
    Performance: 2000,
  },
  {
    month: 'Apr 21',
    Performance: 2780,
  },
  {
    month: 'May 21',
    Performance: 1890,
  },
  {
    month: 'Jun 21',
    Performance: 2390,
  },
  {
    month: 'Jul 21',
    Performance: 3490,
  },
]

export function Statistics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
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
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Badge className="bg-transparent border border-zinc-300 px-2 text-emerald-500 shadow-sm hover:bg-transparent hover:border-emerald-500">
                +20.1% <ArrowUpRight className="ml-[2px] h-4 w-4" />
              </Badge>
              from last month
            </div>
          </div>

          <SparkAreaChart
            data={chartdata}
            categories={['Performance']}
            index={'month'}
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
            <div className="text-2xl font-bold">+2350</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Badge className="bg-transparent border border-zinc-300 px-2 text-red-500 shadow-sm hover:bg-transparent hover:border-red-500 flex items-center gap-1">
                -180.1% <ArrowDownLeft className="ml-[2px] h-4 w-4" />
              </Badge>
              from last month
            </div>
          </div>
          <SparkAreaChart
            data={chartdata}
            categories={['Performance']}
            index={'month'}
            colors={['emerald']}
            className="h-8 w-20 sm:h-10 sm:w-36"
            color="violet"
          />
        </CardContent>
      </Card>
    </div>
  )
}
