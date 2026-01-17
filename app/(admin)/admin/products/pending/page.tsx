"use client"

import { useState } from "react"
import { Eye, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ProductReviewDialog } from "@/components/admin/products/ProductReviewDialog"

const pendingProducts = [
    { id: "PRD-001", name: "Super Dashboard UI", merchant: "Creative Tim", category: "UI Kits", price: "৳1,500", date: "2026-01-16", status: "Pending" },
    { id: "PRD-002", name: "E-commerce Icon Pack", merchant: "IconWorld", category: "Icons", price: "৳800", date: "2026-01-15", status: "Pending" },
    { id: "PRD-003", name: "React Native Starter", merchant: "CodeMaster", category: "Templates", price: "৳3,000", date: "2026-01-15", status: "Pending" },
    { id: "PRD-004", name: "3D Character Set", merchant: "PixelArt", category: "3D Assets", price: "৳2,200", date: "2026-01-14", status: "Pending" },
]

export default function PendingProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null)

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Pending Reviews</h1>
                <p className="text-muted-foreground">Products waiting for admin approval.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Review Queue</CardTitle>
                    <CardDescription>
                        {pendingProducts.length} products pending review.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Merchant</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Submitted</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pendingProducts.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded bg-muted flex items-center justify-center text-xs">IMG</div>
                                            {product.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>{product.merchant}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{product.category}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 text-muted-foreground">
                                            <Clock className="h-3 w-3" /> {product.date}
                                        </div>
                                    </TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell className="text-right">
                                        <Button size="sm" onClick={() => setSelectedProduct(product)}>
                                            <Eye className="mr-2 h-4 w-4" /> Review
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <ProductReviewDialog
                product={selectedProduct}
                open={!!selectedProduct}
                onOpenChange={(open) => !open && setSelectedProduct(null)}
            />
        </div>
    )
}
