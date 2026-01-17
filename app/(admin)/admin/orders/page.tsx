"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data (replace with real API call)
const orders = [
    { id: "ORD-001", customer: "Liam Johnson", merchant: "TechStore BD", product: "Premium UI Kit", date: "2026-01-16", total: "৳2,500.00", status: "Completed", method: "bKash" },
    { id: "ORD-002", customer: "Olivia Smith", merchant: "DesignHub", product: "Dashboard Template", date: "2026-01-15", total: "৳1,200.00", status: "Processing", method: "Nagad" },
    { id: "ORD-003", customer: "Noah Williams", merchant: "Creative Assets", product: "Icon Set", date: "2026-01-15", total: "৳800.00", status: "Pending", method: "Card" },
    { id: "ORD-004", customer: "Emma Brown", merchant: "SoftSolve", product: "SaaS Starter", date: "2026-01-14", total: "৳4,500.00", status: "Cancelled", method: "bKash" },
    { id: "ORD-005", customer: "Liam Johnson", merchant: "TechStore BD", product: "React Native UI", date: "2026-01-14", total: "৳3,000.00", status: "Completed", method: "Card" },
    { id: "ORD-006", customer: "Sophia Davis", merchant: "PixelPerfect", product: "3D Illustrations", date: "2026-01-13", total: "৳1,500.00", status: "Completed", method: "bKash" },
    { id: "ORD-007", customer: "Mason Miller", merchant: "DevTools", product: "VS Code Theme", date: "2026-01-12", total: "৳500.00", status: "Refunded", method: "Nagad" },
]

export default function OrdersPage() {
    const [filterStatus, setFilterStatus] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const filteredOrders = orders.filter(order => {
        const matchesStatus = filterStatus === "all" || order.status.toLowerCase() === filterStatus.toLowerCase()
        const matchesSearch =
            order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.product.toLowerCase().includes(searchTerm.toLowerCase())

        return matchesStatus && matchesSearch
    })

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
                <p className="text-muted-foreground">Manage and track all customer orders.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Order Management</CardTitle>
                    <CardDescription>
                        {filteredOrders.length} orders found
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                        <Input
                            placeholder="Search orders..."
                            className="max-w-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Select value={filterStatus} onValueChange={setFilterStatus}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="processing">Processing</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                                <SelectItem value="refunded">Refunded</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="ml-auto flex gap-2">
                            <Button variant="outline">Export</Button>
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Merchant</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Payment</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredOrders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium text-primary">
                                        <Link href={`/admin/orders/${order.id}`}>{order.id}</Link>
                                    </TableCell>
                                    <TableCell>{order.customer}</TableCell>
                                    <TableCell>{order.merchant}</TableCell>
                                    <TableCell className="max-w-[200px] truncate" title={order.product}>{order.product}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.method}</TableCell>
                                    <TableCell>{order.total}</TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            order.status === 'Completed' ? 'default' :
                                                order.status === 'Processing' ? 'secondary' :
                                                    order.status === 'Pending' ? 'outline' : 'destructive'
                                        }>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
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
                                                <DropdownMenuItem asChild>
                                                    <Link href={`/admin/orders/${order.id}`}>View Details</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">Cancel Order</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
