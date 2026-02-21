import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import LayoutBos from './layout-bos';
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/heading';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { SidebarInset } from '@/components/ui/sidebar';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard({ rkas }: { rkas: any}) {
    
    return (
        <>
            <Head title="Instansi" />
            <SidebarInset>
                <div className="flex flex-1 flex-col mt-(--header-height) h-[calc(100svh-var(--header-height))]!">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} trigger={true} />
                    <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                        <div className="flex">
                            <Heading
                                title="Dashboard"
                                description="Kelola data dashboard pada tabel dibawah ini."
                            />
                            <div className="ml-auto">
                                {/* <Button onClick={() => openDialogImport('create')} tabIndex={1}>Registrasi</Button> */}
                            </div>
                        </div>
                        <Separator className="mb-4" />
                        <div>Content</div>
                    </div>
                </div>
            </SidebarInset>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos children={page} breadcrumbs={breadcrumbs} />
    </AppLayout>
)