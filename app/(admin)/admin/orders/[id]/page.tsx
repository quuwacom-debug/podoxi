"use client"

import { ArrowLeft, Copy, MoreVertical, CreditCard, Truck, User, Mail, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
    // Mock data - in real app, fetch using params.id
    const order = {
        id: params.id || "ORD-001",
        date: "January 16, 2026 at 10:30 AM",
        status: "Completed",
        paymentStatus: "Paid",
        paymentMethod: "bKash",
        customer: {
            name: "Liam Johnson",
            email: "liam@example.com",
            phone: "+880 1712 345678",
            totalOrders: 5
        },
        items: [
            { name: "Premium UI Kit", price: "৳2,500.00", quantity: 1, total: "৳2,500.00" },
        ],
        subtotal: "৳2,500.00",
        tax: "৳0.00",
        total: "৳2,500.00",
        timeline: [
            { status: "Order Placed", date: "Jan 16, 10:30 AM", active: true },
            { status: "Payment Confirmed", date: "Jan 16, 10:35 AM", active: true },
            { status: "Processing", date: "Jan 16, 11:00 AM", active: true },
            { status: "Completed", date: "Jan 16, 11:30 AM", active: true },
        ]
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/orders">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold tracking-tight">Order #{order.id}</h1>
                        <Badge variant="outline" className="ml-2">{order.paymentStatus}</Badge>
                        <Badge variant="default" className="ml-2">{order.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Refund</Button>
                    <Button variant="destructive">Cancel Order</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Invoice</DropdownMenuItem>
                            <DropdownMenuItem>Send Email</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Delete Order</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Items</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead className="text-right">Price</TableHead>
                                        <TableHead className="text-right">Quantity</TableHead>
                                        <TableHead className="text-right">Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {order.items.map((item, i) => (
                                        <TableRow key={i}>
                                            <TableCell className="font-medium">{item.name}</TableCell>
                                            <TableCell className="text-right">{item.price}</TableCell>
                                            <TableCell className="text-right">{item.quantity}</TableCell>
                                            <TableCell className="text-right">{item.total}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-right">Subtotal</TableCell>
                                        <TableCell className="text-right">{order.subtotal}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-right">Tax</TableCell>
                                        <TableCell className="text-right">{order.tax}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-right font-bold">Total</TableCell>
                                        <TableCell className="text-right font-bold">{order.total}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Timeline</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {order.timeline.map((event, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs ring-4 ring-white dark:ring-slate-900 z-10">
                                            {i + 1}
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">{event.status}</p>
                                            <p className="text-xs text-muted-foreground">{event.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Customer</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                    <User className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{order.customer.name}</p>
                                    <p className="text-xs text-muted-foreground">{order.customer.totalOrders} orders</p>
                                </div>
                            </div>
                            <div className="grid gap-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <span>{order.customer.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <span>{order.customer.phone}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Payment Method</span>
                                <span className="text-sm font-medium">{order.paymentMethod}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Transaction ID</span>
                                <span className="text-sm font-medium">TRX-789012</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Payment Date</span>
                                <span className="text-sm font-medium">Jan 16, 2026</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
