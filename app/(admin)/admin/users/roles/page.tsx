"use client"

import Link from "next/link"
import { ArrowLeft, Plus, Shield, Check, Edit, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const roles = [
    { id: "role-1", name: "Super Admin", users: 2, description: "Full access to all system features." },
    { id: "role-2", name: "Administrator", users: 5, description: "Access to all features except sensitive settings." },
    { id: "role-3", name: "Moderator", users: 12, description: "Can moderate reviews and products." },
    { id: "role-4", name: "Merchant", users: 154, description: "Can manage own products and orders." },
    { id: "role-5", name: "Customer", users: 2500, description: "Can browse and purchase products." },
]

export default function RolesPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="/admin/users">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Roles & Permissions</h1>
                        <p className="text-muted-foreground">Manage user roles and access levels.</p>
                    </div>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create New Role
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {roles.map((role) => (
                    <Card key={role.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {role.name}
                            </CardTitle>
                            <Shield className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{role.users}</div>
                            <p className="text-xs text-muted-foreground mb-4">Users assigned</p>

                            <p className="text-xs bg-muted p-2 rounded mb-4">
                                {role.description}
                            </p>

                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="w-full">
                                    <Edit className="mr-2 h-3 w-3" /> Edit
                                </Button>
                                {!["Super Admin", "Customer"].includes(role.name) && (
                                    <Button variant="outline" size="sm" className="w-full text-destructive hover:bg-destructive/10">
                                        <Trash className="mr-2 h-3 w-3" /> Delete
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Permissions Matrix</CardTitle>
                    <CardDescription>
                        Overview of enabled permissions per role.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Permission</TableHead>
                                <TableHead className="text-center">Super Admin</TableHead>
                                <TableHead className="text-center">Admin</TableHead>
                                <TableHead className="text-center">Moderator</TableHead>
                                <TableHead className="text-center">Merchant</TableHead>
                                <TableHead className="text-center">Customer</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">View Dashboard</TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Manage Users</TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Approve Products</TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">System Settings</TableCell>
                                <TableCell className="text-center"><Check className="h-4 w-4 mx-auto text-green-500" /></TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                                <TableCell className="text-center text-muted-foreground">-</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
