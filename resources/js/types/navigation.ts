import type { InertiaLinkProps } from '@inertiajs/react';
import type { LucideIcon } from 'lucide-react';

export type BreadcrumbItem = {
    title: string;
    href: string;
};

export type NavItem = {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
    role?: string | null;
};

export type NavCollapse = {
    title: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
    items?: NavItem[];
}