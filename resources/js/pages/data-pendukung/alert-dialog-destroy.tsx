import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Spinner } from "@/components/ui/spinner";
import { router } from "@inertiajs/react";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type State = {
    stateDestroy: any;
};

interface FlashProps extends Record<string, any> {
    flash?: {
        type?: string; 
        message?: string
    }
}

export function AlertDialogDestroy({ stateDestroy }: State) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const destroyHandler = (value: any) => {
    setIsLoading(true);
      router.delete(`${value.url}/${stateDestroy?.value.id}`, {
          preserveScroll: true,
          onSuccess: (response: { props: FlashProps }) => {
              if (response.props.flash?.type === 'success') {
                  toast.success(response.props.flash?.message, {
                    position: "bottom-center",
                  });
              } else if (response.props.flash?.type === 'error') {
                  toast.error(response.props.flash?.message);
              } else {
                  toast.info(response.props.flash?.message);
              }
          },
      });
    setIsLoading(false);
  };
  
  return (
    <>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Hapus data?</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah anda yakin penerima <b>{stateDestroy?.value.nama_penerima}</b> akan dihapus?<br />
            Data akan dihapus secara permanen dan tindakan ini tidak dapat dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Batal</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={() => destroyHandler(stateDestroy)} disabled={isLoading}>
            {isLoading ? (
              <Spinner />
            ):(
              'Simpan'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  )
}
