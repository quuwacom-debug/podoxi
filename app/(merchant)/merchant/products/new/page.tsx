"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
    ArrowLeft,
    Upload,
    Plus,
    Info,
    Package,
    DollarSign,
    Tag,
    FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function NewProductPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        router.push("/merchant/products")
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="/merchant/products">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
                        <p className="text-muted-foreground">Fill in the details to list your new digital asset.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" asChild>
                        <Link href="/merchant/products">Cancel</Link>
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="bg-gradient-primary shadow-lg shadow-primary/20"
                    >
                        {isLoading ? "Publishing..." : "Publish Product"}
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <Card className="border-muted-foreground/10">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Info className="h-5 w-5 text-primary" />
                                General Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Product Name</Label>
                                <Input id="name" placeholder="e.g. Modern UI Kit for React" className="h-12" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Describe your product in detail..."
                                    className="min-h-[200px] resize-none"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-muted-foreground/10">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Upload className="h-5 w-5 text-primary" />
                                Media & Files
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-video rounded-xl border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center space-y-2 hover:border-primary/50 transition-colors cursor-pointer group bg-muted/30">
                                    <div className="p-3 rounded-full bg-background shadow-sm group-hover:scale-110 transition-transform">
                                        <Plus className="h-6 w-6 text-primary" />
                                    </div>
                                    <p className="text-xs font-medium">Upload Thumbnail</p>
                                    <p className="text-[10px] text-muted-foreground">Standard 16:9 recommended</p>
                                </div>
                                <div className="aspect-video rounded-xl border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center space-y-2 hover:border-primary/50 transition-colors cursor-pointer group bg-muted/30">
                                    <div className="p-3 rounded-full bg-background shadow-sm group-hover:scale-110 transition-transform">
                                        <Plus className="h-6 w-6 text-primary" />
                                    </div>
                                    <p className="text-xs font-medium">Add Preview Screenshots</p>
                                    <p className="text-[10px] text-muted-foreground">JPG, PNG up to 10MB</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                    <Card className="border-muted-foreground/10">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Tag className="h-5 w-5 text-primary" />
                                Organization
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Select>
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ui-kits">UI Kits</SelectItem>
                                        <SelectItem value="templates">Templates</SelectItem>
                                        <SelectItem value="icons">Icons</SelectItem>
                                        <SelectItem value="graphics">Graphics</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags</Label>
                                <Input id="tags" placeholder="react, tailwind, dashboard..." className="h-12" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-muted-foreground/10 bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <DollarSign className="h-5 w-5 text-primary" />
                                Pricing
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="price">Base Price (৳)</Label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-muted-foreground">৳</span>
                                    <Input id="price" type="number" placeholder="2500" className="pl-8 h-12 font-bold" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-primary/10">
                                <div className="p-1.5 rounded bg-primary/10">
                                    <TrendingUp className="h-4 w-4 text-primary" />
                                </div>
                                <div className="text-[11px]">
                                    <p className="font-bold">Estimated Revenue</p>
                                    <p className="text-muted-foreground">You receive 70% of each sale</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-muted-foreground/10">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-primary" />
                                Visibility
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                                <Label className="font-medium">Status</Label>
                                <Badge className="bg-emerald-500">Draft</Badge>
                            </div>
                            <div className="text-[10px] text-muted-foreground text-center">
                                Your product will be reviewed by our team before going public.
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
                <Button variant="outline" asChild>
                    <Link href="/merchant/products">Cancel</Link>
                </Button>
                <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-gradient-primary h-12 px-8 font-bold shadow-xl shadow-primary/20"
                >
                    {isLoading ? "Publishing..." : "Publish Product"}
                </Button>
            </div>
        </div>
    )
}

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </svg>
    )
}
