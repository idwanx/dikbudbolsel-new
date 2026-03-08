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
import { Check, Send, Undo } from "lucide-react"


type State = {
    dialogKonfirmasi: boolean;
    submitValidasi: () => void;
};

export function AlertSendValidation({ submitValidasi }: State) {
    const handleSubmit = () => {
        submitValidasi();
    };

  return (
    <DialogContent 
        className="sm:max-w-sm flex flex-col items-center"
        onInteractOutside={(e) => {
            e.preventDefault();
        }}
    >
    <div className="flex justify-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground">
        <Check className="h-6 w-6 text-primary-foreground" />
        </div>
    </div>

    <DialogHeader className="text-center gap-0">
        <DialogTitle className="text-balance text-center">
            Validasi
        </DialogTitle>
        <DialogDescription className="text-pretty py-6 text-center mx-auto">
            Apakah anda yakin pengajuan akan divalidasi<br />
            Tindakan ini tidak dapat dibatalkan.
        </DialogDescription>
    </DialogHeader>
    <div className="flex gap-2 flex-col sm:flex-row w-full sm:gap-3">
        <DialogClose asChild>
            <Button variant="outline" className="flex-1 w-full">Batal</Button>
        </DialogClose>
        <Button type="button" onClick={handleSubmit} className="flex-1 w-full">
            Validasi
        </Button>
    </div>
    </DialogContent>
  )
}
