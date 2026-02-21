import { AlertCircleIcon, Check, CheckIcon, ChevronsUpDownIcon, Plus, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useForm, usePage } from "@inertiajs/react";
import bos from "@/routes/bos";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import ValidationErrors from "@/components/validation-errors";
import fetchData from "@/routes/fetchData";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";

type Props= {
    dialogForm: boolean;
    pengajuan: Pengajuan;
}

type PropsTahun = {
    tahun: number;
};

type Pengajuan = {
    id: number;
    no_pengajuan: string;
};

type FieldForm = {
    pengajuan_id: string,
    penerima_id: string,
    penerima_pajak: string;
    uraian: string,
    nominal: string,
    rka_id: string,
    sumber_dana_id: string,
    rincian_belanja_id: string,
    sub_jenis_transaksi_id: string,
    optionpajaks: OptionsPajak[] | [],
}

type SelectsPenerima = {
    id: number;
    nama_penerima: string;
    no_rekening: string;
    nama_bank: string;
}

type SelectsPajak = {
    id: number;
    sub_jenis_transaksi: string;
    nilai: number;
}

type OptionsPajak = {
    pajak_id: string;
    jumlah_pajak: number;
}

type Rkas = {
    id: number;
    jumlah: number;
    kegiatan_id: number;
    kode_kegiatan: string;
    kode_program: string;
    kode_rincian_belanja: string;
    kode_sub_program: string;
    nama_jenis_belanja: string;
    nama_rincian_belanja: string;
    program_id: number;
    rincian_belanja_id: number;
    sekolah_id: number;
    sub_program_id: number;
    sumber_dana_id: number;
    tahun: string;
    realisasi: number;
    uraian_kegiatan : string
    uraian_program: string
    uraian_sub_program: string;
};

type SumberDana = {
    title: string;
    value: string;
};

const sumberDana: SumberDana[] = [
    {
        title: 'Bosp Reguler',
        value: 'bosp-reguler'
    },
    {
        title: 'Bosp Kinerja',
        value: 'bosp-kinerja'
    },
];

export function DialogNewRincian({ dialogForm, pengajuan }: Props ) {
    const { tahun } = usePage<PropsTahun>().props;
    const [dataRkas, setDataRkas] = useState<Rkas[]>([]);
    const [open, setOpen] = useState(false);
    const [openPenerimaPajak, setOpenPenerimaPajak] = useState(false);
    const [penerimas, setPenerimas] = useState<SelectsPenerima[] | []>([]);
    const [pajaks, setPajaks] = useState<SelectsPajak[] | []>([]);
    const [selectSumberDana, setSelectSumberDana] = useState<SumberDana>(sumberDana[0]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { data, setData, post, processing, errors, clearErrors } = useForm<FieldForm>({
        pengajuan_id: '',
        penerima_id: '',
        penerima_pajak: '',
        uraian: '',
        nominal: '',
        rka_id: '',
        sumber_dana_id: '',
        rincian_belanja_id: '',
        sub_jenis_transaksi_id: '1',
        optionpajaks: [],
    });

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const jumlahPajak: number | undefined = data?.optionpajaks.reduce((a, b) => {
            return a + b.jumlah_pajak;
        }, 0);
        
        const total: number = (Number(data?.nominal)-jumlahPajak)+jumlahPajak;

        post(bos.transaksi.store().url, {
            preserveScroll: true,
            onSuccess: (page: any) => {
                if (page.flash.status === 'success') {
                    updateRealisasiRkas(total);
                    toast.success(page.flash.message, {
                        position: "top-center",
                        style: {
                        '--normal-bg': 'var(--background)',
                        '--normal-text': 'light-dark(var(--color-green-600), var(--color-green-400))',
                        '--normal-border': 'light-dark(var(--color-green-600), var(--color-green-400))'
                        } as React.CSSProperties
                    })
                } else {
                    toast.error(page.flash.message, {
                        position: "top-center",
                        style: {
                        '--normal-bg': 'var(--background)',
                        '--normal-text': 'var(--destructive)',
                        '--normal-border': 'var(--destructive)'
                        } as React.CSSProperties
                    })
                }
            },
        });
    };

    const updateRealisasiRkas = (newValue: number) => {
        setDataRkas(prev =>
            prev.map(item =>
                item.id === Number(data?.rka_id) ? { ...item, realisasi:item.realisasi+newValue} : item 
            )
        );
    };

    const addField = () => {
        setData('optionpajaks', [...data.optionpajaks, { pajak_id: '', jumlah_pajak: 0 }]);
    };

    const removeField = (index: number) => {
        
        if (data.optionpajaks.length === 1) {
            setData({
                ...data,
                penerima_pajak: '',
                optionpajaks: data.optionpajaks.filter((_, i) => i !== index)
            });
        } else {
            setData('optionpajaks', data.optionpajaks.filter((_, i) => i !== index));
        }
    };

    const handleSelectPajak = (item: string, index: number) => {
        const idPajak = item.split('-');
        const newItems = [...data.optionpajaks];
        newItems[index].pajak_id = (item);
        switch (idPajak[0]) {
            case '2':
                const Ppn = 11/111*Number(data.nominal);
                newItems[index].jumlah_pajak = Math.ceil(Ppn / 50) * 50;
                break;
            case '3':
                const Pph21LimaPersen = 5/100*Number(data.nominal);
                newItems[index].jumlah_pajak = Math.ceil(Pph21LimaPersen / 50) * 50;
                break;
            case '4':
                const Pph21EnamPersen = 6/100*Number(data.nominal);
                newItems[index].jumlah_pajak = Math.ceil(Pph21EnamPersen / 50) * 50;
                break;
            case '5':
                const Pph21LimaBelasPersen = 15/100*Number(data.nominal);
                newItems[index].jumlah_pajak = Math.ceil(Pph21LimaBelasPersen / 50) * 50;
                break;
            case '6':
                const Pph22SatuKomaLimaPersen = 1.5/100*Number(data.nominal);
                newItems[index].jumlah_pajak = Math.ceil(Pph22SatuKomaLimaPersen / 50) * 50;
                break;
            case '7':
                const Pph23DuaPersen = 2/100*Number(data.nominal);
                newItems[index].jumlah_pajak = Math.ceil(Pph23DuaPersen / 50) * 50;
                break;
            case '8':
                const Retribusi = 10/100*Number(data.nominal);
                newItems[index].jumlah_pajak = Math.ceil(Retribusi / 50) * 50;
                break;
            default:
                return () => { item; }
        }

        setData('optionpajaks', newItems);
    };

    const handleClickRkas = (value: any) => {
        setData({
            ...data,
            rka_id: value.id,
            sumber_dana_id: value.sumber_dana_id,
            rincian_belanja_id: value.rincian_belanja_id
        });
    };

    const handleSumberDana = (itemValue: SumberDana) => {
        getRkas(tahun, itemValue);
        setSelectSumberDana(itemValue);
        setData({
            ...data,
            rka_id: '',
        });
    };

    const getRkas = useCallback(async (tahun: number, sumberdana: SumberDana): Promise<void> => {
            
        setIsLoading(true);

        try {
            const response = await fetch(fetchData.rkas({ tahun: tahun, sumberdana: sumberdana.value }).url);
            const result: any = await response.json();
            setDataRkas(result.rkas);
            setPenerimas(result.penerimas);
            setPajaks(result.pajaks);
            setIsLoading(false);
            
        } catch (error) {
            setIsLoading(false);
            throw error;
        }
    }, []);

    useEffect(() => {
        if (dialogForm) {
            clearErrors();
            setSelectSumberDana(sumberDana[0]);
            getRkas(tahun, sumberDana[0]);
            setData({
                ...data,
                pengajuan_id: pengajuan?.id.toString(),
                penerima_id: '',
                penerima_pajak: '',
                uraian: '',
                nominal: '',
                rka_id: '',
                sumber_dana_id: '',
                rincian_belanja_id: '',
                sub_jenis_transaksi_id: '1',
                optionpajaks: [],
            });
        }

        return () => { dialogForm }

    }, [dialogForm]);

    return (
        <DialogContent 
            onInteractOutside={(e) => {
                e.preventDefault();
            }}
            className="overflow-hidden p-0 2xl:max-h-[700px] sm:max-h-[600px] 2xl:max-w-5xl sm:max-w-5xl top-0 mt-2 translate-y-0">
                <DialogTitle className="sr-only">Form Tambah Rincian</DialogTitle>
                <DialogDescription className="sr-only">
                    Isi form dibawah ini untuk menambah rincian.
                </DialogDescription>
            <SidebarProvider
                style={
                    {
                    "--sidebar-width": "30rem",
                    "--sidebar-width-mobile": "18rem",
                    } as React.CSSProperties
                }
            >
            <AppSidebar 
                tahun={tahun} 
                dataRkas={dataRkas} 
                rkaId={data?.rka_id} 
                sumberDana={sumberDana}
                selectSumberDana={selectSumberDana} 
                isLoading={isLoading} 
                handleClickRkas={handleClickRkas} 
                handleSumberDana={handleSumberDana} 
            />
            <main className="flex 2xl:h-[700px] sm:h-[600px] flex-1 flex-col overflow-hidden">
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Form Tambah Rincian</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
                </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
                    {Object.keys(errors).length > 0 && 
                        <Alert variant="destructive" className="max-w-full my-4">
                            <AlertCircleIcon />
                            <AlertTitle>Terjadi kesalahan</AlertTitle>
                            <AlertDescription>
                                <ValidationErrors errors={errors} />
                            </AlertDescription>
                        </Alert>
                    }
                    <form id="form-add-rincian" onSubmit={onFormSubmit} className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-6">
                        <div className="col-span-full">
                            <div className="gap-2">
                                <Label htmlFor="email">
                                    Penerima
                                <span className="text-red-500">*</span>
                                </Label>
                                <Popover open={open} onOpenChange={setOpen} modal>
                                    <PopoverTrigger className="text-muted-foreground font-normal" asChild>
                                        <Button
                                            variant='outline'
                                            role='combobox'
                                            aria-expanded={open}
                                            className='w-full justify-between'
                                            aria-label='Combo penerima'
                                            tabIndex={1}
                                            autoFocus
                                        >
                                            {data.penerima_id ? penerimas.find((item) => `${item.id}` === data.penerima_id)?.nama_penerima : 'Pilih penerima...'}
                                            <ChevronsUpDownIcon className='opacity-50' />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className='border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0' align='start'>
                                    <Command>
                                        <CommandInput placeholder='Cari penerima...' className='h-9' />
                                        <CommandList>
                                        <CommandEmpty>Cari penerima.</CommandEmpty>
                                        <CommandGroup>
                                            {penerimas && penerimas.map(item => (
                                            <CommandItem
                                                key={`${item.id}`}
                                                id="penerima"
                                                value={item.nama_penerima}
                                                onSelect={(currentValue) => {
                                                    setData("penerima_id", currentValue === data.penerima_id ? '' : `${item.id}`),
                                                    setOpen(false);
                                                }}
                                            >
                                                <div>
                                                    <p>{item.nama_penerima}</p>
                                                    <p className="text-xs text-muted-foreground">Bank: {item.nama_bank}</p>
                                                    <p className="text-xs text-muted-foreground">No. Rek: {item.no_rekening}</p>
                                                </div>
                                                <CheckIcon className={cn('ml-auto', data.penerima_id === `${item.id}` ? 'opacity-100' : 'opacity-0')} />
                                            </CommandItem>
                                            ))}
                                        </CommandGroup>
                                        </CommandList>
                                    </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <div className="gap-2">
                                <Label htmlFor="uraian">
                                    Uraian
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="uraian"
                                    name="uraian"
                                    value={data.uraian || ''}
                                    onChange={(e) => setData('uraian', e.target.value)}
                                    rows={3}
                                    tabIndex={2}
                                    placeholder="Uraian"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <div className="gap-2">
                                <Label htmlFor="nominal">
                                    Nominal
                                    <span className="text-red-500">*{" "}</span>
                                    <i className="text-sm text-muted-foreground">
                                        di isi nilai Brutto.
                                    </i>

                                </Label>
                                <Input
                                    type="number"
                                    id="nominal"
                                    name="nominal"
                                    value={data.nominal || ''}
                                    onChange={(e) => setData('nominal', e.target.value)}
                                    autoComplete="nominal"
                                    placeholder="Nominal"
                                    tabIndex={3}
                                    required
                                />
                            </div>
                        </div>

                        {data.optionpajaks.length > 0 && 
                            <div className="col-span-full">
                                <div className="gap-2">
                                    <Label htmlFor="email">
                                        Penerima Pajak
                                    <span className="text-red-500">*</span>
                                    </Label>
                                    <Popover open={openPenerimaPajak} onOpenChange={setOpenPenerimaPajak} modal>
                                        <PopoverTrigger className="text-muted-foreground font-normal" tabIndex={4} asChild>
                                            <Button
                                                variant='outline'
                                                role='combobox'
                                                aria-expanded={open}
                                                className='w-full justify-between'
                                                aria-label='Penerima'
                                            >
                                                {data.penerima_pajak ? penerimas.find((item) => `${item.id}` === data.penerima_pajak)?.nama_penerima : 'Pilih penerima...'}
                                                <ChevronsUpDownIcon className='opacity-50' />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className='border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0' align='start'>
                                        <Command>
                                            <CommandInput placeholder='Cari penerima...' className='h-9' />
                                            <CommandList>
                                            <CommandEmpty>Cari penerima.</CommandEmpty>
                                            <CommandGroup>
                                                {penerimas && penerimas.map(item => (
                                                <CommandItem
                                                    key={`${item.id}`}
                                                    id="penerima_pajak"
                                                    value={item.nama_penerima}
                                                    onSelect={(currentValue) => {
                                                    setData("penerima_pajak", currentValue === data.penerima_pajak ? '' : `${item.id}`),
                                                    setOpenPenerimaPajak(false);
                                                    }}
                                                >
                                                    <div>
                                                        <p>{item.nama_penerima}</p>
                                                        <p className="text-xs text-muted-foreground">Bank: {item.nama_bank}</p>
                                                        <p className="text-xs text-muted-foreground">No. Rek: {item.no_rekening}</p>
                                                    </div>
                                                    <CheckIcon className={cn('ml-auto', data.penerima_pajak === `${item.id}` ? 'opacity-100' : 'opacity-0')} />
                                                </CommandItem>
                                                ))}
                                            </CommandGroup>
                                            </CommandList>
                                        </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        }

                        {data.optionpajaks.map((item, index) => (
                            <div key={index} className="flex col-span-full gap-x-4">
                                <div className="gap-2 w-72">
                                    <Label htmlFor="jenis_pajak">
                                        Pajak
                                    <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        name="pajak_id"
                                        value={item.pajak_id || ''}
                                        onValueChange={(e) => handleSelectPajak(e,index)}
                                        required
                                        autoComplete='jenis_pajak'
                                    >
                                        <SelectTrigger className="w-full" tabIndex={5}>
                                            <SelectValue placeholder="Pilih pajak" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            {pajaks && pajaks?.map((item, index) => (
                                                <SelectItem key={index} value={`${item.id}-${item.sub_jenis_transaksi}`}>{item.sub_jenis_transaksi}</SelectItem>
                                            ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="gap-2 w-full">
                                    <Label htmlFor="pajak">
                                        Nominal
                                    <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="flex justify-between items-center gap-2">
                                        <Input
                                            type="number"
                                            id="jumlah_pajak"
                                            name="jumlah_pajak"
                                            value={item.jumlah_pajak || ''}
                                            onChange={(e) => {
                                                const newItems: any = [...data.optionpajaks];
                                                newItems[index].jumlah_pajak = e.target.value;
                                                setData('optionpajaks', newItems);
                                            }}
                                            tabIndex={6}
                                            autoComplete="jumlah_pajak"
                                            placeholder="Nominal"
                                        />
                                        <Button type="button" onClick={() => removeField(index)} variant="outline" size="icon-sm" aria-label="Submit">
                                            <X />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        <div className="col-span-full">
                            <div className="flex flex-row-reverse">
                                <Button type="button" onClick={addField} size="sm" variant="outline" aria-label="add field" tabIndex={7} disabled={!data.nominal}>
                                    <Plus />{" "}Pajak
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-between border-t p-4">
                    <DialogClose asChild>
                        <Button type="button" variant="outline" tabIndex={8}>
                            Tutup
                        </Button>
                    </DialogClose>
                    <Button type="submit" form="form-add-rincian" tabIndex={9} disabled={processing}>
                        {processing && <Spinner />}
                        Simpan
                    </Button>
                </div>
            </main>
            </SidebarProvider>
        </DialogContent>
    )
}