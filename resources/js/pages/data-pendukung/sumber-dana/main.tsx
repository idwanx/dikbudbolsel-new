import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/heading';
import LayoutDataPendukung from '../layout-data-pendukung';
import sumberDana from '@/routes/sumber-dana';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sumber Dana',
        href: sumberDana.index().url,
    },
];

export default function Main() {
    return (
        <>
            <Head title="Sumber Dana" />
            
            <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <div className="flex">
                    <Heading
                        title="Sumber Dana"
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
        <LayoutDataPendukung children={page} breadcrumbs={breadcrumbs} />
    </AppLayout>
)