import AppLayout from '@/layouts/app-layout';
import type { Auth, BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import LayoutBos from '../layout-bos';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { SidebarInset } from '@/components/ui/sidebar';
import { SidebarSekolah } from './sidebar-sekolah';
import { SidebarPengajuan } from './sidebar-pengajuan';
import { ReactNode } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pengajuan',
        href: "#",
    },
];

type Props = {
    auth: Auth
    sekolah: Sekolah;
    npsn: string;
};

type Sekolah = {
    id: number;
    nama_sekolah: string;
};

type MainLayoutProps = {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
};

export default function MainPengajuan({ children }: MainLayoutProps) {
    const page = usePage<Props>();
    const { auth } = page.props;
    
    const userDinas: boolean = auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval' || auth.user.roleuser.slug === 'checker';

    return (
        <>
            <Head title="Pengajuan" />
            <SidebarInset>
                <div className="flex flex-1 flex-col mt-(--header-height) h-[calc(100svh-var(--header-height))]!">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} trigger={true} />
                    <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                        {children}
                    </div>
                </div>
            </SidebarInset>
            {userDinas ? (
                <SidebarSekolah />
            ):(
                <SidebarPengajuan />
            )}
        </>
    );
}

MainPengajuan.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos children={page} />
    </AppLayout>
)