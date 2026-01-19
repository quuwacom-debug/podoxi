'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    CreditCard,
    Smartphone,
    Wallet,
    Lock,
    ChevronRight,
    CheckCircle2,
    ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCartStore } from '@/lib/stores/cart-store';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const checkoutSchema = z.object({
    fullName: z.string().min(3, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(11, 'Valid phone number is required'),
    paymentMethod: z.enum(['bkash', 'nagad', 'card']),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
    const router = useRouter();
    const { items, getTotalPrice, clearCart } = useCartStore();
    const [isProcessing, setIsProcessing] = React.useState(false);

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            paymentMethod: 'bkash',
        }
    });

    const paymentMethod = watch('paymentMethod');

    const onSubmit = async (data: CheckoutFormValues) => {
        setIsProcessing(true);
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsProcessing(false);
        toast.success('Order placed successfully!');
        clearCart();
        router.push('/thank-you');
    };

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">No items to checkout</h1>
                <Button onClick={() => router.push('/shop')}>Back to Shop</Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-3xl font-bold">Checkout</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    {/* Customer Information */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">1</div>
                            <h2 className="text-xl font-bold">Contact Information</h2>
                        </div>

                        <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border rounded-xl bg-card">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="John Doe" {...register('fullName')} className={cn(errors.fullName && "border-red-500")} />
                                {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="john@example.com" {...register('email')} className={cn(errors.email && "border-red-500")} />
                                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" placeholder="017XXXXXXXX" {...register('phone')} className={cn(errors.phone && "border-red-500")} />
                                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                            </div>
                        </form>
                    </section>

                    {/* Payment Method */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">2</div>
                            <h2 className="text-xl font-bold">Payment Method</h2>
                        </div>

                        <RadioGroup
                            value={paymentMethod}
                            onValueChange={(val) => setValue('paymentMethod', val as 'bkash' | 'nagad' | 'card')}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {[
                                { id: 'bkash', name: 'bKash', icon: <Smartphone className="h-5 w-5" />, color: 'hover:border-[#E2136E]/50' },
                                { id: 'nagad', name: 'Nagad', icon: <Wallet className="h-5 w-5" />, color: 'hover:border-[#F7941D]/50' },
                                { id: 'card', name: 'Credit Card', icon: <CreditCard className="h-5 w-5" />, color: 'hover:border-primary/50' }
                            ].map((m) => (
                                <Label
                                    key={m.id}
                                    htmlFor={m.id}
                                    className={cn(
                                        "flex flex-col items-center justify-center gap-3 p-6 border-2 rounded-xl cursor-pointer transition-all bg-card",
                                        paymentMethod === m.id ? "border-primary shadow-sm bg-primary/5" : "border-muted-foreground/10",
                                        m.color
                                    )}
                                >
                                    <RadioGroupItem value={m.id} id={m.id} className="sr-only" />
                                    <div className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center",
                                        paymentMethod === m.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                    )}>
                                        {m.icon}
                                    </div>
                                    <span className="font-bold">{m.name}</span>
                                </Label>
                            ))}
                        </RadioGroup>

                        {/* Simulated Payment Instructions */}
                        <div className="p-6 rounded-xl border bg-muted/30">
                            {paymentMethod === 'bkash' && (
                                <div className="space-y-3">
                                    <h4 className="font-bold text-[#E2136E]">bKash Payment Instructions</h4>
                                    <ol className="text-sm text-muted-foreground list-decimal pl-4 space-y-1">
                                        <li>Log in to your bKash app</li>
                                        <li>Choose &quot;Make Payment&quot;</li>
                                        <li>Enter Merchant Number: 01700-000000</li>
                                        <li>Enter Amount: ৳{getTotalPrice().toLocaleString()}</li>
                                        <li>Confirm with your PIN</li>
                                    </ol>
                                </div>
                            )}
                            {paymentMethod === 'nagad' && (
                                <div className="space-y-3">
                                    <h4 className="font-bold text-[#F7941D]">Nagad Payment Instructions</h4>
                                    <ol className="text-sm text-muted-foreground list-decimal pl-4 space-y-1">
                                        <li>Log in to your Nagad app</li>
                                        <li>Select &quot;Payment&quot;</li>
                                        <li>Enter Merchant Number: 01800-000000</li>
                                        <li>Enter Amount: ৳{getTotalPrice().toLocaleString()}</li>
                                        <li>Complete the transaction</li>
                                    </ol>
                                </div>
                            )}
                            {paymentMethod === 'card' && (
                                <div className="space-y-4">
                                    <h4 className="font-bold">Credit/Debit Card Details</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2 space-y-2">
                                            <Label>Card Number</Label>
                                            <Input placeholder="XXXX XXXX XXXX XXXX" disabled />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Expiry Date</Label>
                                            <Input placeholder="MM/YY" disabled />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>CVV</Label>
                                            <Input placeholder="XXX" disabled />
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground italic">Note: Card payments are currently in simulation mode.</p>
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* Sticky Summary */}
                <div className="space-y-6">
                    <div className="p-6 rounded-xl border bg-card shadow-sm sticky top-24 space-y-6">
                        <h3 className="font-bold text-xl uppercase tracking-wider text-muted-foreground">Your Order</h3>

                        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-3">
                                    <div className="relative w-12 h-12 rounded bg-muted border overflow-hidden shrink-0">
                                        <Image src={item.thumbnail} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold truncate">{item.name}</p>
                                        <p className="text-xs text-muted-foreground">Qty: {item.quantity} × ৳{item.price.toLocaleString()}</p>
                                    </div>
                                    <span className="text-sm font-bold">৳{(item.price * item.quantity).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>

                        <Separator />

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span className="font-medium">৳{getTotalPrice().toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total Amount</span>
                                <span className="text-primary">৳{getTotalPrice().toLocaleString()}</span>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="w-full h-14 text-lg font-bold bg-gradient-primary"
                            disabled={isProcessing}
                            onClick={handleSubmit(onSubmit)}
                        >
                            {isProcessing ? (
                                <>
                                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Complete Purchase
                                    <CheckCircle2 className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>

                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground py-2 border rounded-lg bg-muted/20">
                            <Lock className="h-3 w-3" />
                            256-bit SSL Secure Checkout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
