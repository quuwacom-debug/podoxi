"use client"

import Link from "next/link"
import { ArrowLeft, GripVertical, Plus, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const banners = [
    { id: 1, title: "Summer Sale 2024", image: "banner-summer.jpg", status: "Active", clicks: 1250, schedule: "Always" },
    { id: 2, title: "New UI Kits Drop", image: "banner-ui.jpg", status: "Scheduled", clicks: 0, schedule: "Starts Jun 1" },
    { id: 3, title: "Flash Deal: Fonts", image: "banner-fonts.jpg", status: "Inactive", clicks: 450, schedule: "Expired" },
]

export default function BannersPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="/admin/homepage">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Banner Manager</h1>
                        <p className="text-muted-foreground">Manage homepage hero sliders and promotional banners.</p>
                    </div>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add New Banner
                </Button>
            </div>

            <div className="space-y-4">
                {banners.map((banner) => (
                    <Card key={banner.id} className="group overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Preview Area */}
                            <div className="w-full md:w-[300px] aspect-[3/1] bg-muted relative flex items-center justify-center">
                                <span className="text-muted-foreground text-sm font-medium">{banner.image}</span>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <Button variant="secondary" size="sm">
                                        <Upload className="h-4 w-4 mr-2" /> Change
                                    </Button>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-semibold text-lg flex items-center gap-2">
                                            {banner.title}
                                            <Badge variant={banner.status === 'Active' ? 'default' : banner.status === 'Scheduled' ? 'secondary' : 'outline'}>
                                                {banner.status}
                                            </Badge>
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Schedule: {banner.schedule} • {banner.clicks} Clicks
                                        </p>
                                    </div>
                                    <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                                </div>

                                <div className="flex justify-end gap-2 mt-4 md:mt-0">
                                    <Button variant="outline" size="sm">Edit Details</Button>
                                    <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">Delete</Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}

                {banners.length === 0 && (
                    <div className="text-center py-12 border-2 border-dashed rounded-lg">
                        <p className="text-muted-foreground">No banners created yet.</p>
                        <Button variant="link">Create your first banner</Button>
                    </div>
                )}
            </div>
        </div>
    )
}
