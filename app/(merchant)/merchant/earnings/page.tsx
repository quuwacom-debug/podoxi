"use client"

import {
    DollarSign,
    TrendingUp,
    CreditCard,
    ArrowUpRight,
    Download
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RevenueChart } from "@/components/admin/dashboard/RevenueChart" // Reusing chart

const transactions = [
    {
        id: "TRX-8821",
        date: "Jan 15, 2026",
        description: "Payout to bKash (...892)",
        amount: "-৳25,000",
        status: "Completed",
        type: "Withdrawal"
    },
    {
        id: "TRX-8820",
        date: "Jan 14, 2026",
        description: "Sale Revenue - Order #ORD-9921",
        amount: "+৳2,500",
        status: "Completed",
        type: "Sale"
    },
    {
        id: "TRX-8819",
        date: "Jan 13, 2026",
        description: "Sale Revenue - Order #ORD-9918",
        amount: "+৳1,500",
        status: "Completed",
        type: "Sale"
    },
    {
        id: "TRX-8818",
        date: "Jan 10, 2026",
        description: "Payout to Bank Account (...112)",
        amount: "-৳10,000",
        status: "Processing",
        type: "Withdrawal"
    },
]

export default function EarningsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Earnings</h1>
                    <p className="text-muted-foreground">Track your revenue and manage payouts.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Statement
                    </Button>
                    <Button className="bg-gradient-primary gap-2">
                        <DollarSign className="h-4 w-4" />
                        Withdraw Funds
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-muted-foreground/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">৳12,450.00</div>
                        <p className="text-xs text-muted-foreground mt-1">Available for withdrawal</p>
                    </CardContent>
                </Card>
                <Card className="border-muted-foreground/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">৳45,231.89</div>
                        <div className="flex items-center gap-1 mt-1">
                            <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                            <span className="text-xs font-bold text-emerald-500">+12.5%</span>
                            <span className="text-xs text-muted-foreground">vs last month</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-muted-foreground/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Pending Payouts</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">৳10,000.00</div>
                        <p className="text-xs text-muted-foreground mt-1">Processing by bank</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Overview Chart */}
                <Card className="lg:col-span-2 border-muted-foreground/10">
                    <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                        <CardDescription>Monthly earnings over the last year</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <RevenueChart />
                    </CardContent>
                </Card>

                {/* Recent Transactions */}
                <Card className="border-muted-foreground/10">
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                        <CardDescription>Latest financial activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {transactions.map((trx, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="space-y-1 flex-1">
                                        <p className="text-sm font-medium leading-none">{trx.description}</p>
                                        <p className="text-xs text-muted-foreground">{trx.date}</p>
                                    </div>
                                    <div className={cn(
                                        "font-bold text-sm",
                                        trx.type === "Withdrawal" ? "text-red-600" : "text-emerald-600"
                                    )}>
                                        {trx.amount}
                                    </div>
                                </div>
                            ))}
                            <Button variant="outline" className="w-full">View All Transactions</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function cn(...inputs: unknown[]) {
    return inputs.filter(Boolean).join(" ");
}
