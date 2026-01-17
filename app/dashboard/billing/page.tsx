'use client';

import { Card } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function BillingPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold">Billing & Credits</h1>
                <p className="text-muted-foreground mt-1">Manage your payment methods and credit balance.</p>
            </div>

            <Card className="p-12 border-dashed border-2 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                    <h3 className="font-bold">No billing information</h3>
                    <p className="text-sm text-muted-foreground">Add a payment method to get started.</p>
                </div>
            </Card>
        </div>
    );
}
