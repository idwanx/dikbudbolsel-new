import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { BosSidebarLeft } from '@/components/bos-sidebar-left';
import Heading from '@/components/heading';
import { Separator } from '@/components/ui/separator';
import { SidebarInset } from '@/components/ui/sidebar';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <SidebarInset className="px-4">
                <div className="flex flex-1 flex-col mt-(--header-height) h-[calc(100svh-var(--header-height))]!">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} trigger={true} />
                    <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                        <div className="flex">
                            <Heading
                                title="Dashboard"
                                description="Kelola data penerima pada tabel dibawah ini."
                            />
                        </div>
                        <Separator className="mb-4" />
                    </div>
                </div>
            </SidebarInset>
        </>
    );
}
Dashboard.layout = (page: React.ReactNode) => <AppLayout children={page} />