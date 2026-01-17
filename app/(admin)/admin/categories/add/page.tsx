"use client"

import Link from "next/link"
import { ArrowLeft, Upload, Image as ImageIcon } from "lucide-react"

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

export default function AddCategoryPage() {
    return (
        <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/categories">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h1 className="text-3xl font-bold tracking-tight">Add New Category</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Main Info */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Category Details</CardTitle>
                            <CardDescription>
                                General information about the category.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Category Name</Label>
                                <Input id="name" placeholder="e.g. UI Kits" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="slug">Slug</Label>
                                <Input id="slug" placeholder="e.g. ui-kits" />
                                <p className="text-[0.8rem] text-muted-foreground">
                                    The "slug" is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
                                </p>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="parent">Parent Category</Label>
                                <Select>
                                    <SelectTrigger id="parent">
                                        <SelectValue placeholder="None (Top Level)" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="none">None (Top Level)</SelectItem>
                                        <SelectItem value="templates">Templates</SelectItem>
                                        <SelectItem value="graphics">Graphics</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" placeholder="Category description..." className="min-h-[100px]" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Media</CardTitle>
                            <CardDescription>
                                Banner and Icon for the category page.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label>Category Icon (SVG/PNG)</Label>
                                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 cursor-pointer">
                                    <ImageIcon className="h-6 w-6 mb-2" />
                                    <span>Upload Icon</span>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label>Category Banner</Label>
                                <div className="aspect-[3/1] border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 cursor-pointer">
                                    <Upload className="h-6 w-6 mb-2" />
                                    <span>Upload Banner Image</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Search Engine Optimization (SEO)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="meta-title">Meta Title</Label>
                                <Input id="meta-title" placeholder="SEO Title" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="meta-desc">Meta Description</Label>
                                <Textarea id="meta-desc" placeholder="SEO Description..." />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Status & Visibility</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="status" className="flex flex-col space-y-1">
                                    <span>Active</span>
                                    <span className="font-normal text-xs text-muted-foreground">Visible on site</span>
                                </Label>
                                <Switch id="status" defaultChecked />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="order">Display Order</Label>
                                <Input id="order" type="number" placeholder="0" />
                            </div>
                        </CardContent>
                    </Card>

                    <Button size="lg" className="w-full">Save Category</Button>
                </div>
            </div>
        </div>
    )
}
