"use client"

import { useState } from "react"
import { Check, X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface Product {
    name: string;
    merchant: string;
    date: string;
    category: string;
    price: string;
    description?: string;
}

interface ProductReviewDialogProps {
    product: Product
    open: boolean
    onOpenChange: (open: boolean) => void
}

const rejectionReasons = [
    { id: "quality", label: "Quality issues" },
    { id: "content", label: "Inappropriate content" },
    { id: "pricing", label: "Pricing concerns" },
    { id: "missing", label: "Missing information" },
    { id: "files", label: "File issues" },
    { id: "copyright", label: "Copyright concerns" },
]

export function ProductReviewDialog({ product, open, onOpenChange }: ProductReviewDialogProps) {
    const [action, setAction] = useState<"approve" | "reject" | "changes" | null>(null)
    const [checklist, setChecklist] = useState({
        files: false,
        copyright: false,
        pricing: false
    })
    const [internalNote, setInternalNote] = useState("")
    const [rejectionData, setRejectionData] = useState({
        reasons: [] as string[],
        feedback: "",
        notify: true
    })

    const allChecked = Object.values(checklist).every(Boolean)

    if (!product) return null

    const handleReasonToggle = (reasonId: string) => {
        setRejectionData(prev => {
            const newReasons = prev.reasons.includes(reasonId)
                ? prev.reasons.filter(r => r !== reasonId)
                : [...prev.reasons, reasonId]
            return { ...prev, reasons: newReasons }
        })
    }

    const resetAndClose = () => {
        setAction(null)
        setChecklist({ files: false, copyright: false, pricing: false })
        setInternalNote("")
        setRejectionData({ reasons: [], feedback: "", notify: true })
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={resetAndClose}>
            <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Review Product: {product.name}</DialogTitle>
                    <DialogDescription>
                        Submitted by {product.merchant} on {product.date}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 py-4">
                    {/* Left Column: Product Details */}
                    <div className="space-y-4">
                        <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground border">
                            Product Preview / Files
                        </div>

                        <div className="grid gap-4">
                            <div>
                                <Label className="text-xs text-muted-foreground">Internal Admin Notes (Private)</Label>
                                <Textarea
                                    placeholder="Add notes for other admins..."
                                    className="mt-1.5 min-h-[100px] bg-yellow-50/50 dark:bg-yellow-950/10 border-yellow-200 dark:border-yellow-900"
                                    value={internalNote}
                                    onChange={(e) => setInternalNote(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-semibold">{product.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">{product.category}</Badge>
                                    <Badge variant="outline">{product.price}</Badge>
                                </div>
                                <div className="bg-muted/30 p-3 rounded-md border">
                                    <h4 className="font-medium text-sm mb-1">Description</h4>
                                    <p className="text-sm text-muted-foreground">
                                        This is a mock description for the product. It would contain detailed information about features, compatibility, and usage instructions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Moderation Actions */}
                    <div className="space-y-6">
                        {action === null ? (
                            <div className="space-y-6">
                                <div className="border rounded-md p-4 space-y-4 bg-muted/10">
                                    <h4 className="font-medium flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        Approval Checklist
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="files"
                                                checked={checklist.files}
                                                onCheckedChange={(c) => setChecklist(prev => ({ ...prev, files: !!c }))}
                                            />
                                            <label htmlFor="files" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Files are accessible & valid
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="copyright"
                                                checked={checklist.copyright}
                                                onCheckedChange={(c) => setChecklist(prev => ({ ...prev, copyright: !!c }))}
                                            />
                                            <label htmlFor="copyright" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                No copyright violations found
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="pricing"
                                                checked={checklist.pricing}
                                                onCheckedChange={(c) => setChecklist(prev => ({ ...prev, pricing: !!c }))}
                                            />
                                            <label htmlFor="pricing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Pricing is reasonable
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-3">
                                    <Button
                                        className="w-full bg-green-600 hover:bg-green-700"
                                        disabled={!allChecked}
                                        onClick={() => setAction("approve")}
                                    >
                                        <Check className="mr-2 h-4 w-4" /> Approve & Publish
                                    </Button>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Button variant="outline" onClick={() => setAction("changes")}>
                                            <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
                                        </Button>
                                        <Button variant="destructive" onClick={() => setAction("reject")}>
                                            <X className="mr-2 h-4 w-4" /> Reject Product
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ) : action === "approve" ? (
                            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4 text-center">
                                    <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3">
                                        <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-1">Ready to Publish?</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        This product will be instantly live on the marketplace.
                                    </p>
                                    <div className="flex gap-2 justify-center">
                                        <Button variant="outline" onClick={() => setAction(null)}>Cancel</Button>
                                        <Button className="bg-green-600 hover:bg-green-700">Confirm Publish</Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-lg">
                                        {action === "reject" ? "Reject Product" : "Request Changes"}
                                    </h4>
                                    <Button variant="ghost" size="sm" onClick={() => setAction(null)}>Cancel</Button>
                                </div>

                                <div className="space-y-3">
                                    <Label>Reason(s)</Label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {rejectionReasons.map(reason => (
                                            <div key={reason.id} className="flex items-center space-x-2 border rounded p-2">
                                                <Checkbox
                                                    id={`reason-${reason.id}`}
                                                    checked={rejectionData.reasons.includes(reason.id)}
                                                    onCheckedChange={() => handleReasonToggle(reason.id)}
                                                />
                                                <label htmlFor={`reason-${reason.id}`} className="text-sm cursor-pointer w-full">
                                                    {reason.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Detailed Feedback</Label>
                                    <Textarea
                                        placeholder={`Provide specific details about why you are ${action === "reject" ? "rejecting" : "requesting changes for"} this product...`}
                                        className="h-32"
                                        value={rejectionData.feedback}
                                        onChange={(e) => setRejectionData(prev => ({ ...prev, feedback: e.target.value }))}
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="notify"
                                        checked={rejectionData.notify}
                                        onCheckedChange={(c) => setRejectionData(prev => ({ ...prev, notify: !!c }))}
                                    />
                                    <Label htmlFor="notify" className="font-normal text-muted-foreground">
                                        Send email notification to merchant
                                    </Label>
                                </div>

                                <Button
                                    className="w-full"
                                    variant={action === "reject" ? "destructive" : "default"}
                                    disabled={rejectionData.reasons.length === 0}
                                >
                                    {action === "reject" ? "Confirm Rejection" : "Submit Feedback"}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
