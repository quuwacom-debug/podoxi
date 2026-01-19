"use client"

import {
    DollarSign,
    Package,
    ShoppingCart,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Users,
    Download
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RevenueChart } from "@/components/admin/dashboard/RevenueChart" // Reusing UI components
import Link from "next/link"
import { toast } from "sonner"

const metrics = [
    {
        title: "Total Revenue",
        value: "৳45,231.89",
        trend: "+12.5%",
        isPositive: true,
        icon: DollarSign,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    {
        title: "Sales This Month",
        value: "154",
        trend: "+18.2%",
        isPositive: true,
        icon: ShoppingCart,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "Active Products",
        value: "12",
        trend: "0%",
        isPositive: true,
        icon: Package,
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        title: "Customer Rating",
        value: "4.8/5",
        trend: "+0.2",
        isPositive: true,
        icon: Users,
        color: "text-purple-600",
        bg: "bg-purple-50"
    }
]

export default function MerchantDashboard() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Merchant Dashboard</h1>
                    <p className="text-muted-foreground">Welcome back! View your store performance and manage your assets.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="border-primary/20 hover:bg-primary/5"
                        onClick={() => toast.success("Report generation started. You will be notified when it's ready.")}
                    >
                        Download Report
                    </Button>
                    <Button className="bg-gradient-primary" asChild>
                        <Link href="/merchant/products/new">Add New Product</Link>
                    </Button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, i) => (
                    <Card key={i} className="border-muted-foreground/10 hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                            <div className={cn("p-2 rounded-lg", metric.bg)}>
                                <metric.icon className={cn("h-4 w-4", metric.color)} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{metric.value}</div>
                            <div className="flex items-center gap-1 mt-1">
                                {metric.isPositive ?
                                    <ArrowUpRight className="h-4 w-4 text-emerald-500" /> :
                                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                                }
                                <span className={cn("text-xs font-bold", metric.isPositive ? "text-emerald-500" : "text-red-500")}>
                                    {metric.trend}
                                </span>
                                <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>

                {/* Top Selling Products */}
                <Card className="border-muted-foreground/10">
                    <CardHeader>
                        <CardTitle>Top Selling</CardTitle>
                        <CardDescription>Your best performing digital assets</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {[
                            { name: "Premium SaaS UI Kit", sales: 45, revenue: "৳112,500" },
                            { name: "React Admin Template", sales: 32, revenue: "৳48,000" },
                            { name: "E-commerce Icons", sales: 28, revenue: "৳22,400" },
                            { name: "Digital Marketing Ebook", sales: 21, revenue: "৳10,500" },
                        ].map((product, i) => (
                            <div key={i} className="flex items-center justify-between group">
                                <div className="space-y-1">
                                    <p className="text-sm font-bold group-hover:text-primary transition-colors cursor-pointer">{product.name}</p>
                                    <p className="text-xs text-muted-foreground">{product.sales} sales this week</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold">{product.revenue}</p>
                                    <Badge variant="secondary" className="text-[10px] py-0">Hot</Badge>
                                </div>
                            </div>
                        ))}
                        <Button variant="outline" className="w-full mt-4">View All Products</Button>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Orders Table */}
            <Card className="border-muted-foreground/10">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>Manage your customer deliveries and payouts</CardDescription>
                    </div>
                    <Button variant="link" className="font-bold">View All Orders</Button>
                </CardHeader>
                <CardContent>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Order ID</th>
                                    <th className="px-6 py-4 font-semibold">Customer</th>
                                    <th className="px-6 py-4 font-semibold">Product</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y border-t">
                                {[
                                    { id: "#ORD-9921", customer: "Liam Johnson", product: "SaaS UI Kit", status: "Paid", amount: "৳2,500" },
                                    { id: "#ORD-9918", customer: "Olivia Smith", product: "Admin Template", status: "Paid", amount: "৳1,500" },
                                    { id: "#ORD-9915", customer: "Noah Williams", product: "Icon Pack", status: "Paid", amount: "৳800" },
                                ].map((order, i) => (
                                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4 font-medium">{order.id}</td>
                                        <td className="px-6 py-4">{order.customer}</td>
                                        <td className="px-6 py-4">{order.product}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                                                {order.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right font-bold">{order.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

function cn(...inputs: unknown[]) {
    return inputs.filter(Boolean).join(" ");
}
