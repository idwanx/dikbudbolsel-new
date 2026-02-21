import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { CircleDotDashed } from 'lucide-react';
import penerima from '@/routes/penerima';
import sekolah from '@/routes/sekolah';
import sumberDana from '@/routes/sumber-dana';
import jenisBelanja from '@/routes/jenis-belanja';
import rincianBelanja from '@/routes/rincian-belanja';
import program from '@/routes/program';
import subProgram from '@/routes/sub-program';
import kegiatan from '@/routes/kegiatan';

export function BosNavDataPendukung() {
    const { isCurrentUrl } = useCurrentUrl();

    const mainNavItems: NavItem[] = [
        {
            title: 'Sekolah',
            href: sekolah.index(),
            icon: CircleDotDashed,
        },
        {
            title: 'Sumber Dana',
            href: sumberDana.index(),
            icon: CircleDotDashed,
        },
        {
            title: 'Jenis Belanja',
            href: jenisBelanja.index(),
            icon: CircleDotDashed,
        },
        {
            title: 'Rincian Belanja',
            href: rincianBelanja.index(),
            icon: CircleDotDashed,
        },
        {
            title: 'Program',
            href: program.index(),
            icon: CircleDotDashed,
        },
        {
            title: 'Sub Program',
            href: subProgram.index(),
            icon: CircleDotDashed,
        },
        {
            title: 'Kegiatan',
            href: kegiatan.index(),
            icon: CircleDotDashed,
        },
        {
            title: 'Penerima',
            href: penerima.index(),
            icon: CircleDotDashed,
        },
    ];

    return (
        <SidebarGroup className="px-2 py-2">
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu>
                {mainNavItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            asChild
                            isActive={isCurrentUrl(item.href)}
                            tooltip={{ children: item.title }}
                        >
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
