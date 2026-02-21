import AppLayout from '@/layouts/app-layout';
import LayoutBos from '../layout-bos';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmptyPage } from './empty-page';
import MainRkas from './main-rkas';
import { Auth } from '@/types';

type Props = {
    auth: Auth;
    sekolah?: Sekolah;
    rkas?: Rkas[] | undefined;
    jenjangs: string;
    npsn: string;
    sumberdana: string;
    penerimas: FieldPenerima[];
    pajaks: FieldPajak[]
};

type Sekolah = {
    id: number;
    nama_sekolah: string;
    jumlah: number;
};


type Rkas = {
    id: number;
    jumlah: number;
    kegiatan_id: number;
    kode_kegiatan: string;
    kode_program: string;
    kode_rincian_belanja: string;
    kode_sub_program: string;
    nama_jenis_belanja: string;
    nama_rincian_belanja: string;
    program_id: number;
    rincian_belanja_id: number;
    sekolah_id: number;
    sub_program_id: number;
    sumber_dana_id: number;
    tahun: string;
    realisasi: number;
    uraian_kegiatan : string
    uraian_program: string
    uraian_sub_program: string;
};

interface FieldPenerima {
    id: number;
    nama_penerima: string;
    no_rekening: string;
    nama_bank: string;
}


interface FieldPajak {
    id: number;
    sub_jenis_transaksi: string;
    nilai: number;
}


export default function RincianRkas({ sekolah, rkas, npsn }: Props) {
    
    const totalRkas: number | undefined = rkas?.reduce((a, b) => {
        return a + b.jumlah;
    }, 0);

    return (
        <>
            {npsn ? (
            <>
                <div className="flex text-sm py-4">
                    <div>Pagu:{' '}<span className="font-medium font-mono">{sekolah ? Number(sekolah?.jumlah).toLocaleString("id-ID") : 0}</span></div>
                    <div className="ml-auto">
                        <div>Total Rkas:{' '}<span className="font-medium font-mono">{Number(totalRkas).toLocaleString("id-ID")}</span></div>
                    </div>
                </div>
                {rkas?.length! > 0 ? (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-7 text-center">No</TableHead>
                                <TableHead className="w-32 text-center">Jenis Belanja</TableHead>
                                <TableHead>Uraian Kegiatan</TableHead>
                                <TableHead className="w-28 text-right">Jumlah</TableHead>
                                <TableHead className="w-28 text-right">Realisasi</TableHead>
                                <TableHead className="w-28 text-right">Sisa</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {rkas?.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-center">{index + 1}</TableCell>
                                <TableCell className="text-center">{item.nama_jenis_belanja}</TableCell>
                                <TableCell className="whitespace-normal">
                                    <p className="text-fuchsia-700/80"><span className="tabular-nums">{item.kode_program}</span> - {item.uraian_program}</p>
                                            <p className="text-emerald-700/90"><span className="tabular-nums">{item.kode_sub_program}</span> - {item.uraian_sub_program}</p>
                                    <p className="text-muted-foreground"><span className="tabular-nums">{item.kode_kegiatan}</span> - {item.uraian_kegiatan}</p>
                                    <p><span className="tabular-nums">{item.kode_rincian_belanja}</span> - {item.nama_rincian_belanja}</p>
                                </TableCell>
                                <TableCell className="text-right font-mono">{Number(item.jumlah).toLocaleString("id-ID")}</TableCell>
                                <TableCell className="text-right font-mono">{Number(item.realisasi).toLocaleString("id-ID")}</TableCell>
                                <TableCell className="text-right font-mono">{Number(item.jumlah-item.realisasi).toLocaleString("id-ID")}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                ):(
                    <EmptyPage />
                )}
            </>
            ):(
                <Alert>
                    <InfoIcon />
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>
                        Silahkan pilih sekolah pada menu sidebar sebelah kanan untuk menampilkan data.
                    </AlertDescription>
                </Alert>
            )}
        </>
    );
}

RincianRkas.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos>
            <MainRkas children={page} />
        </LayoutBos>
    </AppLayout>
)

