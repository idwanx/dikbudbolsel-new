import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import bos from "@/routes/bos";
import { router } from "@inertiajs/react";
import { Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";

type State = {
    stateRincian: any;
    closeDialog: (value: boolean) => void;
};

export function AlertDestroyRincian({ stateRincian, closeDialog }: State) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const destroyHandler = (value: any) => {
      router.delete(bos.transaksi.destroy(value.id).url, {
          preserveScroll: true,
          onStart: () => { setIsLoading(true); },
          onSuccess: (page: any) => {
            if (page.flash.status === 'success') {
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
          onFinish: () => {
            setIsLoading(false);
            closeDialog(false);
          },
      });
  };
  
  return (
    <>
      <DialogContent 
        className="sm:max-w-sm flex flex-col items-center"
        onInteractOutside={(e) => {
            e.preventDefault();
        }}
      >
        <div className="flex justify-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive dark:bg-destructive/20">
            <Trash2Icon className="h-6 w-6" />
          </div>
        </div>
        <DialogHeader className="text-center gap-0">
          <DialogTitle className="text-balance text-center">Hapus Rincian</DialogTitle>
          <DialogDescription className="text-pretty py-6 text-center mx-auto">
            Apakah anda yakin rincian <b>{stateRincian?.uraian}</b> akan dihapus?<br />
            Data akan dihapus secara permanen. Tindakan ini tidak dapat dibatalkan.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 flex-col sm:flex-row w-full sm:gap-3">
            <DialogClose asChild>
                <Button variant="outline" className="flex-1 w-full">Batal</Button>
            </DialogClose>
            <Button type="button" variant="destructive" onClick={() => destroyHandler(stateRincian)} className="flex-1 w-full">
                {isLoading && (
                  <Spinner data-icon="inline-start" />
                )}
                Hapus
            </Button>
        </div>
      </DialogContent>
    </>
  )
}
