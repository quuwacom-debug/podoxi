"use client"

import Link from "next/link"
import { ArrowLeft, Upload, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function AddProductPage() {
    return (
        <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/products">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Main Info */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Product Information</CardTitle>
                            <CardDescription>
                                Basic details about the digital product.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Product Name</Label>
                                <Input id="name" placeholder="e.g. Super Dashboard UI Kit" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" placeholder="Describe the product..." className="min-h-[150px]" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="price">Price (BDT)</Label>
                                    <Input id="price" type="number" placeholder="0.00" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select>
                                        <SelectTrigger id="category">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ui-kits">UI Kits</SelectItem>
                                            <SelectItem value="icons">Icons</SelectItem>
                                            <SelectItem value="templates">Templates</SelectItem>
                                            <SelectItem value="fonts">Fonts</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Product Files & Media</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label>Thumbnail Image</Label>
                                <div className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 cursor-pointer">
                                    <Upload className="h-8 w-8 mb-2" />
                                    <span>Upload Thumbnail</span>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label>Product Files (ZIP)</Label>
                                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 cursor-pointer">
                                    <Plus className="h-6 w-6 mb-2" />
                                    <span>Add Main Files</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Organization</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="status">Status</Label>
                                <Select defaultValue="active">
                                    <SelectTrigger id="status">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="draft">Draft</SelectItem>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="archived">Archived</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="merchant">Assign to Merchant</Label>
                                <Select>
                                    <SelectTrigger id="merchant">
                                        <SelectValue placeholder="Select merchant" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pixellab">PixelLab</SelectItem>
                                        <SelectItem value="codemaster">CodeMaster</SelectItem>
                                        <SelectItem value="techstore">TechStore BD</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Visibility & Ranking</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="featured" className="flex flex-col space-y-1">
                                    <span>Featured Product</span>
                                    <span className="font-normal text-xs text-muted-foreground">Show on homepage</span>
                                </Label>
                                <Switch id="featured" />
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="trending" className="flex flex-col space-y-1">
                                    <span>Trending</span>
                                    <span className="font-normal text-xs text-muted-foreground">Mark as trending</span>
                                </Label>
                                <Switch id="trending" />
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="editors-choice" className="flex flex-col space-y-1">
                                    <span>Editor&apos;s Choice</span>
                                    <span className="font-normal text-xs text-muted-foreground">Add badge</span>
                                </Label>
                                <Switch id="editors-choice" />
                            </div>
                        </CardContent>
                    </Card>

                    <Button size="lg" className="w-full">Create Product</Button>
                </div>
            </div>
        </div>
    )
}
