import AppLayout from '@/layouts/app-layout';
import LayoutBos from '../layout-bos';
import MainRkas from './main-rkas';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from 'lucide-react';
import { usePage } from '@inertiajs/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
    sekolah?: DaftarSekolah[];
    jenjangs: string;
    sumberdana: string;
};

type DaftarSekolah = {
    nama_sekolah: string;
    npsn: string;
    status: string;
    total_belanja_operasi: number;
    total_belanja_modal: number;
};

export default function RekapRkas() {
    const { jenjangs, sekolah } = usePage<Props>().props;

    return (
        <>
        {jenjangs ? (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-10 text-center">No</TableHead>
                        <TableHead className="w-32 text-center">Npsn</TableHead>
                        <TableHead>Nama Sekolah</TableHead>
                        <TableHead className="w-32 text-center">Status</TableHead>
                        <TableHead className="w-28 text-right">Belanja Operasi</TableHead>
                        <TableHead className="w-28 text-right">Belanja Modal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {sekolah?.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="text-center">{index + 1}</TableCell>
                        <TableCell className="text-center">{item.npsn}</TableCell>
                        <TableCell>{item.nama_sekolah}</TableCell>
                        <TableCell className="text-center">{item.status}</TableCell>
                        <TableCell className="text-right font-mono">{Number(item.total_belanja_operasi).toLocaleString("id-ID")}</TableCell>
                        <TableCell className="text-right font-mono">{Number(item.total_belanja_modal).toLocaleString("id-ID")}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
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

RekapRkas.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos>
            <MainRkas children={page} />
        </LayoutBos>
    </AppLayout>
)

