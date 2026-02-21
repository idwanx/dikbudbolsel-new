
import { dashboard } from '@/routes';
import type { AppLayoutProps, BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/heading';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { SidebarInset } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Import } from 'lucide-react';
import { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { DialogForm } from './dialog-form';
import AppLayout from '@/layouts/app-layout';
import LayoutBos from '../layout-bos';
import { NavJenjang } from './nav-jenjang';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pagu',
        href: dashboard().url,
    },
];

type Props = {
    pagu?: Pagu[];
    jenjangs: string;
    sumberdana: string;
};

type Pagu = {
    npsn: string;
    nama_sekolah: string;
    status: string;
    jumlah: number;
};

export default function MainPagu({ children }: AppLayoutProps) {
    const page = usePage<Props>();
    const { sumberdana, tahun } = page.props;
    const [dialogImport, setDialogImport] = useState<boolean>(false);
    const [stateImport, setStateImport] = useState(null);
            
    const openDialogImport = (item: any) => {
        setStateImport(item);
        setDialogImport(true);
    };

    const handleDialogToggle = (dialogIsOpen: boolean) => {
        setDialogImport(dialogIsOpen);

        if (!dialogIsOpen) {
            setStateImport(null);
        };
    };

    return (
        <>
            <Dialog open={dialogImport} onOpenChange={handleDialogToggle} modal>
                <DialogForm dialogOpen={dialogImport} dataState={stateImport} />
            </Dialog>
            <Head title="Pagu" />
            <SidebarInset>
                <div className="flex flex-1 flex-col mt-(--header-height) h-[calc(100svh-var(--header-height))]!">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} trigger={true} />
                    <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                        <div className="flex">
                            <Heading
                                title="Pagu"
                                description="Kelola data pagu pada tabel dibawah ini."
                            />
                            {sumberdana && 
                                <div className="ml-auto">
                                    <Button variant="outline" onClick={() => openDialogImport({sumberdana, tahun})}>
                                        <Import /> Import
                                    </Button>
                                </div>
                            }
                        </div>
                        <Separator className="mb-4" />
                        {children}
                    </div>
                </div>
            </SidebarInset>
            <NavJenjang />
        </>
    );
}

MainPagu.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos children={page} />
    </AppLayout>
)