import AppLayout from '@/layouts/app-layout';
import LayoutBos from '../layout-bos';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, InfoIcon } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MainPagu from './main-pagu';
import { EmptyPage } from './empty-page';
import ValidationErrors from '@/components/validation-errors';
import { usePage } from '@inertiajs/react';
import { TabsMenu } from './tab-menu';

type Props = {
    pagu?: Pagu[];
    jenjangs: string;
    sumberdana: string;
};

type Pagu = {
    npsn: string;
    nama_sekolah: string;
    status: string;
    jumlah: number;
};

export default function RincianPagu() {
    const page = usePage<Props>();
    const { pagu, jenjangs, errors } = page.props;

    return (
        <>
            
            {Object.keys(errors).length > 0 && 
                <Alert variant="destructive" className="max-w-md my-4">
                    <AlertCircleIcon />
                    <AlertTitle>Terjadi kesalahan</AlertTitle>
                    <AlertDescription>
                        <ValidationErrors errors={errors} />
                    </AlertDescription>
                </Alert>
            }
            {jenjangs ? (
                <>
                <div className="pt-2 pb-4"><TabsMenu /></div>
                {pagu?.length! > 0 ? (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-10 text-center">No</TableHead>
                                <TableHead className="w-32 text-center">Npsn</TableHead>
                                <TableHead>Nama Sekolah</TableHead>
                                <TableHead className="w-32 text-center">Status</TableHead>
                                <TableHead className="w-28 text-right">Jumlah</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {pagu?.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-center">{index + 1}</TableCell>
                                <TableCell className="text-center">{item.npsn}</TableCell>
                                <TableCell>{item.nama_sekolah}</TableCell>
                                <TableCell className="text-center">{item.status}</TableCell>
                                <TableCell className="text-right font-mono">{Number(item.jumlah).toLocaleString("id-ID")}</TableCell>
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
                        Silahkan pilih jenjang pada menu sidebar sebelah kanan untuk menampilkan data.
                    </AlertDescription>
                </Alert>
            )}
        </>
    );
}

RincianPagu.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos>
            <MainPagu children={page} />
        </LayoutBos>
    </AppLayout>
)

