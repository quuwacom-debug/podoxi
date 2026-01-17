"use client"

import Link from "next/link"
import { ArrowLeft, Ticket, Plus, Copy, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const coupons = [
    { id: 1, code: "SUMMER2024", type: "Percentage", value: "20%", uses: "45/100", status: "Active", expires: "2024-08-31" },
    { id: 2, code: "WELCOME10", type: "Fixed Amount", value: "৳100", uses: "12/Unlimited", status: "Active", expires: "Never" },
    { id: 3, code: "FLASHSALE", type: "Percentage", value: "50%", uses: "100/100", status: "Expired", expires: "2024-01-01" },
]

export default function CouponsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="/admin/settings">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Coupons</h1>
                        <p className="text-muted-foreground">Manage discount codes and promotions.</p>
                    </div>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create Coupon
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Active Coupons</CardTitle>
                    <CardDescription>
                        List of all discount codes available to customers.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Code</TableHead>
                                <TableHead>Discount</TableHead>
                                <TableHead>Usage</TableHead>
                                <TableHead>Expires</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {coupons.map((coupon) => (
                                <TableRow key={coupon.id}>
                                    <TableCell className="font-mono font-bold">
                                        <div className="flex items-center gap-2">
                                            <Ticket className="h-4 w-4 text-muted-foreground" />
                                            {coupon.code}
                                        </div>
                                    </TableCell>
                                    <TableCell>{coupon.value} ({coupon.type})</TableCell>
                                    <TableCell>{coupon.uses}</TableCell>
                                    <TableCell>{coupon.expires}</TableCell>
                                    <TableCell>
                                        <Badge variant={coupon.status === 'Active' ? 'default' : 'secondary'}>
                                            {coupon.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <Trash className="h-4 w-4 text-destructive" />
                                        </Button>
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
