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
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
    CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/lib/stores/auth-store';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const signinSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignInData = z.infer<typeof signinSchema>;

export default function SignInPage() {
    const router = useRouter();
    const { login } = useAuthStore();
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<SignInData>({
        resolver: zodResolver(signinSchema),
    });

    const onSubmit = async (data: SignInData) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        login({
            id: '1',
            name: 'John Doe',
            email: data.email,
        });

        setIsLoading(false);
        toast.success('Signed in successfully!');
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 bg-background">
                <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                    <div className="text-center space-y-2">
                        <div className="flex justify-center mb-6">
                            <Link href="/" className="inline-flex items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-white text-2xl">P</div>
                                <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">PRODOXI</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl font-bold">Welcome Back</h1>
                        <p className="text-muted-foreground">Sign in to access your digital assets and account</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="/auth/forgot-password" className="text-xs text-primary font-medium hover:underline">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className={cn("pl-10 h-12", errors.password && "border-red-500")}
                                    {...register('password')}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                        </div>

                        <Button type="submit" className="w-full h-12 bg-gradient-primary font-bold text-lg" disabled={isLoading}>
                            {isLoading ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><Separator /></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <Button variant="outline" className="h-11">
                            <img src="/google.svg" alt="" className="h-4 w-4 mr-2" /> Google
                        </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account? <Link href="/auth/signup" className="text-primary font-bold hover:underline">Create an account</Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Visual/Hero */}
            <div className="hidden lg:flex flex-1 relative bg-muted items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-90 z-10" />
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/bg-pattern.svg')] opacity-10 z-0" />

                <div className="relative z-20 max-w-lg text-white space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                        <ShieldCheck className="h-4 w-4 text-yellow-300" />
                        Enterprise Security Standards
                    </div>
                    <h2 className="text-5xl font-bold leading-tight">Access Your Digital Assets Instantly</h2>
                    <p className="text-xl text-white/80 leading-relaxed">
                        Log in to manage your purchases, download files, and receive the latest updates from your favorite sellers.
                    </p>

                    <div className="space-y-4 pt-4">
                        {[
                            'Secure Payment Gateways',
                            'Instant Digital Delivery',
                            'Lifetime File Updates'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-yellow-300" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
