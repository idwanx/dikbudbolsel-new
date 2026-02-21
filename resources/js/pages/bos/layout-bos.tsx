import AppLayout from '@/layouts/app-layout';
import { BosSidebarLeft } from '@/components/bos-sidebar-left';
import type { AppLayoutProps } from '@/types';

export default function LayoutBos({ children }: AppLayoutProps) {

    return (
        <>
            <BosSidebarLeft />
            {children}
        </>
    );
}

LayoutBos.layout = (page: React.ReactNode) => <AppLayout children={page} />