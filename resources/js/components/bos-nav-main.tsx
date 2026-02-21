import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { Auth, NavItem, SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import bos from "@/routes/bos";
import { Banknote, BanknoteArrowDown, BanknoteArrowUp, HandCoins, LayoutGrid, ShoppingCart } from 'lucide-react';
import { NavArkas } from './nav-rkas';

type Props = {
    auth: Auth;
    tahun: number;
};

export function BosNavMain() {
    const page = usePage<Props>();
    const { auth, tahun } = page.props;

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: bos.dashboard(tahun),
            icon: LayoutGrid,
            isActive: page.url.startsWith(`/bos/${tahun}/dashboard`),
            role: null,
        },
        {
            title: 'Transaksi',
            href: bos.transaksi.index(tahun),
            icon: BanknoteArrowDown,
            isActive: page.url.startsWith(`/bos/${tahun}/transaksi`),
            role: null,
        },
        {
            title: 'Pengajuan',
            href: bos.pengajuan.index({ tahun: tahun }),
            icon: ShoppingCart,
            isActive: page.url.startsWith(`/bos/${tahun}/pengajuan`),
            role: null,
        },
        {
            title: 'Dana Masuk',
            href: "#",
            icon: BanknoteArrowUp,
            isActive: false,
            role: null,
        },
        {
            title: 'Pagu',
            href: bos.pagu.index({ tahun: tahun, jenjangs: '' }),
            icon: HandCoins,
            isActive: page.url.startsWith(`/bos/${tahun}/pagu`),
            role: 'tim-bos',
        },
    ];

    const menuSidebar =mainNavItems.filter((item) => {
        if (auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval' || auth.user.roleuser.slug === 'checker') {
            return item
        } else if (auth.user.roleuser.slug === 'kepala-sekolah' || auth.user.roleuser.slug === 'bendahara') {
            return item.role === null
        }
    });

    return (
        <>
        <SidebarGroup className="px-2 py-2">
            <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
            <SidebarMenu>
                {menuSidebar.map((item) => (
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
