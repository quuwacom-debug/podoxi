"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function CommissionPage() {
    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/payments">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Commission Settings</h1>
                    <p className="text-muted-foreground">Configure platform fees and earning rules.</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Global Commission</CardTitle>
                    <CardDescription>
                        Default rate applied to all sales unless overridden.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="grid gap-2 flex-1 max-w-xs">
                            <Label htmlFor="global-rate">Default Percentage (%)</Label>
                            <Input id="global-rate" type="number" defaultValue="20" />
                        </div>
                        <div className="flex-1 text-sm text-muted-foreground pt-6">
                            Platform takes <strong>20%</strong> of every sale. Merchant gets 80%.
                        </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Include Tax in Commission</Label>
                            <p className="text-sm text-muted-foreground">
                                Calculate commission on the total amount including tax.
                            </p>
                        </div>
                        <Switch />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Category Overrides</CardTitle>
                    <CardDescription>
                        Set different rates for specific product categories.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 items-end border-b pb-4">
                        <div className="col-span-1 font-medium">Category</div>
                        <div className="col-span-1 font-medium">Commission Rate</div>
                        <div className="col-span-1"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-sm">UI Kits</div>
                        <div className="flex items-center gap-2">
                            <Input className="h-8 max-w-[80px]" defaultValue="25" />
                            <span className="text-sm">%</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-destructive">Reset</Button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-sm">Templates</div>
                        <div className="flex items-center gap-2">
                            <Input className="h-8 max-w-[80px]" defaultValue="15" />
                            <span className="text-sm">%</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-destructive">Reset</Button>
                    </div>

                    <Button variant="outline" className="w-full mt-4">
                        + Add Category Rule
                    </Button>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button size="lg">Save Configuration</Button>
            </div>
        </div>
    )
}
