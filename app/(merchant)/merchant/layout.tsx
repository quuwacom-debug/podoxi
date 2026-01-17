import { MerchantSidebar } from "@/components/merchant/Sidebar";
import { TopBar } from "@/components/admin/TopBar"; // Reusing admin topbar for consistency

export default function MerchantLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-muted/20 font-sans">
            <MerchantSidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <TopBar />
                <main className="flex-1 overflow-y-auto p-6 lg:p-10">
                    {children}
                </main>
            </div>
        </div>
    )
}
