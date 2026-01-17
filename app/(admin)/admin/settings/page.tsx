"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Save,
    Globe,
    Palette,
    Mail,
    ShieldAlert,
    Ticket,
    MessageSquare
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function SettingsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                    <p className="text-muted-foreground">Configure general site options and features.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <Link href="/admin/settings/popups">
                            <MessageSquare className="mr-2 h-4 w-4" /> Pop-ups
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/admin/settings/coupons">
                            <Ticket className="mr-2 h-4 w-4" /> Coupons
                        </Link>
                    </Button>
                    <Button>
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="general" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="general">Site Info</TabsTrigger>
                    <TabsTrigger value="branding">Branding</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5" /> General Information
                            </CardTitle>
                            <CardDescription>Basic site identity details.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="site-title">Site Title</Label>
                                <Input id="site-title" defaultValue="Prodoxi" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tagline">Tagline</Label>
                                <Input id="tagline" defaultValue="Premium Digital Marketplace" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Meta Description</Label>
                                <Textarea id="description" defaultValue="The best place to buy and sell digital products in Bangladesh." />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="support-email">Support Email</Label>
                                    <Input id="support-email" defaultValue="support@prodoxi.com" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="whatsapp">WhatsApp Support</Label>
                                    <Input id="whatsapp" defaultValue="+8801700000000" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="branding">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Palette className="h-5 w-5" /> Branding & Appearance
                            </CardTitle>
                            <CardDescription>Logo, colors, and visual identity.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Logo</Label>
                                    <div className="h-24 w-full border-2 border-dashed rounded flex items-center justify-center bg-muted/20">
                                        <span className="text-muted-foreground text-xs">Upload Logo</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Favicon</Label>
                                    <div className="h-24 w-24 border-2 border-dashed rounded flex items-center justify-center bg-muted/20">
                                        <span className="text-muted-foreground text-xs">Upload</span>
                                    </div>
                                </div>
                            </div>
                            <Separator />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="color-primary">Primary Color</Label>
                                    <div className="flex gap-2">
                                        <div className="w-10 h-10 rounded border bg-[#0f172a]"></div>
                                        <Input id="color-primary" defaultValue="#0f172a" className="flex-1" />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="color-secondary">Secondary Color</Label>
                                    <div className="flex gap-2">
                                        <div className="w-10 h-10 rounded border bg-[#3b82f6]"></div>
                                        <Input id="color-secondary" defaultValue="#3b82f6" className="flex-1" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="email">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Mail className="h-5 w-5" /> Email Configuration
                            </CardTitle>
                            <CardDescription>SMTP details for sending system emails.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="smtp-host">SMTP Host</Label>
                                    <Input id="smtp-host" placeholder="smtp.example.com" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="smtp-port">SMTP Port</Label>
                                    <Input id="smtp-port" placeholder="587" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="smtp-user">Username</Label>
                                    <Input id="smtp-user" placeholder="user@example.com" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="smtp-pass">Password</Label>
                                    <Input id="smtp-pass" type="password" placeholder="••••••••" />
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2">Send Test Email</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="maintenance">
                    <Card className="border-destructive/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-destructive">
                                <ShieldAlert className="h-5 w-5" /> Maintenance Mode
                            </CardTitle>
                            <CardDescription>Limit access to the site for specific users.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between border p-3 rounded-md bg-destructive/5">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Enable Maintenance Mode</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Only administrators will be able to access the site.
                                    </p>
                                </div>
                                <Switch />
                            </div>
                            <div className="grid gap-2">
                                <Label>Maintenance Message</Label>
                                <Textarea placeholder="We are currently upgrading our system..." />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
