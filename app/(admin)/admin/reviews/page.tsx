"use client"

import { useState } from "react"
import Link from "next/link"
import {
    MoreHorizontal,
    Search,
    Filter,
    Star,
    CheckCircle,
    XCircle,
    AlertCircle
} from "lucide-react"

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
import { ReviewModerationDialog } from "@/components/admin/reviews/ReviewModerationDialog"

// Mock Data
const reviews = [
    { id: "REV-001", product: "Super Dashboard UI", customer: "John Doe", rating: 5, date: "2026-01-16", status: "Approved", content: "Amazing template! Saved me hours of work." },
    { id: "REV-002", product: "E-commerce Icon Pack", customer: "Jane Smith", rating: 4, date: "2026-01-15", status: "Pending", content: "Good icons but missing some SVG formats." },
    { id: "REV-003", product: "React Native Starter", customer: "Mike Johnson", rating: 5, date: "2026-01-14", status: "Approved", content: "Best starter kit I have used." },
    { id: "REV-004", product: "3D Character Set", customer: "Sarah Wilson", rating: 2, date: "2026-01-13", status: "Rejected", content: "Files were corrupted. Want a refund." },
    { id: "REV-005", product: "SaaS Landing Page", customer: "David Brown", rating: 4, date: "2026-01-12", status: "Pending", content: "Clean code and easy to customize." },
]

export default function ReviewsPage() {
    const [selectedReview, setSelectedReview] = useState<any>(null)
    const [filterStatus, setFilterStatus] = useState("all")

    const filteredReviews = reviews.filter(review =>
        filterStatus === "all" || review.status.toLowerCase() === filterStatus.toLowerCase()
    )

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Reviews</h1>
                    <p className="text-muted-foreground">Moderate and manage customer reviews.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Settings</Button>
                    <Button>Add Review</Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Reviews</CardTitle>
                    <CardDescription>
                        {filteredReviews.length} reviews found
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                        <Input
                            placeholder="Search reviews..."
                            className="max-w-xs"
                        />
                        <Select value={filterStatus} onValueChange={setFilterStatus}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="ml-auto flex gap-2">
                            <Button variant="outline" size="sm" className="hidden md:flex">
                                <Filter className="mr-2 h-4 w-4" /> Filter
                            </Button>
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead className="w-[40%]">Review</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredReviews.map((review) => (
                                <TableRow key={review.id}>
                                    <TableCell className="font-medium">{review.product}</TableCell>
                                    <TableCell>{review.customer}</TableCell>
                                    <TableCell>
                                        <div className="flex text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`h-3 w-3 ${i < review.rating ? "fill-current" : "text-muted-foreground/30"}`} />
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-muted-foreground truncate max-w-[300px]" title={review.content}>
                                        {review.content}
                                    </TableCell>
                                    <TableCell>
                                        {review.status === "Approved" && <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Approved</Badge>}
                                        {review.status === "Pending" && <Badge variant="secondary">Pending</Badge>}
                                        {review.status === "Rejected" && <Badge variant="destructive">Rejected</Badge>}
                                    </TableCell>
                                    <TableCell className="text-sm text-muted-foreground">{review.date}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm" onClick={() => setSelectedReview(review)}>
                                            Manage
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <ReviewModerationDialog
                review={selectedReview}
                open={!!selectedReview}
                onOpenChange={(open) => !open && setSelectedReview(null)}
            />
        </div>
    )
}
