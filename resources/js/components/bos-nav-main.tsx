import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItem, SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import bos from "@/routes/bos";
import { Banknote, BanknoteArrowDown, BanknoteArrowUp, HandCoins, LayoutGrid, ShoppingCart } from 'lucide-react';
import { NavArkas } from './nav-rkas';

export function BosNavMain() {
    const page = usePage<SharedData>();
    const { tahun } = page.props;

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: bos.dashboard(tahun),
            icon: LayoutGrid,
            isActive: page.url.startsWith(`/bos/${tahun}/dashboard`)
        },
        {
            title: 'Transaksi',
            href: bos.transaksi.index(tahun),
            icon: BanknoteArrowDown,
            isActive: page.url.startsWith(`/bos/${tahun}/transaksi`)
        },
        {
            title: 'Pengajuan',
            href: bos.pengajuan.index({ tahun: tahun }),
            icon: ShoppingCart,
            isActive: page.url.startsWith(`/bos/${tahun}/pengajuan`)
        },
        {
            title: 'Dana Masuk',
            href: "#",
            icon: BanknoteArrowUp,
            isActive: false
        },
        {
            title: 'Pagu',
            href: bos.pagu.index({ tahun: tahun, jenjangs: '' }),
            icon: HandCoins,
            isActive: page.url.startsWith(`/bos/${tahun}/pagu`)
        },
    ];

    return (
        <>
        <SidebarGroup className="px-2 py-2">
            <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
            <SidebarMenu>
                {mainNavItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            asChild
                            isActive={item.isActive}
                            tooltip={{ children: item.title }}
                        >
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                <NavArkas tahun={tahun} />
            </SidebarMenu>
        </SidebarGroup>
        
        </>
    );
}
