import AppLayout from '@/layouts/app-layout';
import LayoutBos from '../layout-bos';
import { dashboard } from '@/routes';
import type { AppLayoutProps, Auth, BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { SidebarInset } from '@/components/ui/sidebar';
import { useState } from 'react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Import } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { TabsMenu } from './tab-menu';
import { BosSidebarRightSekolah } from '@/components/bos-sidebar-right-sekolah';
import { Dialog } from '@/components/ui/dialog';
import { DialogForm } from './dialog-form';
import { NavJenjang } from './nav-jenjang';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Rkas',
        href: dashboard().url,
    },
];

type Props = {
    auth: Auth
    sekolah: Sekolah;
    npsn: string;
    sumberdana: string;
};

type Sekolah = {
    id: number;
    nama_sekolah: string;
};

export default function MainRkas({ children }: AppLayoutProps) {
    const page = usePage<Props>();
    const { auth, sekolah, sumberdana, tahun } = page.props;
    const userDinas: boolean = auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval' || auth.user.roleuser.slug === 'checker';
    const isRekap: boolean = page.url.startsWith(`/bos/${tahun}/rkas/rekapitulasi`);
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
            <Head title="Rkas" />
            <SidebarInset>
                <div className="flex flex-1 flex-col mt-(--header-height) h-[calc(100svh-var(--header-height))]!">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} trigger={true} />
                    <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                        <div className="flex">
                            <Heading
                                title={`${isRekap ? 'Rekapitulasi ' : `Rincian ${sekolah ? sekolah?.nama_sekolah : ''}`}`}
                                description="Kelola data rkas pada tabel dibawah ini."
                            />
                            {isRekap ? '' : (
                                userDinas &&
                                    sekolah && 
                                    <div className="ml-auto">
                                        <Button variant="outline" onClick={() => openDialogImport({sekolah, sumberdana, tahun})}>
                                            <Import /> Import
                                        </Button>
                                    </div>
                            )}
                        </div>
                        <Separator className="mb-4" />
                        <div className="py-2">
                            <TabsMenu />
                        </div>
                        {children}
                    </div>
                </div>
            </SidebarInset>
            {userDinas ? (
                isRekap ? (
                    <NavJenjang />
                ):(
                    <BosSidebarRightSekolah />
                )
            ):(
                ''
            )}
        </>
    );
}

MainRkas.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos children={page} />
    </AppLayout>
)

