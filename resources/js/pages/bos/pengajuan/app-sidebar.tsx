import { Check, CheckIcon, ChevronsUpDown } from "lucide-react"
import { Label } from "@/components/ui/label";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";

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

export function AppSidebar({
  tahun,
  dataRkas,
  rkaId,
  sumberDana,
  selectSumberDana,
  isLoading,
  handleClickRkas,
  handleSumberDana,
  ...props
}: {
  tahun: number
  dataRkas: Rkas[]
  rkaId: string
  sumberDana: SumberDana[]
  selectSumberDana: SumberDana
  isLoading: boolean
  handleClickRkas: (data: any) => void
  handleSumberDana: (data: any) => void
} & React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden 2xl:h-[685px] sm:h-[585px] *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">
              Rincian Rkas
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                      size="lg"
                      className="group w-32 h-6 items-center text-indigo-500 font-medium justify-end"
                      data-test="sidebar-menu-button"
                  >
                    {selectSumberDana.title}
                      <ChevronsUpDown size={4} />
                    
                  </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                  {sumberDana.map((item,index) => (
                      <DropdownMenuItem key={index} onSelect={() => handleSumberDana(item)}>
                          {item.title}
                          <CheckIcon className={cn('ml-auto', selectSumberDana.value === item.value ? 'opacity-100' : 'opacity-0')} />
                      </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
          </DropdownMenu>

          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {isLoading ? (
                <div className="bg-background flex flex-wrap gap-2 items-center border-b p-4 text-sm last:border-b-0">
                  <Spinner data-icon="inline-start" />Loading...
                </div>
              ):(
                dataRkas.length > 0 ? (
                  dataRkas.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickRkas(item);
                      }}
                      className={`group/rka ${Number(rkaId) === item.id && 'bg-background'} hover:bg-background flex flex-col items-start border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0`}
                    >
                      <div className="flex w-full items-center gap-2">
                        <span className={`font-medium ${Number(rkaId) === item.id ? 'text-foreground' : 'text-muted-foreground'} group-hover/rka:text-foreground`}>#{index + 1} - {item.nama_jenis_belanja}</span>{" "}
                        <span className="ml-auto">
                          {Number(rkaId) === item.id &&
                              <Check size={16} className="text-foreground" />
                          }
                        </span>
                      </div>
                      <div className="w-full mt-2 space-y-1 whitespace-break-spaces">
                        <p className={`${Number(rkaId) === item.id ? 'text-fuchsia-500' : 'text-muted-foreground'} group-hover/rka:text-fuchsia-500`}>{item.kode_program} - {item.uraian_program}</p>
                        <p className={`${Number(rkaId) === item.id ? 'text-emerald-600' : 'text-muted-foreground'} group-hover/rka:text-emerald-600`}>{item.kode_sub_program} - {item.uraian_sub_program}</p>
                        <p className="text-muted-foreground">{item.kode_kegiatan} - {item.uraian_kegiatan}</p>
                        <p className={`${Number(rkaId) === item.id ? 'text-foreground' : 'text-muted-foreground'} text-pretty group-hover/rka:text-foreground`}>
                          {item.kode_rincian_belanja} - {item.nama_rincian_belanja}
                        </p>
                      </div>
                      <div className="flex w-full mt-4 items-center">
                        <div className={`${Number(rkaId) === item.id ? 'text-foreground' : 'text-muted-foreground'} group-hover/rka:text-foreground`}>Anggaran:{" "}<span className="font-mono">{Number(item.jumlah).toLocaleString("id-ID")}</span></div>
                        <div className="ml-auto">
                            <div className={`${Number(rkaId) === item.id ? 'text-foreground' : 'text-muted-foreground'} group-hover/rka:text-foreground`}>Sisa:{" "}<span className="font-mono">{Number(item.jumlah-item.realisasi).toLocaleString("id-ID")}</span></div>
                        </div>
                      </div>
                    </a>
                  ))
                ):(
                  <div className="bg-background flex flex-col items-start border-b p-4 text-sm last:border-b-0">
                    Tidak ada data.
                  </div>
                )
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}
