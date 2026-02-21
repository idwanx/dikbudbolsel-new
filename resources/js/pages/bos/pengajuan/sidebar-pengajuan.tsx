import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import bos from "@/routes/bos";
import { Link, router, usePage } from "@inertiajs/react";
import { Plus, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { AlertDestroyPengajuan } from "./alert-destroy-pengajuan";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { Dialog } from "@/components/ui/dialog";

type Props = {
    daftarPengajuan: DaftarPengajuan[];
    jenjangs: string;
    nomor: string;
    tahun: number;
    rincianPengajuan: any;
};

type DaftarPengajuan = {
    approved_at: string;
    created_at: string;
    id: number;
    no_pengajuan: string;
    sekolah_id: number;
    send_at: string;
    slug: string;
    status: Status;
    validated_at: string;
};

type Status = "draft" | "validasi" | "divalidasi" | "disetujui";

export function SidebarPengajuan() {
  const { tahun, daftarPengajuan, nomor, rincianPengajuan } = usePage<Props>().props
  const [stateDaftarPengajuan, setStateDaftarPengajuan] = useState<DaftarPengajuan[]>(daftarPengajuan);
  const [dialogDestroy, setDialogDestroy] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statePengajuan, setStatePengajuan] = useState(null);
  const currentYear = new Date().getFullYear();

  const newPengajuan = () => {
      router.post(bos.pengajuan.new(), { tahun: tahun }, {
        onStart: () => { setIsLoading(true); },
        onSuccess: (page: any) => {
          if (page.flash.status === 'success') {
            router.reload({ only: ['daftarPengajuan'] });
            addNewPengajuan(page.flash.data);
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
        },
      })
  };

  const addNewPengajuan = (value: DaftarPengajuan) => {
    setStateDaftarPengajuan([value, ...stateDaftarPengajuan]);
  };

  const destroyPengajuan = (slug: string) => {
    setStateDaftarPengajuan(
      stateDaftarPengajuan.filter(item => 
        item.slug !== slug
      )
    );
  };
        
  const openDialogDestroy = (value: any) => {
      setStatePengajuan(value);
      setDialogDestroy(true);
  };

  const handleDialogToggle = (dialogIsOpen: boolean) => {
      setDialogDestroy(dialogIsOpen);
  };

  useEffect(() => {
      if (daftarPengajuan) {
          setStateDaftarPengajuan(daftarPengajuan);
      }
      
      return () => {
          nomor;
      }
  }, [daftarPengajuan]);

  return (
    <>
    <Dialog open={dialogDestroy} onOpenChange={handleDialogToggle}>
      <AlertDestroyPengajuan statePengajuan={statePengajuan} destroyPengajuan={destroyPengajuan} closeDialog={handleDialogToggle} />
    </Dialog>
    <Sidebar
      className="hidden flex-1 md:flex min-w-80 sticky border-l lg:flex top-(--header-height) h-[calc(100svh-var(--header-height))]!"
    >
        {tahun === currentYear &&
        <SidebarHeader className="gap-3.5 border-b p-4">
            <Button variant="outline" onClick={newPengajuan}>
              {isLoading ? (
                <Spinner />
              ):(
                <Plus />
              )}
              Pengajuan
            </Button>
        </SidebarHeader>
        }
      <SidebarContent>
        <SidebarGroup className="px-0 pt-0">
          <SidebarGroupContent>
            {stateDaftarPengajuan.length > 0 ? (
              stateDaftarPengajuan.map((item, index) => (
                <div
                  key={index}
                  className={`hover:bg-background ${item.slug === nomor && 'bg-background'} text-muted-foreground hover:text-foreground flex flex-col items-start gap-3 border-b px-4 py-2 text-sm leading-tight whitespace-nowrap`}
                >
                  <div className="flex w-full h-7 items-center text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      {item.send_at ? (
                        'Terkirim'
                      ):(
                        'Draft' 
                      )}
                    </span>
                    {nomor === item.slug ? (
                      rincianPengajuan?.length < 1 && item.validated_at === null ? (
                        <span className="ml-auto">
                          <Button type="button" variant="outline" className="h-7 w-7 text-red-500" size="sm" aria-label="Hapus" onClick={() => openDialogDestroy({item, tahun})}>
                              <Trash2Icon />
                          </Button>
                        </span>
                      ):(
                        <span className="ml-auto">
                          {item.send_at}
                        </span>
                      )
                    ):(
                      <span className="ml-auto">
                        {item.send_at}
                      </span>
                    )}
                  </div>
                  <Link 
                    href={bos.pengajuan.rincian({ tahun: tahun, nomor: item.slug, }).url}
                    preserveScroll
                    className={`line-clamp-3 w-64 ${item.slug === nomor && 'text-indigo-500'} font-medium whitespace-break-spaces`}>
                    {item.no_pengajuan}
                  </Link>
                  <div className="flex w-full items-center gap-2">
                    <LabelStatus value={item} />
                  </div>
                </div>
              ))
            ):(
              <div className="text-muted-foreground p-4 text-sm">
                Tidak ada pengajuan.
              </div>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </>
  )
}

function LabelStatus({ value }: { value: DaftarPengajuan }) {
  switch (value.status) {
    case 'draft':
        return (
          <>
            <span><Badge variant="outline">Draft</Badge></span>
            <span className="ml-auto text-xs">-</span>
          </>
        );
    case 'validasi':
        return (
          <>
            <span>
              <Badge variant="outline" className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                  Validasi
              </Badge>
            </span>
            <span className="ml-auto text-xs text-muted-foreground">{value.send_at}</span>
          </>
        );
    case 'divalidasi':
        return (
          <>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                Divalidasi
            </Badge>
            <span className="ml-auto text-xs text-muted-foreground">{value.validated_at}</span>
          </>
        );
    case 'disetujui':
        return (
          <>
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                Disetujui
            </Badge>
            <span className="ml-auto text-xs text-muted-foreground">{value.approved_at}</span>
          </>
        );
    default:
      return (
        <Badge variant="outline">Draft</Badge>
      );
  }
}