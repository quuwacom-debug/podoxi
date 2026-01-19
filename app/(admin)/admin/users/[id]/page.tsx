"use client"

import Link from "next/link"
import { ArrowLeft, User, Mail, Phone, Calendar, Shield, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function UserDetailPage() {
    return (
        <div className="flex flex-col gap-6 max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/users">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h1 className="text-3xl font-bold tracking-tight">User Profile</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Profile Sidebar */}
                <Card className="h-fit">
                    <CardContent className="pt-6 text-center space-y-4">
                        <div className="h-24 w-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center text-primary">
                            <User className="h-12 w-12" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Alice Admin</h2>
                            <Badge variant="secondary" className="mt-2">Super Admin</Badge>
                        </div>

                        <Separator />

                        <div className="space-y-3 text-left">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4" /> alice@prodoxi.com
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4" /> +880 1712 345678
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" /> Dhaka, Bangladesh
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" /> Joined Jan 1, 2024
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" /> Last active: 2 mins ago
                            </div>
                        </div>

                        <Separator />

                        <div className="grid gap-2">
                            <Button>Edit Profile</Button>
                            <Button variant="outline">Reset Password</Button>
                            <Button variant="destructive" className="mt-2">Suspend Account</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Activity & Stats */}
                <div className="md:col-span-2 space-y-6">
                    <div className="grid gap-4 md:grid-cols-3">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">৳152,000</div>
                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">24</div>
                                <p className="text-xs text-muted-foreground">As a customer</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium">Trust Score</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">98%</div>
                                <p className="text-xs text-muted-foreground">High reliability</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Shield className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Updated system settings</p>
                                        <p className="text-xs text-muted-foreground">Changed global commission rate</p>
                                    </div>
                                    <div className="ml-auto text-xs text-muted-foreground">2 hours ago</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <User className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Approved new merchant</p>
                                        <p className="text-xs text-muted-foreground">TechStore BD application approved</p>
                                    </div>
                                    <div className="ml-auto text-xs text-muted-foreground">5 hours ago</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Login History</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>IP Address</TableHead>
                                        <TableHead>Device</TableHead>
                                        <TableHead>Location</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>May 20, 2024 10:30 AM</TableCell>
                                        <TableCell>192.168.1.1</TableCell>
                                        <TableCell>Chrome / Windows</TableCell>
                                        <TableCell>Dhaka, BD</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>May 19, 2024 09:15 AM</TableCell>
                                        <TableCell>192.168.1.1</TableCell>
                                        <TableCell>Chrome / Windows</TableCell>
                                        <TableCell>Dhaka, BD</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
