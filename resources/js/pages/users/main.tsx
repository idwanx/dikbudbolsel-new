import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/heading';
import LayoutUsers from './layout-users';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: dashboard().url,
    },
];

export default function Main() {
    return (
        <>
            <Head title="Users" />
            
            <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <div className="flex">
                    <Heading
                        title="Dashboard"
                        description="Gambaran umum rekapitulasi data."
                    />
                </div>
                <Separator className="mb-4" />
                
            </div>
        </>
    );
}

Main.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutUsers children={page} breadcrumbs={breadcrumbs} />
    </AppLayout>
)