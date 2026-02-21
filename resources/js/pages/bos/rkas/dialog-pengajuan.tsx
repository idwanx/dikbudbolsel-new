import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import fetchData from "@/routes/fetchData";
import { Spinner } from "@/components/ui/spinner";
import { LabelStatusRincian } from "./label-status-rincian";

type StatusRincian = "draft" | "validasi" | "divalidasi" | "berhasil" | "gagal";

type Props = {
    dialogOpen: boolean;
    stateRkas: number | undefined;
    closeDialog: (open: boolean) => void;
}

type RincianPengajuan = {
    alamat: string;
    id: number;
    created_at: string;
    nama_bank: string;
    nama_penerima: string;
    no_pengajuan: string;
    no_rekening: string;
    nominal: number;
    rka_id: number;
    send_at: string;
    status: StatusRincian;
    uraian: string
};

export function DialogPengajuan({ dialogOpen, stateRkas, closeDialog }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [dataRincian, setDataRincian] = useState<RincianPengajuan[]>([]);

    const totalRincian: number | undefined = dataRincian?.reduce((a, b) => {
        return a + b.nominal;
    }, 0);

    const getRincianPengajuan = useCallback(async (value: number): Promise<void> => {
            
        setIsLoading(true);

        try {
            const response = await fetch(fetchData.rincianPengajuan({ nomor: value }).url);
            const result: any = await response.json();
            setDataRincian(result.rincians);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            throw error;
        }
    }, []);

    useEffect(() => {
        if (dialogOpen) {
            getRincianPengajuan(stateRkas!);
        }

        return () => { dialogOpen; }

    }, [dialogOpen]);

    return (
    <DialogContent className="overflow-visible 2xl:max-w-7xl sm:max-w-5xl top-0 mt-2 translate-y-0">
        <DialogHeader>
        <DialogTitle>Rincian Pengajuan</DialogTitle>
        <DialogDescription>
            Daftar pada tabel dibawah ini adalah rincian belanja yang diajukan.
        </DialogDescription>
        </DialogHeader>
        <div className="no-scrollbar -mx-4 max-h-[67vh] overflow-y-auto px-4">
         <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-8 text-center">No</TableHead>
                    <TableHead>Uraian</TableHead>
                    <TableHead className="w-60 2xl:w-70">Penerima</TableHead>
                    <TableHead className="w-24 2xl:w-40 text-right">Nominal</TableHead>
                    <TableHead className="w-22 2xl:w-30 text-center">Status</TableHead>
                    {/* <TableHead className="w-22 2xl:w-30 text-center">-</TableHead> */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {isLoading ? (
                    <TableRow>
                        <TableCell colSpan={5} className='flex gap-2 items-center'><Spinner data-icon="inline-start" />Loading...</TableCell>
                    </TableRow>
                ):(
                    dataRincian?.length > 0 ? (
                        dataRincian.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-center">{index + 1}</TableCell>
                            <TableCell className="whitespace-normal">
                                <p>{item.uraian}</p>
                                <p className="text-xs text-muted-foreground">No. Pengajuan:{" "}{item.no_pengajuan}</p>
                                <p className="text-xs text-muted-foreground">Dikirim:{" "}{item.send_at}</p>
                            </TableCell>
                            <TableCell className="whitespace-normal">
                                <p>{item.nama_penerima}</p>
                                <p className="text-xs text-muted-foreground">{item.nama_bank}</p>
                                <p className="text-xs text-muted-foreground">{item.no_rekening}</p>
                            </TableCell>
                            <TableCell className="font-mono text-right bg-amber-400">
                                {Number(item.nominal).toLocaleString("id-ID")}
                            </TableCell>
                            <TableCell className="text-center">
                                <LabelStatusRincian status={item.status} />
                            </TableCell>
                            {/* <TableCell className="text-center">-</TableCell> */}
                        </TableRow>
                    ))
                    ):(
                        <TableRow>
                            <TableCell colSpan={5} className='text-muted-foreground'>Tidak ada rincian.</TableCell>
                        </TableRow>
                    )
                )}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3} className="text-right">Total</TableCell>
                    <TableCell className="font-mono text-right">
                        {Number(totalRincian).toLocaleString("id-ID")}
                    </TableCell>
                    <TableCell className="text-center">-</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
        </div>
        <DialogFooter>
        <DialogClose asChild>
            <Button variant="outline">Close</Button>
        </DialogClose>
        </DialogFooter>
    </DialogContent>
    );
}