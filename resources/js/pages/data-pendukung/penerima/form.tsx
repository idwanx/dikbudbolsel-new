import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import penerima from "@/routes/penerima";
import { useForm } from "@inertiajs/react";
import { DialogDescription } from "@radix-ui/react-dialog";
import { toast } from "sonner";


type ModeType = "create" | "update";

interface Props {
    mode: ModeType;
    data: Record<string, any>;
    setData: (name: string, value: any) => void;
    post: (url: string, value: any) => void;
    patch: (url: string, value: any) => void;
    processing: boolean;
    errors: Record<string, string>;
    closeModal: (open: boolean) => void;
    reset: () => void;
    clearErrors: () => void;
}

interface FlashProps extends Record<string, any> {
    flash?: {
        type?: string; 
        message?: string
    }
}

export function FormPenerima({ 
    data, 
    setData, 
    post,
    patch,
    processing, 
    errors, 
    mode,
    closeModal,
    reset,
    clearErrors
 }: Props) {

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        switch (mode) {
        case 'update':
            patch(penerima.update(data.id).url, {
                preserveScroll: true,
                onSuccess: (response: { props: FlashProps }) => {
                    closeModal(false);
                    if (response.props.flash?.type === 'success') {
                        toast.success(response.props.flash?.message);
                    } else if (response.props.flash?.type === 'error') {
                        toast.error(response.props.flash?.message);
                    } else {
                        toast.info(response.props.flash?.message);
                    }
                },
            });

            break;
        default:
            post(penerima.store().url, {
                preserveScroll: true,
                onSuccess: (response: { props: FlashProps }) => {
                    reset();
                    clearErrors();
                    if (response.props.flash?.type === 'success') {
                        toast.success(response.props.flash?.message);
                    } else if (response.props.flash?.type === 'error') {
                        toast.error(response.props.flash?.message);
                    } else {
                        toast.info(response.props.flash?.message);
                    }
                },
            });

            break;
        }
    };

  return (
    <DialogContent 
        className="p-0 sm:max-w-lg gap-0"
        onInteractOutside={(e) => {
            e.preventDefault();
        }}
    >
        <DialogHeader className="border-b px-6 py-4 pt-5">
            <DialogTitle>Tambah Penerima</DialogTitle>
            <DialogDescription>
            </DialogDescription>
        </DialogHeader>

        <form onSubmit={onFormSubmit}>
            <div className="space-y-4 p-6">
                <div className="space-y-2">
                    <Label htmlFor="nama_penerima">Nama Penerima</Label>
                    <Input
                        id="nama_penerima"
                        name="nama_penerima"
                        tabIndex={1}
                        value={data.nama_penerima || ''}
                        onChange={(e) => setData('nama_penerima', e.target.value)}
                        required
                        autoFocus
                        placeholder="nama penerima"
                    />
                    <InputError
                        message={errors.nama_penerima}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="alamat">Alamat</Label>
                    <Input
                        id="alamat"
                        name="alamat"
                        tabIndex={2}
                        value={data.alamat || ''}
                        onChange={(e) => setData('alamat', e.target.value)}
                        required
                        placeholder="alamat"
                    />
                    <InputError
                        message={errors.alamat}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="no_rekening">No. Rekening</Label>
                    <Input
                        id="no_rekening"
                        name="no_rekening"
                        tabIndex={3}
                        value={data.no_rekening || ''}
                        onChange={(e) => setData('no_rekening', e.target.value)}
                        required
                        placeholder="no rekening"
                    />
                    <InputError
                        message={errors.no_rekening}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="nama_bank">Nama Bank</Label>
                    <Input
                        id="nama_bank"
                        name="nama_bank"
                        tabIndex={4}
                        value={data.nama_bank || ''}
                        onChange={(e) => setData('nama_bank', e.target.value)}
                        required
                        placeholder="nama bank"
                    />
                    <InputError
                        message={errors.nama_bank}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="npwp">Npwp</Label>
                    <Input
                        id="npwp"
                        name="npwp"
                        tabIndex={5}
                        value={data.npwp || ''}
                        onChange={(e) => setData('npwp', e.target.value)}
                        required
                        placeholder="npwp"
                    />
                    <InputError
                        message={errors.npwp}
                    />
                </div>
            </div>
            <div className="flex items-center justify-end border-t p-4 space-x-2">
                {processing ? (
                    <>
                    <Spinner />
                    <i className="text-sm text-muted-foreground">menyimpan...</i>
                    </>
                    ) : null
                }
            <DialogClose asChild>
                <Button type="button" variant="outline" tabIndex={6}>
                    Batal
                </Button>
            </DialogClose>
            <Button type="submit" tabIndex={7} disabled={processing}>
                Simpan
            </Button>
            </div>
        </form>
    </DialogContent>
  );
}