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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Dialog } from '@/components/ui/dialog';
import { AlertSendValidation } from './alert-send-validation';
import { Spinner } from '@/components/ui/spinner';

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
    status: string;
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
    status: Status;
    uraian: string
};

type Sekolah = {
    id: number;
    nama_sekolah: string;
    npsn: string;
    slug: string;
};

type PropsChecked = {
    id: number;
    status: Status;
};

export default function DaftarRincian({ auth, tahun, sekolah, pengajuan, rincianPengajuan }: Props) {
    const [stateRincianPengajuan, setStateRincianPengajuan] = useState<RincianPengajuan[]>(rincianPengajuan);
    const [dialogKonfirmasi, setDialogKonfirmasi] = useState<boolean>(false);
    const [selectedIds, setSelectedIds] = useState<PropsChecked[]>([]);
    const { notification, resetNotification } = useAppContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const totalRincian: number | undefined = stateRincianPengajuan?.reduce((a, b) => {
        return a + b.nominal;
    }, 0);

    const submitValidasi = () => {
        router.post(bos.transaksi.validasi(pengajuan.slug).url, { data: selectedIds }, {
            preserveScroll: true,
            onStart: () => {
                setIsLoading(true);
                handleDialogToggle(false);
            },
            onSuccess: (page: any) => {
                if (page.flash.status === 'success') {
                    toast.success(page.flash.message, {
                        position: "bottom-center",
                        style: {
                        '--normal-bg': 'var(--background)',
                        '--normal-text': 'light-dark(var(--color-green-600), var(--color-green-400))',
                        '--normal-border': 'light-dark(var(--color-green-600), var(--color-green-400))'
                        } as React.CSSProperties
                    });

                    router.reload({ only: ['rincianPengajuan'] });
                } else {
                    toast.error(page.flash.message, {
                        position: "bottom-center",
                        style: {
                        '--normal-bg': 'var(--background)',
                        '--normal-text': 'var(--destructive)',
                        '--normal-border': 'var(--destructive)'
                        } as React.CSSProperties
                    });
                }
            },
            onError: () => {
                setIsLoading(false);
            },
            onFinish: () => {
                setIsLoading(false);
            },
        });
    };

    const handleSelectStatus = (valueStatus: any, valueId: number) => {
        setSelectedIds(prevItems =>
            prevItems.map(item =>
                item.id === valueId ? { ...item, status: valueStatus } : item
            )
        );

        setStateRincianPengajuan(prevItems =>
            prevItems.map(item =>
                item.id === valueId ? { ...item, status: valueStatus } : item
            )
        );
    };

    const handleSelectAllStatus = (valueStatus: any) => {
        setSelectedIds(stateRincianPengajuan.map(item => ({
            id: item.id, 
            status: valueStatus
        })));

        setStateRincianPengajuan(stateRincianPengajuan.map((item) => {
            return {
                ...item,
                status: valueStatus,
            };
        }));
    };

    useEffect(() => {
        if (notification?.info === 'pengajuan-batal') {
            resetNotification();
            router.visit(bos.pengajuan.index({ tahun: tahun }));
        }

        return () => {
            setStateRincianPengajuan(rincianPengajuan);
            setSelectedIds(rincianPengajuan.map(item => ({
                id: item.id, 
                status: item.status
            })));
        }

    }, [rincianPengajuan, notification]);

    function checkRole(role: string): boolean {
        switch (role) {
            case 'admin':
                return true;
            case 'checker':
                return auth.user.roleuser.sekolah_permission.includes(sekolah.id.toString());
            default:
                return false; 
        }
    }

    const checkAutorization = checkRole(auth.user.roleuser.slug);

    const openDialogKonfirmasi = () => {
        setDialogKonfirmasi(true);
    };

    const handleDialogToggle = (dialogIsOpen: boolean) => {
        setDialogKonfirmasi(dialogIsOpen);
    };

    function kembali() {
        window.history.back();
    };

    const getClassNameForColor = (color: Status) => {
        switch (color) {
        case 'draft':
            return '';
        case 'validasi':
            return 'bg-amber-50 ring ring-amber-700 text-amber-700 dark:bg-amber-950 dark:text-amber-300';
        case 'divalidasi':
            return 'bg-blue-50 ring ring-blue-700 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
        case 'berhasil': 
            return 'bg-green-50 ring ring-green-700 text-green-700  dark:bg-green-950 dark:text-green-300';
        case 'gagal':
            return 'bg-red-50 ring ring-red-700 text-red-700 dark:bg-red-950 dark:text-red-300';
        default:
            return '';
        }
    };

    return (
        <>
            <Dialog open={dialogKonfirmasi} onOpenChange={handleDialogToggle} modal>
                <AlertSendValidation dialogKonfirmasi={dialogKonfirmasi} submitValidasi={submitValidasi} />
            </Dialog>
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
                        <TableHead className="w-30 2xl:w-40 text-center">
                            Status
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
                            <TableCell className="text-center">
                            {auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval' ? (
                                <Select 
                                    defaultValue={item.status} 
                                    name="status"
                                    value={item.status} 
                                    onValueChange={(e) => handleSelectStatus(e, item.id)}
                                    autoComplete='status'
                                >
                                    <SelectTrigger id="status" className={`w-full h-7 border-none ${getClassNameForColor(item.status)} shadow-none`} tabIndex={1}>
                                    <SelectValue placeholder="Pilih Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="validasi">Validasi</SelectItem>
                                            <SelectItem value="divalidasi">Divalidasi</SelectItem>
                                            <SelectItem value="berhasil">Berhasil</SelectItem>
                                            <SelectItem value="gagal">Gagal</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            ):(
                                pengajuan.status !== 'disetujui' ?
                                    !checkAutorization ? (
                                        <LabelStatusRincian status={item.status} />
                                    ):(
                                        <Select 
                                            defaultValue={item.status} 
                                            name="status"
                                            value={item.status} 
                                            onValueChange={(e) => handleSelectStatus(e, item.id)}
                                            autoComplete='status'
                                        >
                                            <SelectTrigger id="status" className={`w-full h-7 border-none ${getClassNameForColor(item.status)} shadow-none`} tabIndex={1}>
                                            <SelectValue placeholder="Pilih Status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="validasi">Validasi</SelectItem>
                                                    <SelectItem value="divalidasi">Divalidasi</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )
                                :
                                <LabelStatusRincian status={item.status} />
                            )}
                            </TableCell>
                        </TableRow>
                    ))
                    ):(
                        <TableRow>
                            <TableCell colSpan={5} className='text-muted-foreground'>Tidak ada rincian, Klik tombol (+ Rincian) untuk menambah rincian baru.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3} className="text-right">Total</TableCell>
                        <TableCell className="font-mono text-right">{Number(totalRincian).toLocaleString("id-ID")}</TableCell>
                        <TableCell className="text-center">
                            {auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval' ? (
                                <Select 
                                    defaultValue={pengajuan.status} 
                                    name="status_all"
                                    onValueChange={(e) => handleSelectAllStatus(e)}
                                    autoComplete='status_all'
                                >
                                    <SelectTrigger id="status" className="w-full h-7" tabIndex={1}>
                                        <SelectValue placeholder="Pilih Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="validasi">Validasi</SelectItem>
                                            <SelectItem value="divalidasi">Divalidasi</SelectItem>
                                            <SelectItem value="berhasil">Berhasil</SelectItem>
                                            <SelectItem value="gagal">Gagal</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            ):(
                                pengajuan.status !== 'disetujui' &&
                                checkAutorization && 
                                <Select 
                                    defaultValue={pengajuan.status} 
                                    name="status_all"
                                    onValueChange={(e) => handleSelectAllStatus(e)}
                                    autoComplete='status_all'
                                >
                                    <SelectTrigger id="status" className="w-full h-7" tabIndex={1}>
                                        <SelectValue placeholder="Pilih Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="validasi">Validasi</SelectItem>
                                            <SelectItem value="divalidasi">Divalidasi</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            {auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval' ? (
                <div className="flex flex-row-reverse pt-4">
                    <Button onClick={openDialogKonfirmasi} disabled={isLoading}>
                        {isLoading ? 
                        <Spinner />
                        :
                        <Check />
                        }
                         Setujui
                    </Button>
                </div>
            ):(
                pengajuan.status !== 'disetujui' &&
                    checkAutorization && 
                    <div className="flex flex-row-reverse pt-4">
                        <Button onClick={openDialogKonfirmasi} disabled={isLoading}>
                            {isLoading ? 
                            <Spinner />
                            :
                            <Check />
                            }
                            Validasi
                        </Button>
                    </div>
            )}
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