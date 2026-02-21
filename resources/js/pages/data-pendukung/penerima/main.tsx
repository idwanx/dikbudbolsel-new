import AppLayout from '@/layouts/app-layout';
import type { Auth, BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/heading';
import LayoutDataPendukung from '../layout-data-pendukung';
import sekolah from '@/routes/sekolah';
import { Dialog } from '@/components/ui/dialog';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit2Icon, Plus, Trash } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Links, Meta } from '@/types/pagination';
import { FormPenerima } from './form';
import { AlertDialog } from '@/components/ui/alert-dialog';
import { AlertDialogDestroy } from '../alert-dialog-destroy';
import { TableSekolah } from './table-sekolah';
import { TableDinas } from './table-dinas';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Penerima',
        href: "#",
    },
];

type ModeType = "create" | "update";

interface Props {
    penerimas: DataProps;
    auth: Auth
}

interface DataProps {
    data: FieldData[];
    links: Links;
    meta: Meta;
}

interface FieldData {
    id?: number;
    nama_penerima?: string;
    alamat?: string;
    no_rekening?: string;
    nama_bank?: string;
    npwp?: string;
    nama_sekolah?: string;
}

export default function Main({ penerimas, auth }: Props) {
    const [dialogForm, setDialogForm] = useState<boolean>(false);
    const [modeType, setModeType] = useState<ModeType>("create");
    const [dialogDestroy, setDialogDestroy] = useState<boolean>(false);
    const [stateDestroy, setStateDestroy] = useState(null);
    const userDinas: boolean = auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval' || auth.user.roleuser.slug === 'checker';

    const { data, setData, post, patch, processing, reset, errors, clearErrors } = useForm<FieldData>({
        nama_penerima: '',
        alamat: '',
        no_rekening: '',
        nama_bank: '',
        npwp: '',
    });
    
    const openDialogForm = (mode: ModeType, item?: any) => {
        setModeType(mode);
        
        switch (mode) {
        case 'update':
            setData(item);
            setDialogForm(true);
            break;
        default:
            setDialogForm(true);
            break;
        }
    };

    const openAlertDestroy = (item?: any) => {
        setStateDestroy(item);
        setDialogDestroy(true);
    };

    const handleDialogToggle = (dialogIsOpen: boolean) => {
        setDialogForm(dialogIsOpen);
        if (!dialogIsOpen) {
            setModeType("create");
            reset();
            clearErrors();
        };
    };

    const handleAlertToggle = (alertIsOpen: boolean) => {
        setDialogDestroy(alertIsOpen);
        if (!alertIsOpen) {
            reset();
            clearErrors();
        };
    };

    return (
        <>
            <AlertDialog open={dialogDestroy} onOpenChange={handleAlertToggle}>
                <AlertDialogDestroy stateDestroy={stateDestroy} />
            </AlertDialog>
            <Dialog open={dialogForm} onOpenChange={handleDialogToggle} modal>
                <FormPenerima 
                    mode={modeType} 
                    data={data}
                    post={post}
                    patch={patch}
                    setData={setData}
                    processing={processing} 
                    errors={errors}
                    closeModal={handleDialogToggle}
                    reset={reset}
                    clearErrors={clearErrors}
                />
            </Dialog>
            <Head title="Penerima" />
            <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <div className="flex">
                    <Heading
                        title="Penerima"
                        description="Kelola daftar penerima pada tabel dibawah ini."
                    />
                    <div className="ml-auto">
                        {!userDinas && 
                            <Button variant="outline" onClick={() => openDialogForm("create")}>
                                <Plus /> Tambah
                            </Button>
                        }
                    </div>
                </div>
                <Separator className="mb-4" />
                {userDinas ? (
                    <TableDinas penerimas={penerimas} />
                    
                ):(
                    <TableSekolah penerimas={penerimas} openDialogForm={openDialogForm} openAlertDestroy={openAlertDestroy} />
                )}
            </div>
        </>
    );
}

Main.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutDataPendukung children={page} breadcrumbs={breadcrumbs} />
    </AppLayout>
)