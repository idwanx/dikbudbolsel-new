import AppLayout from '@/layouts/app-layout';
import LayoutBos from '../layout-bos';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MainPengajuan from './main-pengajuan';
import { Button } from '@/components/ui/button';
import { Download, Lock, Plus, Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { AlertDestroyRincian } from './alert-destroy-rincian';
import { AlertSendPengajuan } from './alert-send-pengajuan';
import bos from '@/routes/bos';
import { LabelStatusRincian } from './label-status-rincian';
import Heading from '@/components/heading';
import { Separator } from '@/components/ui/separator';
import { DialogNewRincian } from './dialog-new-rincian';

type StatusRincian = "draft" | "validasi" | "divalidasi" | "berhasil" | "gagal";

type StatusPengajuan = "draft" | "validasi" | "divalidasi" | "disetujui";

type Props = {
    nomor: string;
    tahun: number;
    pengajuan: Pengajuan;
    rincianPengajuan: RincianPengajuan[];
};

type Pengajuan = {
    id: number;
    no_pengajuan: string;
    send_at: string;
    status: StatusPengajuan;
    validated_at: string;
};

type RincianPengajuan = {
    alamat: string;
    id: number;
    created_at: string;
    nama_bank: string;
    nama_penerima: string;
    no_rekening: string;
    nominal: number;
    rka_id: number;
    status: StatusRincian;
    uraian: string
};

export default function RincianPengajuan({ rincianPengajuan, nomor, pengajuan }: Props) {
    const [stateRincianPengajuan, setStateRincianPengajuan] = useState<RincianPengajuan[]>(rincianPengajuan);
    const [dialogForm, setDialogForm] = useState<boolean>(false);
    const [dialogDestroy, setDialogDestroy] = useState<boolean>(false);
    const [stateRincian, setStateRincian] = useState(null);
    const [isLoadingSend, setIsLoadingSend] = useState<boolean>(false);

    const openDialogForm = () => {
        setDialogForm(true);
    };

    const handleDialogToggle = (dialogIsOpen: boolean) => {
        setDialogForm(dialogIsOpen);
    };

    const openDialogDestroy = (value: any) => {
        setStateRincian(value);
        setDialogDestroy(true);
    };

    const handleDialogDestroyToggle = (dialogIsOpen: boolean) => {
        setDialogDestroy(dialogIsOpen);

        if (!dialogIsOpen) {
            setStateRincian(null);
        };
    };

    const loadingSend = (loading: boolean) => {
        setIsLoadingSend(loading);
    };

    const totalRincian: number | undefined = stateRincianPengajuan?.reduce((a, b) => {
        return a + b.nominal;
    }, 0);

    useEffect(() => {
        if (rincianPengajuan) {
            setStateRincianPengajuan(rincianPengajuan);
        }
        return () => {
            nomor;
        }
    }, [rincianPengajuan]);

    const handleDownload = () => {
       window.location.href = bos.pengajuan.downloadRincian(nomor).url;
    };

    return (
        <>
            <Dialog open={dialogForm} onOpenChange={handleDialogToggle} modal>
                <DialogNewRincian dialogForm={dialogForm} pengajuan={pengajuan} />
            </Dialog>
            <Dialog open={dialogDestroy} onOpenChange={handleDialogDestroyToggle}>
                <AlertDestroyRincian stateRincian={stateRincian} closeDialog={handleDialogDestroyToggle} />
            </Dialog>
            <div className="flex">
                <Heading
                    title="Rincian Pengajuan"
                    description="Kelola data pengajuan pada tabel dibawah ini."
                />
            </div>
            <Separator className="mb-4" />
            {nomor === null ? (
                <div className="text-muted-foreground text-sm">
                    Silahkan klik nomor pengajuan pada sidebar disebelah kanan untuk melihat rincian pengajuan,<br /> 
                    jika tidak tersedia silahkan klik tombol (+ Pengajuan) untuk menambahkan pengajuan baru.
                </div>
            ):(
                <>
                    <div className="flex py-2 items-center">
                        <p className='text-sm'>No. {pengajuan.no_pengajuan}</p>
                        <div className="ml-auto">
                            <Button variant="outline" onClick={openDialogForm} disabled={pengajuan.send_at !== null}>
                                <Plus /> Rincian
                            </Button>
                        </div>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-8 text-center">No</TableHead>
                                <TableHead>Uraian</TableHead>
                                <TableHead className="w-60 2xl:w-70">Penerima</TableHead>
                                <TableHead className="w-20 2xl:w-40 text-right">Nominal</TableHead>
                                <TableHead className="w-22 2xl:w-30 text-center">Status</TableHead>
                                <TableHead className="w-15 2xl:w-20 text-center">Pilihan</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {stateRincianPengajuan?.length > 0 ? (
                                stateRincianPengajuan.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-center">{index + 1}</TableCell>
                                    <TableCell className="whitespace-normal">
                                        {item.uraian}
                                    </TableCell>
                                    <TableCell className="whitespace-normal">
                                        <p>{item.nama_penerima}</p>
                                        <p className="text-xs text-muted-foreground">{item.nama_bank}</p>
                                        <p className="text-xs text-muted-foreground">{item.no_rekening}</p>
                                    </TableCell>
                                    <TableCell className="font-mono text-right">
                                        {Number(item.nominal).toLocaleString("id-ID")}
                                    </TableCell>
                                    <TableCell className="text-center"><LabelStatusRincian status={item.status} /></TableCell>
                                    <TableCell className="text-center">
                                        <div className='flex justify-center'>
                                            {item.status === 'draft' || item.status === 'validasi' ? (
                                                <Button type="button" variant="outline" className="h-7 w-7 text-red-500" size="sm" aria-label="Hapus" onClick={() => openDialogDestroy(item)}>
                                                    <Trash2Icon />
                                                </Button>
                                            ):(
                                                <Button type="button" variant="outline" className="h-7 w-7" size="sm" aria-label="Hapus" disabled={true}>
                                                    <Lock className="text-muted-foreground" />
                                                </Button>
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                            ):(
                                <TableRow>
                                    <TableCell colSpan={6} className='text-muted-foreground'>Tidak ada rincian, Klik tombol (+ Rincian) untuk menambah rincian baru.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3} className="text-right">Total</TableCell>
                                <TableCell className="font-mono text-right">{Number(totalRincian).toLocaleString("id-ID")}</TableCell>
                                <TableCell className="text-center">-</TableCell>
                                <TableCell className="text-center">-</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                    <div className="flex flex-row-reverse gap-2 pt-4">
                        {pengajuan.status !== 'divalidasi' && pengajuan.status !== 'disetujui' ? (
                            <AlertSendPengajuan 
                                nomor={nomor} 
                                loadingSend={loadingSend} 
                                isLoading={isLoadingSend} 
                                lengthRincian={rincianPengajuan?.length} 
                                isSend={pengajuan.send_at !== null }
                                status={pengajuan.status}
                            />
                        ):(
                            ''
                        )}
                            <Button variant="outline" onClick={handleDownload} disabled={rincianPengajuan?.length < 1}>
                                <Download /> Download
                            </Button>
                    </div>
                </>
            )}
        </>
    );
}

RincianPengajuan.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos>
            <MainPengajuan children={page} />
        </LayoutBos>
    </AppLayout>
)