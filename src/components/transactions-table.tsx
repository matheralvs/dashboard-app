import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function TransactionsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="font-medium">Liam Johnson</div>
            <div className=" text-sm text-muted-foreground md:inline">
              liam@example.com
            </div>
          </TableCell>
          <TableCell>Sale</TableCell>
          <TableCell className=" md:table-cell">2023-06-23</TableCell>
          <TableCell>
            <Badge className="text-xs" variant="outline">
              Approved
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Olivia Smith</div>
            <div className=" text-sm text-muted-foreground md:inline">
              olivia@example.com
            </div>
          </TableCell>
          <TableCell>Refund</TableCell>
          <TableCell className=" md:table-cell">2023-06-24</TableCell>
          <TableCell>
            <Badge className="text-xs" variant="outline">
              Declined
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Noah Williams</div>
            <div className=" text-sm text-muted-foreground md:inline">
              noah@example.com
            </div>
          </TableCell>
          <TableCell>Subscription</TableCell>
          <TableCell className=" md:table-cell">2023-06-25</TableCell>
          <TableCell>
            <Badge className="text-xs" variant="outline">
              Approved
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Emma Brown</div>
            <div className=" text-sm text-muted-foreground md:inline">
              emma@example.com
            </div>
          </TableCell>
          <TableCell>Sale</TableCell>
          <TableCell className=" md:table-cell">2023-06-26</TableCell>
          <TableCell>
            <Badge className="text-xs" variant="outline">
              Approved
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Liam Johnson</div>
            <div className=" text-sm text-muted-foreground md:inline">
              liam@example.com
            </div>
          </TableCell>
          <TableCell>Sale</TableCell>
          <TableCell className=" md:table-cell">2023-06-27</TableCell>
          <TableCell>
            <Badge className="text-xs" variant="outline">
              Approved
            </Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
