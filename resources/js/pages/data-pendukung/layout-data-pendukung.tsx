import AppLayout from '@/layouts/app-layout';
import { SidebarInset } from '@/components/ui/sidebar';
import type { AppLayoutProps } from '@/types';
import { SidebarDataPendukung } from '@/components/sidebar-data-pendukung';
import { AppSidebarHeader } from '@/components/app-sidebar-header';

export default function LayoutDataPendukung({ children, breadcrumbs }: AppLayoutProps) {
    return (
        <>
            <SidebarDataPendukung />
            <SidebarInset>
                <div className="flex flex-1 flex-col mt-(--header-height) h-[calc(100svh-var(--header-height))]!">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} trigger={true} />
                    {children}
                </div>
            </SidebarInset>
        </>
    );
}

LayoutDataPendukung.layout = (page: React.ReactNode) => <AppLayout children={page} />