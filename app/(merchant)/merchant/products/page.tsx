"use client"

import { useState } from "react"
import {
    Plus,
    Search,
    MoreHorizontal,
    Filter,
    Download,
    Eye,
    Edit,
    Trash2,
    Package,
    ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { mockProducts } from "@/lib/data/mock-data"
import Link from "next/link"

export default function MerchantProductsPage() {
    const merchantProducts = mockProducts.slice(0, 5); // Simulating merchant's own products

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight italic">My Products</h1>
                    <p className="text-muted-foreground">Manage your digital assets and publications.</p>
                </div>
                <Button className="bg-gradient-primary h-12 px-6 font-bold shadow-lg shadow-primary/20" asChild>
                    <Link href="/merchant/products/new">
                        <Plus className="mr-2 h-5 w-5" /> Add New Product
                    </Link>
                </Button>
            </div>

            <Card className="border-muted-foreground/10">
                <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search your products..." className="pl-10 h-11" />
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="h-11"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
                            <Button variant="outline" className="h-11"><Download className="mr-2 h-4 w-4" /> Export</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="relative overflow-x-auto rounded-lg border">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Product</th>
                                    <th className="px-6 py-4 font-bold">Category</th>
                                    <th className="px-6 py-4 font-bold">Price</th>
                                    <th className="px-6 py-4 font-bold">Sales</th>
                                    <th className="px-6 py-4 font-bold">Inventory</th>
                                    <th className="px-6 py-4 font-bold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {merchantProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-muted/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-muted border overflow-hidden shrink-0">
                                                    <img src={product.thumbnail} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-bold truncate max-w-[200px] group-hover:text-primary transition-colors cursor-pointer">{product.name}</p>
                                                    <p className="text-xs text-muted-foreground">ID: #PROD-{product.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="secondary" className="font-medium">{product.category}</Badge>
                                        </td>
                                        <td className="px-6 py-4 font-bold">৳{product.price}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold">{product.reviewCount || 0}</span>
                                                <span className="text-[10px] text-emerald-500 font-bold flex items-center"><ArrowUpRight className="h-3 w-3 mr-0.5" /> +5%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200">Digital Asset</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem><Eye className="mr-2 h-4 w-4" /> View Product</DropdownMenuItem>
                                                    <DropdownMenuItem><Edit className="mr-2 h-4 w-4" /> Edit Details</DropdownMenuItem>
                                                    <DropdownMenuItem><Download className="mr-2 h-4 w-4" /> Download Files</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" /> Delete Product</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 border-dashed border-2 flex flex-col items-center justify-center text-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Plus className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold">New Product</h4>
                        <p className="text-sm text-muted-foreground">List a new digital asset</p>
                    </div>
                </Card>
                <Card className="p-8 border-muted-foreground/10 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                        <Package className="h-8 w-8 text-blue-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">Total Assets</h4>
                        <p className="text-sm text-muted-foreground">12 Active Publications</p>
                    </div>
                </Card>
                <Card className="p-8 border-muted-foreground/10 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                        <Eye className="h-8 w-8 text-emerald-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">Total Views</h4>
                        <p className="text-sm text-muted-foreground">24.5k Product Impressions</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}
