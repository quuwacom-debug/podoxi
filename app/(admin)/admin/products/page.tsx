"use client"

import { useState } from "react"
import Link from "next/link"
import {
    MoreHorizontal,
    Plus,
    Download,
    Trash,
    Archive,
    Star
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
import { Checkbox } from "@/components/ui/checkbox"

// Mock data
const products = [
    { id: "PRD-001", name: "Super Dashboard UI", merchant: "Creative Tim", category: "UI Kits", price: "৳1,500", status: "Active", sales: 245, rating: 4.8 },
    { id: "PRD-002", name: "E-commerce Icon Pack", merchant: "IconWorld", category: "Icons", price: "৳800", status: "Draft", sales: 0, rating: 0 },
    { id: "PRD-003", name: "React Native Starter", merchant: "CodeMaster", category: "Templates", price: "৳3,000", status: "Active", sales: 120, rating: 4.5 },
    { id: "PRD-004", name: "3D Character Set", merchant: "PixelArt", category: "3D Assets", price: "৳2,200", status: "Pending", sales: 0, rating: 0 },
    { id: "PRD-005", name: "SaaS Landing Page", merchant: "WebBuilders", category: "Templates", price: "৳1,200", status: "Rejected", sales: 0, rating: 0 },
]

export default function AllProductsPage() {
    const [selectedProducts, setSelectedProducts] = useState<string[]>([])
    const [filterStatus, setFilterStatus] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const toggleSelectAll = () => {
        if (selectedProducts.length === products.length) {
            setSelectedProducts([])
        } else {
            setSelectedProducts(products.map(p => p.id))
        }
    }

    const toggleSelectProduct = (id: string) => {
        if (selectedProducts.includes(id)) {
            setSelectedProducts(selectedProducts.filter(pId => pId !== id))
        } else {
            setSelectedProducts([...selectedProducts, id])
        }
    }

    const filteredProducts = products.filter(product => {
        const matchesStatus = filterStatus === "all" || product.status.toLowerCase() === filterStatus.toLowerCase()
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.merchant.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesStatus && matchesSearch
    })

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Products</h1>
                    <p className="text-muted-foreground">Manage all marketplace products.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/products/new">
                        <Plus className="mr-2 h-4 w-4" /> Add Product
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Product Management</CardTitle>
                    <CardDescription>
                        Showing {filteredProducts.length} products
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
                        <div className="flex gap-4 flex-1">
                            <Input
                                placeholder="Search products..."
                                className="max-w-xs"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Select value={filterStatus} onValueChange={setFilterStatus}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="rejected">Rejected</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex gap-2">
                            {selectedProducts.length > 0 && (
                                <>
                                    <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
                                        <Trash className="mr-2 h-4 w-4" /> Delete ({selectedProducts.length})
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Archive className="mr-2 h-4 w-4" /> Archive
                                    </Button>
                                </>
                            )}
                            <Button variant="outline" size="icon">
                                <Download className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">
                                    <Checkbox
                                        checked={selectedProducts.length === products.length && products.length > 0}
                                        onCheckedChange={toggleSelectAll}
                                    />
                                </TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead>Merchant</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Sales</TableHead>
                                <TableHead className="text-right">Rating</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredProducts.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <Checkbox
                                            checked={selectedProducts.includes(product.id)}
                                            onCheckedChange={() => toggleSelectProduct(product.id)}
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="h-9 w-9 rounded bg-muted flex items-center justify-center text-xs">IMG</div>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{product.name}</span>
                                                <span className="text-xs text-muted-foreground">{product.id}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{product.merchant}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{product.category}</Badge>
                                    </TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            product.status === 'Active' ? 'default' :
                                                product.status === 'Pending' ? 'secondary' :
                                                    product.status === 'Rejected' ? 'destructive' : 'outline'
                                        }>
                                            {product.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{product.sales}</TableCell>
                                    <TableCell className="text-right">
                                        {product.rating > 0 ? (
                                            <div className="flex items-center justify-end gap-1">
                                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                {product.rating}
                                            </div>
                                        ) : '-'}
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
                                                <DropdownMenuItem>Edit Product</DropdownMenuItem>
                                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive">Delete Product</DropdownMenuItem>
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
