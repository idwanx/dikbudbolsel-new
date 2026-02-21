import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/heading';
import LayoutDataPendukung from '../layout-data-pendukung';
import sekolah from '@/routes/sekolah';
import { Dialog } from '@/components/ui/dialog';
import { DialogForm } from './dialog-form';
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
} from "@/components/ui/table";
import { Links, Meta } from '@/types/pagination';

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

export default function Main({ sekolahs, jenjangs }: Props) {
    const [dialogImport, setDialogImport] = useState<boolean>(false);
    
    const openDialogImport = () => {
        setDialogImport(true);
    };

    const handleDialogToggle = (dialogIsOpen: boolean) => {
        setDialogImport(dialogIsOpen);
    };

    return (
        <>
            <Head title="Sekolah" />
            <Dialog open={dialogImport} onOpenChange={handleDialogToggle} modal>
                <DialogForm dialogOpen={dialogImport} jenjangs={jenjangs} />
            </Dialog>
            <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <div className="flex">
                    <Heading
                        title="Sekolah"
                        description="Kelola daftar sekolah pada tabel dibawah ini."
                    />
                    <div className="ml-auto">
                        <Button variant="outline" onClick={openDialogImport}>
                            <Import /> Import
                        </Button>
                    </div>
                </div>
                <Separator className="mb-4" />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1.5 text-center">No</TableHead>
                            <TableHead className="text-center">Npsn</TableHead>
                            <TableHead>Nama Sekolah</TableHead>
                            <TableHead className="text-center">Jenjang</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                            <TableHead className="text-center">Pilihan</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sekolahs.data.length > 0 ? (
                            sekolahs.data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-center">{sekolahs.meta.from + index}</TableCell>
                                    <TableCell className="text-center">{item.npsn}</TableCell>
                                    <TableCell>{item.nama_sekolah}</TableCell>
                                    <TableCell className="text-center">{item.nama_jenjang}</TableCell>
                                    <TableCell className="text-center">{item.status}</TableCell>
                                    <TableCell className="text-center">-</TableCell>
                                    
                                </TableRow>
                            ))
                        ):(
                            <TableRow>
                                <TableCell colSpan={5}>Tidak ada data</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}

Main.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutDataPendukung children={page} breadcrumbs={breadcrumbs} />
    </AppLayout>
)