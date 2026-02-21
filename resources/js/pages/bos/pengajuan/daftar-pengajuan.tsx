import AppLayout from '@/layouts/app-layout';
import { router } from '@inertiajs/react';
import LayoutBos from '../layout-bos';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MainPengajuan from './main-pengajuan';
import { Button } from '@/components/ui/button';
import { TextSearch } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LabelStatusPengajuan } from './label-status-pengajuan';
import bos from '@/routes/bos';
import Heading from '@/components/heading';
import { Separator } from '@/components/ui/separator';
import { Auth } from '@/types';
import { useAppContext } from '@/layouts/app-context';

type Status = "draft" | "validasi" | "divalidasi" | "disetujui";

type Props = {
    auth: Auth
    pengajuans: DaftarPengajuan[];
    sekolah: Sekolah;
    tahun: number;
};

type DaftarPengajuan = {
    approved_at: string;
    created_at: string;
    dikirim: string;
    id: number;
    jenjang: string;
    nama_sekolah: string;
    npsn: string;
    no_pengajuan: string;
    slug: string;
    status: Status;
    validated_at: string;
};


type Sekolah = {
    id: number;
    nama_sekolah: string;
    npsn: string;
    slug: string;
};

export default function DaftarPengajuan({ pengajuans, sekolah, tahun }: Props) {
    const [daftarPengajuans, setDaftarPengajuans] = useState<DaftarPengajuan[] | []>(pengajuans);

    const { notification, resetNotification } = useAppContext();

    const addNewPengajuan = (newPengajuan: DaftarPengajuan) => {
        setDaftarPengajuans([...daftarPengajuans, newPengajuan]);
        resetNotification();
    };

    const destroyPengajuan = (id: number) => {
        setDaftarPengajuans(prevItems =>
            prevItems.filter(item => item.id !== id)
        );
    };

    const viewRincian = (data: DaftarPengajuan) => {
       router.visit(bos.pengajuan.daftarRincian({ tahun: tahun, rincian: 'rincian', jenjangs: data.jenjang, npsn: data.npsn, nomor: data.slug }).url);
    };

    useEffect(() => {
        if (notification?.info === 'pengajuan-baru') {
            addNewPengajuan(notification.data);
        } else if (notification?.info === 'pengajuan-batal') {
            destroyPengajuan(notification.data.id)
        }

        return () => {
           router.reload({ only: ['pengajuans'] });
        }

    }, [notification]);

    return (
        <>
            <div className="flex">
                <Heading
                    title={`Daftar Pengajuan ${sekolah ? sekolah?.nama_sekolah : ''}`}
                    description="Kelola data pengajuan pada tabel dibawah ini."
                />
            </div>
            <Separator className="mb-4" />
            <div className="flex py-2 items-center">
                {!sekolah ? (
                    <p className='text-sm'>Pada tabel dibawah ini adalah daftar pengajuan yang belum di validasi/disetujui.</p>
                ):(
                    <p className='text-sm'>Pada tabel dibawah ini adalah daftar semua pengajuan dari sekolah yang anda pilih.</p>
                )}
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-3 text-center">No</TableHead>
                        <TableHead>Pengajuan</TableHead>
                        <TableHead className="w-40 2xl:w-50 text-center">Dikirim</TableHead>
                        <TableHead className="w-40 2xl:w-50 text-center">Status</TableHead>
                        <TableHead className="w-20 2xl:w-40 text-center">Rincian</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {daftarPengajuans.length > 0 ? (
                        daftarPengajuans.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-center">{index+1}</TableCell>
                                
                                <TableCell className="whitespace-normal">
                                    {!sekolah && (
                                        <p className="font-medium">{item.nama_sekolah}</p>
                                    )}
                                    <p className="text-muted-foreground">No. {item.no_pengajuan}</p>
                                </TableCell>
                                <TableCell className="text-center">
                                    {item.dikirim}
                                </TableCell>
                                <TableCell className="text-center">
                                    <LabelStatusPengajuan status={item.status} />
                                </TableCell>
                                <TableCell className="text-center">
                                    {/* <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button size="icon-sm" aria-label="Submit" variant="outline" onClick={() => openDialogRincian(item.slug)}>
                                                    <Eye />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>Lihat rincian</TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider> */}
                                    {/* <Link className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0">
                                        <TextSearch />
                                    </Link> */}
                                    
                                    <Button type="button" variant="outline" className="h-7 w-7" size="sm" aria-label="Hapus" onClick={() => viewRincian(item)}>
                                        <TextSearch />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ):(
                        <TableRow>
                            <TableCell colSpan={5} className="text-center">Tidak ada data.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
}

DaftarPengajuan.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos>
            <MainPengajuan children={page} />
        </LayoutBos>
    </AppLayout>
)
