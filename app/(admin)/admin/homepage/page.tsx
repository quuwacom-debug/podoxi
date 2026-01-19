"use client"

import Link from "next/link"
import { GripVertical, Image as ImageIcon, Plus, Save, Star, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Badge } from "@/components/ui/badge"

const featuredProducts = [
    { id: 1, name: "Super Dashboard UI", category: "UI Kits", sales: 245 },
    { id: 2, name: "React Native Starter", category: "Templates", sales: 120 },
    { id: 3, name: "E-commerce Icon Pack", category: "Icons", sales: 85 },
    { id: 4, name: "SaaS Landing Page", category: "Templates", sales: 60 },
]

export default function HomepageSettingsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Homepage Settings</h1>
                    <p className="text-muted-foreground">Manage content and layout of the storefront homepage.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <Link href="/admin/homepage/banners">
                            <ImageIcon className="mr-2 h-4 w-4" /> Manage Banners
                        </Link>
                    </Button>
                    <Button>
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-yellow-500" />
                            Top Selling Products
                        </CardTitle>
                        <CardDescription>
                            Control which products appear in the &quot;Trending&quot; section.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between space-x-2 border p-3 rounded-md">
                            <Label htmlFor="auto-trending" className="flex flex-col space-y-1">
                                <span>Auto-Select Trending</span>
                                <span className="font-normal text-xs text-muted-foreground">Automatically display top selling products from last 7 days</span>
                            </Label>
                            <Switch id="auto-trending" defaultChecked />
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <Label>Featured Products (Manual Selection)</Label>
                                <Button variant="ghost" size="sm" className="h-8">
                                    <Plus className="mr-2 h-3 w-3" /> Add Product
                                </Button>
                            </div>

                            <div className="space-y-2">
                                {featuredProducts.map((product, index) => (
                                    <div key={product.id} className="flex items-center gap-3 p-2 border rounded-md bg-background hover:bg-muted/50 transition-colors group">
                                        <GripVertical className="h-4 w-4 text-muted-foreground/50 cursor-grab" />
                                        <div className="h-8 w-8 rounded bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                                            {index + 1}
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <span className="font-medium text-sm">{product.name}</span>
                                            <span className="text-xs text-muted-foreground">{product.category} • {product.sales} sales</span>
                                        </div>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive opacity-0 group-hover:opacity-100">
                                            <span className="sr-only">Remove</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-purple-500" />
                            Featured Categories
                        </CardTitle>
                        <CardDescription>
                            Highlight top categories on the homepage.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label>Display Layout</Label>
                                <Select defaultValue="grid">
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="grid">Grid (Recommended)</SelectItem>
                                        <SelectItem value="carousel">Carousel</SelectItem>
                                        <SelectItem value="list">List</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-3">
                                <Label>Selected Categories</Label>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="pl-1 pr-2 py-1 gap-1">
                                        <GripVertical className="h-3 w-3 text-muted-foreground" /> UI Kits
                                    </Badge>
                                    <Badge variant="secondary" className="pl-1 pr-2 py-1 gap-1">
                                        <GripVertical className="h-3 w-3 text-muted-foreground" /> Templates
                                    </Badge>
                                    <Badge variant="secondary" className="pl-1 pr-2 py-1 gap-1">
                                        <GripVertical className="h-3 w-3 text-muted-foreground" /> Icons
                                    </Badge>
                                    <Button variant="outline" size="sm" className="h-7 rounded-full px-3 text-xs border-dashed">
                                        <Plus className="mr-1 h-3 w-3" /> Add Category
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
