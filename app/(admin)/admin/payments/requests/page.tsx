"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Clock } from "lucide-react"

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

const requests = [
    { id: "REQ-001", merchant: "IconWorld", amount: "৳5,000.00", method: "bKash (017...)", date: "2024-06-15", status: "Pending" },
    { id: "REQ-002", merchant: "CodeMaster", amount: "৳12,000.00", method: "Bank Transfer", date: "2024-06-14", status: "Processing" },
    { id: "REQ-003", merchant: "PixelArt", amount: "৳2,500.00", method: "Nagad", date: "2024-06-10", status: "Completed" },
]

export default function PayoutRequestsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/payments">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Payout Requests</h1>
                    <p className="text-muted-foreground">Manage withdrawal requests from sellers.</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Withdrawal Queue</CardTitle>
                    <CardDescription>
                        Approve or reject pending payout requests.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Request ID</TableHead>
                                <TableHead>Merchant</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {requests.map((req) => (
                                <TableRow key={req.id}>
                                    <TableCell className="font-mono">{req.id}</TableCell>
                                    <TableCell className="font-medium">{req.merchant}</TableCell>
                                    <TableCell>{req.amount}</TableCell>
                                    <TableCell>{req.method}</TableCell>
                                    <TableCell>{req.date}</TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            req.status === 'Pending' ? 'secondary' :
                                                req.status === 'Completed' ? 'outline' : 'default'
                                        } className={req.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' : ''}>
                                            {req.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {req.status === 'Pending' ? (
                                            <div className="flex justify-end gap-2">
                                                <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10">
                                                    Reject
                                                </Button>
                                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                    Approve
                                                </Button>
                                            </div>
                                        ) : (
                                            <Button size="sm" variant="ghost" disabled>
                                                View Details
                                            </Button>
                                        )}
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
