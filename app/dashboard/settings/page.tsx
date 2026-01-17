'use client';

import { Card } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold">Account Settings</h1>
                <p className="text-muted-foreground mt-1">Update your profile and security preferences.</p>
            </div>

            <Card className="p-12 border-dashed border-2 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Settings className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                    <h3 className="font-bold">Settings coming soon</h3>
                    <p className="text-sm text-muted-foreground">We are working on this feature.</p>
                </div>
            </Card>
        </div>
    );
}
