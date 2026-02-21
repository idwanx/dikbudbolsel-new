import { Fragment } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Link, usePage } from "@inertiajs/react";
import bos from "@/routes/bos";

interface Props {
    jenjang: string;
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

export function NavJenjang() {
const { jenjangs, daftarSekolahs, tahun } = usePage<Props>().props;

  return (
    <Sidebar
      className="sticky hidden border-l lg:flex top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      variant="inset"
    >
      <SidebarContent>
        {daftarSekolahs.map((item) => (
            <Fragment key={item.slug}>
                <SidebarGroup className="p-0 font-medium">
                    <SidebarMenuButton 
                        asChild
                        isActive={jenjangs === item.slug}
                    >
                        <Link 
                            href={bos.pagu.index({ tahun: tahun, jenjangs: item.slug, sumberdana: 'bosp-reguler' })}
                            prefetch
                        >
                            {item.nama_jenjang}
                        </Link>
                    </SidebarMenuButton>
                </SidebarGroup>
                <SidebarSeparator className="mx-0" />
            </Fragment>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
