"use client"

import Link from "next/link"
import { ArrowLeft, User, Trophy, Medal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const topCustomers = [
    { rank: 1, name: "Sarah Wilson", orders: 24, spent: "৳45,800.00", aov: "৳1,908.33", lastOrder: "2024-05-21" },
    { rank: 2, name: "John Doe", orders: 12, spent: "৳15,400.00", aov: "৳1,283.33", lastOrder: "2024-05-20" },
    { rank: 3, name: "Emily Davis", orders: 8, spent: "৳12,000.00", aov: "৳1,500.00", lastOrder: "2024-05-19" },
    { rank: 4, name: "Michael Clark", orders: 15, spent: "৳9,500.00", aov: "৳633.33", lastOrder: "2024-05-15" },
    { rank: 5, name: "Jessica White", orders: 6, spent: "৳8,200.00", aov: "৳1,366.66", lastOrder: "2024-05-10" },
]

export default function TopCustomersPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/customers">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Top Customers</h1>
                    <p className="text-muted-foreground">Highest spending customers on the platform.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {topCustomers.slice(0, 3).map((customer, index) => (
                    <Card key={customer.rank} className="relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Trophy className="h-24 w-24" />
                        </div>
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2">
                                {index === 0 ? <Medal className="h-5 w-5 text-yellow-500" /> :
                                    index === 1 ? <Medal className="h-5 w-5 text-gray-400" /> :
                                        <Medal className="h-5 w-5 text-amber-600" />
                                }
                                Rank #{customer.rank}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{customer.name}</div>
                            <div className="text-xl font-semibold text-primary mt-1">{customer.spent}</div>
                            <p className="text-xs text-muted-foreground mt-2">{customer.orders} Orders • Avg {customer.aov}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Leaderboard</CardTitle>
                    <CardDescription>
                        Full list of top performing customers.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">Rank</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead className="text-right">Total Orders</TableHead>
                                <TableHead className="text-right">Total Spent</TableHead>
                                <TableHead className="text-right">Avg. Order Value</TableHead>
                                <TableHead className="text-right">Last Purchase</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {topCustomers.map((customer) => (
                                <TableRow key={customer.rank}>
                                    <TableCell className="font-medium">#{customer.rank}</TableCell>
                                    <TableCell>
                                        <div className="font-semibold">{customer.name}</div>
                                    </TableCell>
                                    <TableCell className="text-right">{customer.orders}</TableCell>
                                    <TableCell className="text-right font-bold">{customer.spent}</TableCell>
                                    <TableCell className="text-right">{customer.aov}</TableCell>
                                    <TableCell className="text-right">{customer.lastOrder}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">View Profile</Button>
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
