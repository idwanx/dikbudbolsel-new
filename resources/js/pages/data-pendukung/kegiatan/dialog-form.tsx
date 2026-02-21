import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import importData from "@/routes/importData";
import { useForm, usePage } from "@inertiajs/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, Check, CheckCircle } from "lucide-react";
import ValidationErrors from "@/components/validation-errors";
import { useEffect } from "react";

interface Props {
  dialogOpen: boolean;
}

export function DialogForm({ dialogOpen }: Props) {
  const { errors } = usePage().props

  const { data, setData, post, hasErrors, reset, recentlySuccessful, processing, progress } = useForm({
      file: null as File | null
  });

  function submitForm(e: React.FormEvent) {
      e.preventDefault();
  
      post(importData.kegiatan().url, {
          onSuccess: () => {
            reset();
            setData('file', null);
          },
      });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
        setData('file', file);
    } else {
        setData('file', null);
    }
  };

    useEffect(() => {
    if (dialogOpen) {
      reset();
    } else {
      reset();
    }

    return () => {
        dialogOpen;
    }
  }, [dialogOpen]);

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Import Sekolah</DialogTitle>
        <DialogDescription>
          Pilih file excel berisi daftar sekolah yang akan di import.
        </DialogDescription>
      </DialogHeader>

      {hasErrors && 
        <Alert variant="destructive" className="max-w-md">
          <AlertCircleIcon />
          <AlertTitle>Terjadi kesalahan</AlertTitle>
          <AlertDescription>
            <ValidationErrors errors={errors} />
          </AlertDescription>
        </Alert>
      }

      {recentlySuccessful && 
        <Alert className="border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-50">
          <CheckCircle />
          <AlertTitle>Berhasil.</AlertTitle>
          <AlertDescription>
            Data berhasil di import ke dalam database.
          </AlertDescription>
        </Alert>
      }

      <form className="space-y-6" onSubmit={submitForm}>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="files">Upload File</Label>
          <Input 
            id="file" 
            name="file"
            onChange={handleFile}
            type="file"
            accept=".csv, .xlsx, .xls" 
            tabIndex={2}
            required
          />
        </div>

        {progress && (
            <progress value={progress.percentage} max="100">
                {progress.percentage}%
            </progress>
        )}
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" tabIndex={4}>Batal</Button>
        </DialogClose>
        <Button 
          type="submit"
          disabled={processing}
          tabIndex={3}
        >
          Import
        </Button>
      </DialogFooter>
      </form>
    </DialogContent>
  )
}
