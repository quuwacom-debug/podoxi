"use client"

import { useState } from "react"
import { Check, X, User, Star, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

interface Review {
    id: string | number;
    product: string;
    customer: string;
    date: string;
    rating: number;
    content: string;
}

interface ReviewModerationDialogProps {
    review: Review
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ReviewModerationDialog({ review, open, onOpenChange }: ReviewModerationDialogProps) {
    const [action, setAction] = useState<"reject" | "edit" | null>(null)
    const [rejectReason, setRejectReason] = useState("")
    const [editedContent, setEditedContent] = useState(review?.content || "")

    if (!review) return null

    const handleClose = () => {
        setAction(null)
        setRejectReason("")
        setEditedContent(review.content)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Moderate Review</DialogTitle>
                    <DialogDescription>
                        Review #{review.id} for {review.product}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                    {/* Customer & Product Info */}
                    <div className="flex items-start justify-between bg-muted/30 p-4 rounded-md">
                        <div className="flex gap-3">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <User className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">{review.customer}</h4>
                                <div className="flex items-center gap-1">
                                    <Badge variant="outline" className="text-[10px] h-5 px-1 py-0">Verified Purchase</Badge>
                                    <span className="text-xs text-muted-foreground">• {review.date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex text-yellow-500 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-muted-foreground/30"}`} />
                                ))}
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">Rating: {review.rating}/5</span>
                        </div>
                    </div>

                    {/* Review Content */}
                    <div className="space-y-4">
                        {action === "edit" ? (
                            <div className="space-y-2">
                                <Label>Edit Review Content</Label>
                                <Textarea
                                    value={editedContent}
                                    onChange={(e) => setEditedContent(e.target.value)}
                                    className="min-h-[120px]"
                                />
                                <p className="text-xs text-muted-foreground">Only edit to fix typos or remove profanity. Do not change the sentiment.</p>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <h4 className="font-medium">Review Content</h4>
                                <div className="p-4 border rounded-md bg-background text-sm leading-relaxed">
                                    {review.content}
                                </div>
                            </div>
                        )}

                        {action === "reject" && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                                <Label className="text-destructive">Rejection Reason</Label>
                                <Textarea
                                    placeholder="Why is this review being rejected?"
                                    value={rejectReason}
                                    onChange={(e) => setRejectReason(e.target.value)}
                                    className="border-destructive/50 focus-visible:ring-destructive"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <DialogFooter className="gap-2 sm:gap-0">
                    {action === null ? (
                        <>
                            <Button variant="outline" className="w-full sm:w-auto" onClick={() => setAction("edit")}>
                                <Edit className="mr-2 h-4 w-4" /> Edit
                            </Button>
                            <Button variant="destructive" className="w-full sm:w-auto" onClick={() => setAction("reject")}>
                                <X className="mr-2 h-4 w-4" /> Reject
                            </Button>
                            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                                <Check className="mr-2 h-4 w-4" /> Approve
                            </Button>
                        </>
                    ) : action === "edit" ? (
                        <>
                            <Button variant="ghost" onClick={() => setAction(null)}>Cancel</Button>
                            <Button onClick={() => setAction(null)}>Save Changes</Button>
                        </>
                    ) : (
                        <>
                            <Button variant="ghost" onClick={() => setAction(null)}>Cancel</Button>
                            <Button variant="destructive" disabled={!rejectReason}>Confirm Rejection</Button>
                        </>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
