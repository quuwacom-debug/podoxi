"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    User,
    Store,
    CreditCard,
    Bell,
    Shield,
    Mail,
    Camera,
    Check
} from "lucide-react"

export default function MerchantSettings() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                    <p className="text-muted-foreground">Manage your account preferences and store configuration.</p>
                </div>
                <Button className="bg-gradient-primary">Save Changes</Button>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="bg-muted/50 p-1 rounded-xl">
                    <TabsTrigger value="profile" className="rounded-lg px-6">Profile</TabsTrigger>
                    <TabsTrigger value="store" className="rounded-lg px-6">Store</TabsTrigger>
                    <TabsTrigger value="payouts" className="rounded-lg px-6">Payouts</TabsTrigger>
                    <TabsTrigger value="security" className="rounded-lg px-6">Security</TabsTrigger>
                    <TabsTrigger value="notifications" className="rounded-lg px-6">Notifications</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="space-y-6">
                    <Card className="border-muted-foreground/10">
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>Update your personal details and how we contact you.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-full bg-muted border flex items-center justify-center text-muted-foreground overflow-hidden">
                                        <User className="w-12 h-12" />
                                    </div>
                                    <button className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                                        <Camera className="w-6 h-6" />
                                    </button>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold">Profile Picture</h4>
                                    <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
                                    <div className="flex gap-2 mt-2">
                                        <Button size="sm" variant="outline">Upload</Button>
                                        <Button size="sm" variant="ghost" className="text-destructive">Remove</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Full Name</Label>
                                    <Input defaultValue="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Email Address</Label>
                                    <Input defaultValue="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Phone Number</Label>
                                    <Input defaultValue="+880 1700 000000" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Address</Label>
                                    <Input defaultValue="Dhaka, Bangladesh" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="store" className="space-y-6">
                    <Card className="border-muted-foreground/10">
                        <CardHeader>
                            <CardTitle>Store Configuration</CardTitle>
                            <CardDescription>Customise how your store appears to customers.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Store Name</Label>
                                    <Input defaultValue="John's Digital Assets" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Store URL</Label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted/50 text-muted-foreground text-sm font-bold">prodoxi.com/</span>
                                        <Input defaultValue="johndigital" className="rounded-l-none" />
                                    </div>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <Label>Store Description</Label>
                                    <textarea className="w-full h-32 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue="Specializing in high-quality React templates and UI kits for modern developers." />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="payouts" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="md:col-span-2 border-muted-foreground/10">
                            <CardHeader>
                                <CardTitle>Payout Methods</CardTitle>
                                <CardDescription>Connected accounts where you receive your earnings.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 border rounded-xl flex items-center justify-between border-primary/50 bg-primary/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center p-2">
                                            <img src="/bkash.svg" alt="bKash" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="font-bold font-sans">bKash (Personal)</p>
                                            <p className="text-xs text-muted-foreground">017****4567 • Primary</p>
                                        </div>
                                    </div>
                                    <Check className="h-5 w-5 text-primary" />
                                </div>
                                <div className="p-4 border rounded-xl flex items-center justify-between hover:bg-muted/50 cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center p-2">
                                            <img src="/nagad.svg" alt="Nagad" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="font-bold font-sans">Nagad (Personal)</p>
                                            <p className="text-xs text-muted-foreground">017****4567</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="ghost">Set Primary</Button>
                                </div>
                                <Button className="w-full mt-4" variant="outline">Add New Payout Method</Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-primary/5 border-primary/20">
                            <CardHeader>
                                <CardTitle className="text-sm">Minimum Payout</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">৳500.00</div>
                                <p className="text-xs text-muted-foreground mt-2">Your current balance is ৳12,400. You are eligible for payout.</p>
                                <Button className="w-full mt-6 bg-gradient-primary">Request Payout</Button>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
