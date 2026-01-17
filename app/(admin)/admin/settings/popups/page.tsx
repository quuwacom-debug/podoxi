"use client"

import Link from "next/link"
import { ArrowLeft, Plus, Edit, Trash, Layout, Monitor, MousePointer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

const popups = [
    { id: 1, title: "Newsletter Signup", type: "Modal", trigger: "Exit Intent", views: 1205, conversions: 156, status: "Active" },
    { id: 2, title: "Flash Sale Alert", type: "Bar", trigger: "On Load", views: 5020, conversions: 400, status: "Inactive" },
]

export default function PopupsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="/admin/settings">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Pop-ups</h1>
                        <p className="text-muted-foreground">Manage lead generation and announcement popups.</p>
                    </div>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create Pop-up
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {popups.map((popup) => (
                    <Card key={popup.id} className="relative overflow-hidden">
                        <div className="absolute top-3 right-3">
                            <Switch checked={popup.status === 'Active'} />
                        </div>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{popup.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                                <Badge variant="outline">{popup.type}</Badge>
                                <Badge variant="secondary">{popup.trigger}</Badge>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4 py-4 mb-4 border-y">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">{popup.views}</div>
                                    <div className="text-xs text-muted-foreground">Views</div>
                                </div>
                                <div className="text-center border-l">
                                    <div className="text-2xl font-bold text-green-600">{popup.conversions}</div>
                                    <div className="text-xs text-muted-foreground">Conversions</div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="w-full">
                                    <Edit className="mr-2 h-3 w-3" /> Edit
                                </Button>
                                <Button variant="ghost" className="text-destructive hover:bg-destructive/10">
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {/* New Template Card */}
                <Card className="border-dashed flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <Plus className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">Create New</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-4">
                        Choose from pre-built templates
                    </p>
                    <div className="flex gap-2 opacity-50">
                        <Layout className="h-4 w-4" />
                        <Monitor className="h-4 w-4" />
                        <MousePointer className="h-4 w-4" />
                    </div>
                </Card>
            </div>
        </div>
    )
}
