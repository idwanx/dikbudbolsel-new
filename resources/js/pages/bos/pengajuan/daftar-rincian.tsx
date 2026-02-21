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
import { Check, ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LabelStatusRincian } from './label-status-rincian';
import Heading from '@/components/heading';
import { Separator } from '@/components/ui/separator';
import { Auth } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { router } from '@inertiajs/react';
import bos from '@/routes/bos';
import { toast } from 'sonner';
import { useAppContext } from '@/layouts/app-context';

type Status = "draft" | "validasi" | "divalidasi" | "berhasil" | "gagal";

type Props = {
    auth: Auth;
    tahun: number;
    sekolah: Sekolah;
    pengajuan: Pengajuan;
    rincianPengajuan: RincianPengajuan[];
};

type Pengajuan = {
    id: number;
    no_pengajuan: string;
    send_at: string;
    slug: string;
    validated_at: string;
};

type RincianPengajuan = {
    alamat: string;
    id: number;
    jam: string;
    nama_bank: string;
    nama_penerima: string;
    no_rekening: string;
    nominal: number;
    rka_id: number;
    status: Status;
    tanggal: string;
    uraian: string
};

type Sekolah = {
    id: number;
    nama_sekolah: string;
    npsn: string;
    slug: string;
};

export default function DaftarRincian({ auth, tahun, sekolah, pengajuan, rincianPengajuan }: Props) {
    const [stateRincianPengajuan, setStateRincianPengajuan] = useState<RincianPengajuan[]>(rincianPengajuan);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const { notification, resetNotification } = useAppContext();

    const userAdminApproval: boolean = auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval';

    const totalRincian: number | undefined = stateRincianPengajuan?.reduce((a, b) => {
        return a + b.nominal;
    }, 0);

    const kembali = () => {
        window.history.back();
    };

    const toggleSelectAll = (checked: boolean) => {
        setSelectedIds(checked ? stateRincianPengajuan.map(item => item.id) : []);
    };

    const toggleItem = (id: number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        if (notification?.info === 'pengajuan-batal') {
            // setStateRincianPengajuan(rincianPengajuan);
            router.visit(bos.pengajuan.index({ tahun: tahun }));

        }
        return () => {
            // pengajuan;
            setStateRincianPengajuan(rincianPengajuan);
        }

    }, [rincianPengajuan, notification]);

    const submitValidasi = () => {
        router.post(bos.transaksi.validasi(pengajuan.slug).url, { data: selectedIds }, {
            preserveScroll: true,
            onSuccess: (page: any) => {
                if (page.flash.status === 'success') {
                    console.log(page);
                    
                    toast.success(page.flash.message, {
                        position: "bottom-center",
                        style: {
                        '--normal-bg': 'var(--background)',
                        '--normal-text': 'light-dark(var(--color-green-600), var(--color-green-400))',
                        '--normal-border': 'light-dark(var(--color-green-600), var(--color-green-400))'
                        } as React.CSSProperties
                    })
                } else {
                    toast.error(page.flash.message, {
                        position: "bottom-center",
                        style: {
                        '--normal-bg': 'var(--background)',
                        '--normal-text': 'var(--destructive)',
                        '--normal-border': 'var(--destructive)'
                        } as React.CSSProperties
                    })
                }
            },
        });
    };

    
    return (
        <>
            <div className="flex">
                <Heading
                    title={`Rincian Pengajuan ${sekolah ? sekolah?.nama_sekolah : ''}`}
                    description="Kelola data pengajuan pada tabel dibawah ini."
                />
                <div className="ml-auto">
                    <Button size="icon-sm" aria-label="Submit" variant="outline" onClick={kembali}>
                        <ChevronLeft />
                    </Button>
                </div>
            </div>
            <Separator className="mb-4" />
            <div className="flex py-2 items-center">
                <p className='text-sm'>No.{" "}{pengajuan.no_pengajuan}</p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-3 text-center">No</TableHead>
                        <TableHead>Uraian</TableHead>
                        <TableHead className="w-50 2xl:w-60">Penerima</TableHead>
                        <TableHead className="w-20 2xl:w-40 text-right">Nominal</TableHead>
                        <TableHead className="w-20 2xl:w-30 text-center">Status</TableHead>
                        <TableHead className="w-12 2xl:w-20 text-center">
                            <Checkbox 
                                id="validasi" 
                                checked={selectedIds.length > 0}
                                onCheckedChange={(checked) => toggleSelectAll(checked as boolean)}
                                className='mr-2'
                            />
                        </TableHead>
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
                                <Checkbox 
                                    key={index}
                                    checked={selectedIds.includes(item.id)}
                                    onCheckedChange={() => toggleItem(item.id)}
                                    className='mr-2'
                                />
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
            <div className="flex flex-row-reverse pt-4">
                <Button onClick={submitValidasi} disabled={selectedIds.length < 1}>
                    <Check /> Validasi
                </Button>
            </div>
        </>
    );
}

DaftarRincian.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos>
            <MainPengajuan children={page} />
        </LayoutBos>
    </AppLayout>
)