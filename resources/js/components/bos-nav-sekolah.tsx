import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import bos from "@/routes/bos";

interface Props {
    jenjangs: string;
    npsn: string;
    daftarSekolahs: Jenjangs[];
    tahun: number;
    [key: string]: unknown;
}

interface Jenjangs {
    slug: string;
    nama_jenjang: string;
    sekolahs: Sekolahs[];
}

interface Sekolahs {
    npsn: string;
    jenjang: string;
    nama_sekolah: string;
}

export function BosNavSekolah() {
    const { jenjangs, npsn, daftarSekolahs, tahun } = usePage<Props>().props;

    return (
        <>
        {daftarSekolahs ? (
            daftarSekolahs.map((item) => (
                <Fragment key={item.slug}>
                    <SidebarGroup key={item.slug} className="p-0">
                        <Collapsible
                            defaultOpen={item.slug === jenjangs}
                            className="group/collapsible p-0"
                        >
                        <SidebarGroupLabel
                            asChild
                            className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full text-sm"
                        >
                            <CollapsibleTrigger>
                                {item.nama_jenjang}{" "}
                                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.sekolahs.length > 0 ? (
                                        item.sekolahs.map((fields) => (
                                        <SidebarMenuItem key={fields.npsn}>
                                            <SidebarMenuButton 
                                                isActive={npsn === fields.npsn}
                                                className="cursor-pointer"
                                            >
                                                <Link 
                                                    href={bos.rkas.detailRincian({ tahun: tahun, jenjangs: item.slug, npsn: fields.npsn, sumberdana: 'bosp-reguler' })} prefetch
                                                >
                                                    {fields.nama_sekolah}
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        ))
                                    ):(
                                        <span className="px-2">Tidak ada data sekolah.</span>
                                    )}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                        </Collapsible>
                    </SidebarGroup>
                    <SidebarSeparator className="mx-0" />
                </Fragment>
            ))
        ):(
            <span className="text-sm">Tidak ada data</span>
        )}
        </>
    );
}
