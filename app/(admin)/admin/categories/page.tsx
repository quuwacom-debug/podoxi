"use client"

import Link from "next/link"
import {
    Plus,
    Search,
    MoreHorizontal,
    Folder,
    ChevronRight,
    ChevronDown,
    GripVertical
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Mock Category Data with Hierarchy
const initialCategories = [
    {
        id: "cat-1",
        name: "UI Kits",
        slug: "ui-kits",
        productCount: 124,
        status: "Active",
        children: [
            { id: "cat-1-1", name: "Dashboard", slug: "dashboard-ui", productCount: 45, status: "Active" },
            { id: "cat-1-2", name: "Mobile App", slug: "mobile-ui", productCount: 32, status: "Active" },
            { id: "cat-1-3", name: "Landing Page", slug: "landing-page", productCount: 28, status: "Active" },
        ]
    },
    {
        id: "cat-2",
        name: "Templates",
        slug: "templates",
        productCount: 89,
        status: "Active",
        children: [
            { id: "cat-2-1", name: "Next.js", slug: "nextjs-templates", productCount: 15, status: "Active" },
            { id: "cat-2-2", name: "React", slug: "react-templates", productCount: 40, status: "Active" },
        ]
    },
    {
        id: "cat-3",
        name: "Icons",
        slug: "icons",
        productCount: 210,
        status: "Active",
        children: []
    },
    {
        id: "cat-4",
        name: "Fonts",
        slug: "fonts",
        productCount: 56,
        status: "Inactive",
        children: []
    }
]

interface CategoryItemProps {
    category: any
    depth?: number
}

function CategoryItem({ category, depth = 0 }: CategoryItemProps) {
    const [isOpen, setIsOpen] = useState(true)
    const hasChildren = category.children && category.children.length > 0

    return (
        <div className="select-none">
            <div
                className={cn(
                    "flex items-center gap-3 p-3 border-b hover:bg-muted/50 transition-colors group",
                    depth > 0 && "ml-6 border-l pl-4"
                )}
            >
                <GripVertical className="h-4 w-4 text-muted-foreground/50 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" />

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn("h-6 w-6 flex items-center justify-center rounded-sm hover:bg-muted transition-colors", !hasChildren && "invisible")}
                >
                    {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>

                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                    <Folder className="h-4 w-4" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="font-medium truncate">{category.name}</span>
                        <span className="text-xs text-muted-foreground hidden sm:inline-block">/ {category.slug}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="hidden sm:inline-flex">{category.productCount} products</Badge>
                    <Badge variant={category.status === 'Active' ? 'outline' : 'destructive'} className="w-16 justify-center">
                        {category.status}
                    </Badge>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit Category</DropdownMenuItem>
                            <DropdownMenuItem>Add Subcategory</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {isOpen && hasChildren && (
                <div className="border-l ml-6">
                    {category.children.map((child: any) => (
                        <CategoryItem key={child.id} category={child} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default function CategoriesPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
                    <p className="text-muted-foreground">Manage product categories and hierarchy.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/categories/add">
                        <Plus className="mr-2 h-4 w-4" /> Add Category
                    </Link>
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Category Structure</CardTitle>
                            <CardDescription>
                                Drag and drop to reorder categories.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <div className="relative max-w-sm">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search categories..." className="pl-8" />
                                </div>
                            </div>

                            <div className="border rounded-md divide-y">
                                {initialCategories.map((category) => (
                                    <CategoryItem key={category.id} category={category} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Analytics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="text-sm font-medium">Total Categories</span>
                                <span className="text-xl font-bold">12</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="text-sm font-medium">Empty Categories</span>
                                <span className="text-xl font-bold text-destructive">2</span>
                            </div>
                            <div className="space-y-2">
                                <span className="text-sm font-medium">Top Category (Revenue)</span>
                                <div className="bg-primary/5 rounded-md p-3">
                                    <div className="flex items-center gap-2 font-semibold">
                                        <Folder className="h-4 w-4 text-primary" />
                                        UI Kits
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">৳45,200 this month</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Bulk Operations</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" className="w-full justify-start">
                                Merge Categories
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                Move Products
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-destructive hover:bg-destructive/10">
                                Delete Empty Categories
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
