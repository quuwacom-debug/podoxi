'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Mail,
    Lock,
    User,
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
    Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const signupSchema = z.object({
    fullName: z.string().min(3, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    terms: z.boolean().refine(val => val === true, 'You must accept the terms'),
});

type SignUpData = z.infer<typeof signupSchema>;

export default function SignUpPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<SignUpData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            terms: false
        }
    });

    const termsChecked = watch('terms');

    const onSubmit = async (data: SignUpData) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        toast.success('Account created successfully!');
        router.push('/auth/signin');
    };

    return (
        <div className="min-h-screen flex">
            {/* Right Side - Visual/Hero (Reversed for variation) */}
            <div className="hidden lg:flex flex-1 relative bg-muted items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-sidebar opacity-90 z-10" />

                <div className="relative z-20 max-w-lg text-white space-y-8">
                    <h2 className="text-5xl font-bold leading-tight">Start Your Digital Journey with PRODOXI</h2>
                    <p className="text-xl text-white/80 leading-relaxed">
                        Join the largest digital marketplace in Bangladesh. Discover, download, and manage premium assets from top creators.
                    </p>

                    <div className="grid grid-cols-1 gap-6 pt-4">
                        {[
                            { title: 'Safe & Verified', desc: 'Every product is hand-checked by our experts' },
                            { title: 'Flexible Payments', desc: 'Secure bKash, Nagad, and Card support' },
                            { title: 'Instant Access', desc: 'Download your files immediately after purchase' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                    <Check className="h-5 w-5 text-yellow-300" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Left Side - Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 bg-background">
                <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="text-center space-y-2">
                        <div className="flex justify-center mb-6">
                            <Link href="/" className="inline-flex items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-white text-2xl">P</div>
                                <span className="text-3xl font-bold bg-gradient-sidebar bg-clip-text text-transparent">PRODOXI</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl font-bold">Create an Account</h1>
                        <p className="text-muted-foreground">Join our community of thousands of digital creators and buyers</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="fullName"
                                    placeholder="John Doe"
                                    className={cn("pl-10 h-12", errors.fullName && "border-red-500")}
                                    {...register('fullName')}
                                />
                            </div>
                            {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className={cn("pl-10 h-12", errors.email && "border-red-500")}
                                    {...register('email')}
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className={cn("pl-10 h-12", errors.password && "border-red-500")}
                                    {...register('password')}
                                />
                            </div>
                            {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                        </div>

                        <div className="flex items-start space-x-2 py-2">
                            <Checkbox
                                id="terms"
                                checked={termsChecked}
                                onCheckedChange={(checked) => setValue('terms', !!checked)}
                            />
                            <div className="grid gap-1.5 leading-none">
                                <Label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none cursor-pointer"
                                >
                                    Accept terms and conditions
                                </Label>
                                <p className="text-xs text-muted-foreground">
                                    You agree to our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                                </p>
                                {errors.terms && <p className="text-[10px] text-red-500">{errors.terms.message}</p>}
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-13 bg-gradient-sidebar font-bold text-lg" disabled={isLoading}>
                            {isLoading ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><Separator /></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or sign up with</span></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <Button variant="outline" className="h-11">
                            <img src="/google.svg" alt="" className="h-4 w-4 mr-2" /> Google
                        </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account? <Link href="/auth/signin" className="text-primary font-bold hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
