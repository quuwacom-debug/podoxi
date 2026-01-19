'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Mail,
    Lock,
    User,
    ArrowRight,
    Check,
    Store,
    User2,
    Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const signupSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    whatsapp: z.string().optional(),
    storeName: z.string().optional(),
    terms: z.boolean().refine(val => val === true, 'You must accept the terms'),
}).refine(() => {
    // If it's intended to be merchant specific in a real app, we'd check role here
    // But for now we just allow them in the schema
    return true;
}, {
    message: "Store name is required for merchants",
    path: ["storeName"]
});

type SignUpData = z.infer<typeof signupSchema>;

function SignUpForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const roleParam = searchParams.get('role');
    const [activeTab, setActiveTab] = React.useState<string>(roleParam === 'merchant' ? 'merchant' : 'customer');
    const isMerchantSignup = activeTab === 'merchant';

    const [isLoading, setIsLoading] = React.useState(false);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<SignUpData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            terms: false
        }
    });

    const termsChecked = watch('terms');

    const onSubmit = async (data: SignUpData) => {
        // data is used in line 76
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        toast.success(isMerchantSignup ? 'Merchant account created!' : 'Account created successfully!');

        // For demo purposes, we can redirect directly or to signin
        // If we want to simulate auto-login, we could call login() here too if we imported store
        if (isMerchantSignup) {
            router.push('/auth/signin?email=' + data.email + '&role=merchant'); // Hint: In a real app we might auto-login
        } else {
            router.push('/auth/signin');
        }
    };

    return (
        <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="text-center space-y-2">
                <div className="flex justify-center mb-6">
                    <Link href="/" className="inline-flex items-center gap-2">
                        <Image
                            src="/prodoximain.png"
                            alt="PRODOXI"
                            width={180}
                            height={50}
                            className="h-12 w-auto"
                            priority
                        />
                    </Link>
                </div>
                <h1 className="text-3xl font-bold">{isMerchantSignup ? 'Merchant Registration' : 'Create an Account'}</h1>
                <p className="text-muted-foreground text-sm">
                    {isMerchantSignup
                        ? 'Start selling your digital products on PRODOXI today'
                        : 'Join our community of digital creators and buyers'}
                </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/50 rounded-xl h-12">
                    <TabsTrigger
                        value="customer"
                        className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm h-10 font-bold"
                    >
                        Customer
                    </TabsTrigger>
                    <TabsTrigger
                        value="merchant"
                        className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm h-10 font-bold"
                    >
                        Merchant
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="firstName"
                                placeholder="John"
                                className={cn("pl-10 h-11", errors.firstName && "border-red-500")}
                                {...register('firstName')}
                            />
                        </div>
                        {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <div className="relative">
                            <User2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="lastName"
                                placeholder="Doe"
                                className={cn("pl-10 h-11", errors.lastName && "border-red-500")}
                                {...register('lastName')}
                            />
                        </div>
                        {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className={cn("pl-10 h-11", errors.email && "border-red-500")}
                            {...register('email')}
                        />
                    </div>
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>

                {isMerchantSignup && (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="whatsapp">WhatsApp Number</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="whatsapp"
                                    placeholder="+880 1XXX XXXXXX"
                                    className={cn("pl-10 h-11", errors.whatsapp && "border-red-500")}
                                    {...register('whatsapp')}
                                />
                            </div>
                            {errors.whatsapp && <p className="text-xs text-red-500">{errors.whatsapp.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="storeName">Store Name</Label>
                            <div className="relative">
                                <Store className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="storeName"
                                    placeholder="Your Digital Store"
                                    className={cn("pl-10 h-11", errors.storeName && "border-red-500")}
                                    {...register('storeName')}
                                />
                            </div>
                            {errors.storeName && <p className="text-xs text-red-500">{errors.storeName.message}</p>}
                        </div>
                    </>
                )}

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className={cn("pl-10 h-11", errors.password && "border-red-500")}
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
                    <Image src="/google.svg" alt="Google" width={16} height={16} className="h-4 w-4 mr-2" /> Google
                </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
                Already have an account? <Link href="/auth/signin" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
        </div>
    );
}

export default function SignUpPage() {
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
                <React.Suspense fallback={<div className="h-5 w-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />}>
                    <SignUpForm />
                </React.Suspense>
            </div>
        </div>
    );
}
