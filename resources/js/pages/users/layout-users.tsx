import AppLayout from '@/layouts/app-layout';
import { SidebarInset } from '@/components/ui/sidebar';
import type { AppLayoutProps } from '@/types';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { SidebarUsers } from '@/components/sidebar-users';

export default function LayoutUsers({ children, breadcrumbs }: AppLayoutProps) {
    return (
        <>
            <SidebarUsers />
            <SidebarInset>
                <div className="flex flex-1 flex-col mt-(--header-height) h-[calc(100svh-var(--header-height))]!">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} trigger={true} />
                    {children}
                </div>
            </SidebarInset>
        </>
    );
}

LayoutUsers.layout = (page: React.ReactNode) => <AppLayout children={page} />