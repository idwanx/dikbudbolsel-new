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
import users from '@/routes/users';

export function NavUsers() {
    const { isCurrentUrl } = useCurrentUrl();

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: users.index(),
            icon: CircleDotDashed,
        },
    ];

    return (
        <SidebarGroup className="px-2 py-2">
            <SidebarGroupLabel>Daftar Menu</SidebarGroupLabel>
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
