"use client"

import Link from "next/link"
import {
    ArrowUpRight,
    DollarSign,
    Download,
    TrendingUp,
    Wallet
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const recentTransactions = [
    { id: "TXN-001", type: "Sale", amount: "+৳1,500.00", status: "Completed", date: "2 mins ago", merchant: "Creative Tim" },
    { id: "TXN-002", type: "Payout", amount: "-৳5,000.00", status: "Processing", date: "1 hour ago", merchant: "IconWorld" },
    { id: "TXN-003", type: "Sale", amount: "+৳3,200.00", status: "Completed", date: "3 hours ago", merchant: "CodeMaster" },
    { id: "TXN-004", type: "Refund", amount: "-৳1,500.00", status: "Completed", date: "5 hours ago", merchant: "Creative Tim" },
]

export default function PaymentsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
                    <p className="text-muted-foreground">Financial overview and transaction history.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <Link href="/admin/payments/requests">
                            <Wallet className="mr-2 h-4 w-4" /> Payout Requests
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/admin/payments/commission">
                            <DollarSign className="mr-2 h-4 w-4" /> Commission Rules
                        </Link>
                    </Button>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">৳152,450</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Seller Earnings</CardTitle>
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">৳120,500</div>
                        <p className="text-xs text-muted-foreground">Net payout pending: ৳45k</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Platform Fees</CardTitle>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">৳31,950</div>
                        <p className="text-xs text-muted-foreground">Avg. 20% commission</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Refund Rate</CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1.2%</div>
                        <p className="text-xs text-muted-foreground text-green-600">-0.5% improvement</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                        <CardDescription>
                            Latest financial activity across the platform.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Transaction ID</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Merchant</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentTransactions.map((txn) => (
                                    <TableRow key={txn.id}>
                                        <TableCell className="font-mono">{txn.id}</TableCell>
                                        <TableCell>{txn.type}</TableCell>
                                        <TableCell>{txn.merchant}</TableCell>
                                        <TableCell className="text-muted-foreground">{txn.date}</TableCell>
                                        <TableCell>
                                            <Badge variant={txn.status === 'Completed' ? 'outline' : 'secondary'}>
                                                {txn.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className={`text-right font-medium ${txn.type === 'Refund' || txn.type === 'Payout' ? 'text-destructive' : 'text-green-600'}`}>
                                            {txn.amount}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Payment Methods</CardTitle>
                        <CardDescription>Transactions by gateway</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-pink-500" />
                                    <span className="font-medium">bKash</span>
                                </div>
                                <span className="font-bold">65%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-pink-500 w-[65%]" />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                                    <span className="font-medium">Nagad</span>
                                </div>
                                <span className="font-bold">25%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[25%]" />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    <span className="font-medium">Card/Bank</span>
                                </div>
                                <span className="font-bold">10%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[10%]" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
