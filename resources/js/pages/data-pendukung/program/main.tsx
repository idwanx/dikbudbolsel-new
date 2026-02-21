import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/heading';
import LayoutDataPendukung from '../layout-data-pendukung';
import sekolah from '@/routes/sekolah';
import { Dialog } from '@/components/ui/dialog';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Import } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Links, Meta } from '@/types/pagination';
import { DialogForm } from './dialog-form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sekolah',
        href: sekolah.index().url,
    },
];

interface Props {
    sekolahs: SekolahsProps;
    jenjangs: Jenjangs[];
}

interface SekolahsProps {
    data: Sekolahs[];
    links: Links;
    meta: Meta;
}

interface Sekolahs {
    npsn: number;
    nama_sekolah: string;
    nama_jenjang: string;
    status: string;
}

interface Jenjangs {
    id: number;
    nama_jenjang: string;
}

export default function Main() {
    const [dialogImport, setDialogImport] = useState<boolean>(false);
    
    const openDialogImport = () => {
        setDialogImport(true);
    };

    const handleDialogToggle = (dialogIsOpen: boolean) => {
        setDialogImport(dialogIsOpen);
    };

    return (
        <>
            <Head title="Program" />
            <Dialog open={dialogImport} onOpenChange={handleDialogToggle} modal>
                <DialogForm dialogOpen={dialogImport} />
            </Dialog>
            <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <div className="flex">
                    <Heading
                        title="Program"
                        description="Kelola daftar Program pada tabel dibawah ini."
                    />
                    <div className="ml-auto">
                        <Button variant="outline" onClick={openDialogImport}>
                            <Import /> Import
                        </Button>
                    </div>
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