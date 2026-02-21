import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Links, Meta } from "@/types/pagination";
import { Edit2Icon, Trash } from "lucide-react";


type ModeType = "create" | "update";

interface Props {
    penerimas: DataProps;
     openDialogForm: (mode: ModeType, value: any) => void;
     openAlertDestroy: (value: any) => void;
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
}

export function TableSekolah({ penerimas, openDialogForm, openAlertDestroy }: Props) {;

  return (
    <>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-10 text-center">No</TableHead>
                <TableHead>Nama Penerima</TableHead>
                <TableHead>Alamat</TableHead>
                <TableHead>No. Rekening</TableHead>
                <TableHead>Nama Bank</TableHead>
                <TableHead>Npwp</TableHead>
                <TableHead className='text-center'>Pilihan</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {penerimas.data.length > 0 ?
                penerimas.data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="text-center">
                            {penerimas.meta.from + index}
                        </TableCell>
                        <TableCell className="whitespace-normal">{item.nama_penerima}</TableCell>
                        <TableCell className="whitespace-normal">{item.alamat}</TableCell>
                        <TableCell>{item.no_rekening}</TableCell>
                        <TableCell>{item.nama_bank}</TableCell>
                        <TableCell>{item.npwp}</TableCell>
                        <TableCell>
                            <div className='flex gap-3 justify-center'>
                                <Button variant="outline" size="icon-sm" aria-label="Edit" onClick={() => openDialogForm("update", item)}>
                                    <Edit2Icon />
                                </Button>
                                <Button variant="outline" size="icon-sm" aria-label="Hapus" onClick={() => openAlertDestroy({value: item, url: "penerima" })}>
                                    <Trash />
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                )) : (
                    <TableRow>
                        <TableCell colSpan={3} className="font-normal">Tidak ada data. Silahkan klik tombol Tambah untuk menambah.</TableCell>
                    </TableRow>
                )
            }
        </TableBody>
    </Table>
    <div className="grid items-center auto-rows-min gap-4 md:grid-cols-2 py-4">
        <div className="text-foreground text-sm">
            {penerimas.meta.from} sampai {penerimas.meta.to} dari total: {penerimas.meta.total}
        </div>
        <div className="flex flex-1 flex-row-reverse">
            <Pagination links={penerimas.links} meta={penerimas?.meta} />

        </div>
    </div>
    </>
  );
}