import {
    CreditCard,
    DollarSign,
    Users,
    Package,
    Activity
} from "lucide-react"
import { RevenueChart } from "@/components/admin/dashboard/RevenueChart"
import { MetricCard } from "@/components/admin/dashboard/MetricCard"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Jan 20, 2026 - Feb 09, 2026</Button>
                    <Button>Download Report</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="Total Revenue"
                    value="৳ 45,231.89"
                    trend="+20.1%"
                    description="from last month"
                    icon={DollarSign}
                />
                <MetricCard
                    title="Total Orders"
                    value="+2350"
                    trend="+180.1%"
                    description="from last month"
                    icon={CreditCard}
                />
                <MetricCard
                    title="Total Customers"
                    value="+12,234"
                    trend="+19%"
                    description="from last month"
                    icon={Users}
                />
                <MetricCard
                    title="Active Now"
                    value="+573"
                    trend="+201"
                    description="since last hour"
                    icon={Activity}
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <RevenueChart />

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>
                            You made 265 sales this month.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[
                                { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+৳1,999.00" },
                                { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+৳39.00" },
                                { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+৳299.00" },
                                { name: "William Kim", email: "will@email.com", amount: "+৳99.00" },
                                { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+৳599.00" },
                            ].map((sale, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {sale.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {sale.email}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">{sale.amount}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="space-y-1">
                        <CardTitle>Latest Orders</CardTitle>
                        <CardDescription>
                            Recent orders from your store.
                        </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All</Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { id: "ORD-001", customer: "Liam Johnson", product: "Premium UI Kit", status: "Completed", amount: "৳2,500.00" },
                                { id: "ORD-002", customer: "Olivia Smith", product: "Dashboard Template", status: "Processing", amount: "৳1,200.00" },
                                { id: "ORD-003", customer: "Noah Williams", product: "E-commerce Icon Set", status: "Completed", amount: "৳800.00" },
                                { id: "ORD-004", customer: "Emma Brown", product: "SaaS Starter Kit", status: "Pending", amount: "৳4,500.00" },
                                { id: "ORD-005", customer: "Ava Jones", product: "Mobile App Wireframe", status: "Failed", amount: "৳1,500.00" },
                            ].map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">{order.id}</TableCell>
                                    <TableCell>{order.customer}</TableCell>
                                    <TableCell>{order.product}</TableCell>
                                    <TableCell>
                                        <Badge variant={order.status === 'Completed' ? 'default' : order.status === 'Processing' ? 'secondary' : 'destructive'}>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{order.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
