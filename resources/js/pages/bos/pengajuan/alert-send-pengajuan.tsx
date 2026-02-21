import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import bos from "@/routes/bos";
import { router } from "@inertiajs/react";
import { Send, Undo } from "lucide-react"
import { toast } from "sonner";

type StatusPengajuan = "draft" | "validasi" | "divalidasi" | "disetujui";
type ModeType = "kirim" | "batal";

type State = {
    nomor: string;
    loadingSend: (open: boolean) => void;
    isLoading: boolean;
    lengthRincian?: number;
    isSend: boolean;
    status: StatusPengajuan;
};

export function AlertSendPengajuan({ nomor, loadingSend, isLoading, lengthRincian, isSend, status }: State) {
    const [dialogSend, setDialogSend] = useState<boolean>(false);
    const [modeType, setModeType] = useState<ModeType>("kirim");

    const handleSubmit = (value: string) => {
        switch (modeType) {
        case 'batal':
            handleDialogToggle(false);

            router.visit(bos.pengajuan.batalKirim(value).url, {
                method: 'patch',
                replace: true,
                preserveState: true,
                preserveScroll: true,
                onStart: () => { loadingSend(true); },
                onSuccess: (page: any) => {
                    if (page.flash.status === 'success') {
                        router.reload({ only: ['daftarPengajuan'] });
                        
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
                onError: () => {
                    loadingSend(false);
                },
                onFinish: () => {
                    loadingSend(false);
                },
            });

            break;
        default:
            handleDialogToggle(false);

            router.visit(bos.pengajuan.kirimRincian(value).url, {
                method: 'patch',
                replace: true,
                preserveState: true,
                preserveScroll: true,
                onStart: () => { loadingSend(true); },
                onSuccess: (page: any) => {
                    if (page.flash.status === 'success') {
                        router.reload({ only: ['daftarPengajuan'] });
                        
                        toast.success(page.flash.message, {
                            position: "bottom-center",
                            style: {
                            '--normal-bg': 'var(--background)',
                            '--normal-text': 'light-dark(var(--color-green-600), var(--color-green-400))',
                            '--normal-border': 'light-dark(var(--color-green-600), var(--color-green-400))'
                            } as React.CSSProperties
                        });
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
                    loadingSend(false);
                },
                onFinish: () => {
                    loadingSend(false);
                },
            });

            break;
        }
    };

    const modeSubmit = (value: ModeType) => {
        setModeType(value);
        setDialogSend(true);
    };

    const handleDialogToggle = (dialogIsOpen: boolean) => {
        setDialogSend(dialogIsOpen);
    };

  return (
    <Dialog open={dialogSend} onOpenChange={handleDialogToggle}>
      <DialogTrigger asChild>

        {status === 'draft' ? (
            <Button type="button" onClick={()=> modeSubmit('kirim')} disabled={isLoading || lengthRincian! < 1}>
                {isLoading ? (
                    <Spinner />
                ):(
                    <Send />
                )}
                Kirim
            </Button>
        ):(
            isSend && status !== 'divalidasi' || status !== 'disetujui' ? (
                <Button type="button" onClick={()=> modeSubmit('batal')} disabled={isLoading || lengthRincian! < 1}>
                    {isLoading ? (
                        <Spinner />
                    ):(
                        <Undo />
                    )}
                    Batal
                </Button>
            ):(
                ''
            )
        )}
      </DialogTrigger>
      <DialogContent 
        className="sm:max-w-sm flex flex-col items-center"
        onInteractOutside={(e) => {
            e.preventDefault();
        }}
      >
        <div className="flex justify-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground">
            <Send className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>

        <DialogHeader className="text-center gap-0">
            <DialogTitle className="text-balance text-center">
                {modeType === 'batal' ? (
                    'Batalkan pengajuan'
                ):(
                    'Kirim pengajuan'
                )}
            </DialogTitle>
            <DialogDescription className="text-pretty py-6 text-center mx-auto">
                Apakah anda yakin pengajuan akan {modeType === 'batal' ? 'dibatalkan ?' : 'dikirim ?'}<br />
                Tindakan ini tidak dapat dibatalkan.
            </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 flex-col sm:flex-row w-full sm:gap-3">
            <DialogClose asChild>
                <Button variant="outline" className="flex-1 w-full">Batal</Button>
            </DialogClose>
            <Button type="button" onClick={() => handleSubmit(nomor)} className="flex-1 w-full">
                {modeType === 'batal' ? 'Ya, batalkan' : 'Kirim'}
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
