"use client"

import {
    Search,
    Filter,
    MoreHorizontal,
    Download
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const orders = [
    {
        id: "#ORD-9921",
        date: "Jan 15, 2026",
        customer: "Liam Johnson",
        product: "SaaS UI Kit",
        amount: "৳2,500",
        status: "Paid",
        paymentMethod: "bKash"
    },
    {
        id: "#ORD-9920",
        date: "Jan 14, 2026",
        customer: "Emma Davis",
        product: "Digital Marketing Ebook",
        amount: "৳500",
        status: "Processing",
        paymentMethod: "Card"
    },
    {
        id: "#ORD-9919",
        date: "Jan 14, 2026",
        customer: "James Wilson",
        product: "E-commerce Icons",
        amount: "৳800",
        status: "Failed",
        paymentMethod: "Nagad"
    },
    {
        id: "#ORD-9918",
        date: "Jan 13, 2026",
        customer: "Olivia Smith",
        product: "Admin Template",
        amount: "৳1,500",
        status: "Paid",
        paymentMethod: "Card"
    },
    {
        id: "#ORD-9917",
        date: "Jan 12, 2026",
        customer: "Lucas Brown",
        product: "SaaS UI Kit",
        amount: "৳2,500",
        status: "Paid",
        paymentMethod: "bKash"
    },
    {
        id: "#ORD-9916",
        date: "Jan 12, 2026",
        customer: "Charlotte Martinez",
        product: "Icon Pack",
        amount: "৳800",
        status: "Refunded",
        paymentMethod: "Card"
    },
    {
        id: "#ORD-9915",
        date: "Jan 11, 2026",
        customer: "Noah Williams",
        product: "Icon Pack",
        amount: "৳800",
        status: "Paid",
        paymentMethod: "bKash"
    }
]

export default function OrdersPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
                    <p className="text-muted-foreground">Manage your customer orders and transactions.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Export
                    </Button>
                </div>
            </div>

            <Card className="border-muted-foreground/10">
                <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>A list of recent orders from your store.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between mb-4 gap-4">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search orders..."
                                className="pl-9"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Filter className="h-4 w-4" />
                                Filter
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-medium">{order.id}</TableCell>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>{order.customer}</TableCell>
                                        <TableCell>{order.product}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant="outline"
                                                className={cn(
                                                    "capitalize",
                                                    order.status === "Paid" && "bg-emerald-50 text-emerald-700 border-emerald-200",
                                                    order.status === "Processing" && "bg-blue-50 text-blue-700 border-blue-200",
                                                    order.status === "Failed" && "bg-red-50 text-red-700 border-red-200",
                                                    order.status === "Refunded" && "bg-orange-50 text-orange-700 border-orange-200"
                                                )}
                                            >
                                                {order.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">{order.amount}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>View details</DropdownMenuItem>
                                                    <DropdownMenuItem>Contact customer</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-red-600">Refund order</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
