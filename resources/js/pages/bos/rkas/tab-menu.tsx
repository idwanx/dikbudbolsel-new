import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import bos from "@/routes/bos";
import { NavItem } from "@/types";
import { Link, usePage } from "@inertiajs/react";

const activeItemStyles = 'text-indigo-500 dark:bg-neutral-800 dark:text-neutral-100';

interface Props {
    tahun: number;
    jenjangs: string;
    npsn: string;
    dana: string;
    [key: string]: unknown;
}

export function TabsMenu() {
    const page = usePage<Props>();
    const { tahun, jenjangs, npsn, sumberdana } = page.props;
    const isRincian: boolean = page.url.startsWith(`/bos/${tahun}/rkas/rincian`);
    
    let navigationMenuItems:  NavItem[] = [];

    if (isRincian) {
      navigationMenuItems = [
        { 
            title: "Bos Reguler", 
            href: bos.rkas.detailRincian({ tahun: tahun, jenjangs: jenjangs ? jenjangs : '', npsn: npsn ? npsn : '', sumberdana: npsn ? 'bosp-reguler' : ''}),
            isActive: sumberdana === 'bosp-reguler',
        },
        { 
            title: "Bos Kinerja", 
            href: bos.rkas.detailRincian({ tahun: tahun, jenjangs: jenjangs ? jenjangs : '', npsn: npsn ? npsn : '', sumberdana: npsn ? 'bosp-kinerja' : ''}),
            isActive: sumberdana === 'bosp-kinerja',
        },
      ];
    } else {
      navigationMenuItems = [
        { 
            title: "Bos Reguler", 
            href: bos.rkas.detailRekapitulasi({ tahun: tahun, jenjangs: jenjangs ? jenjangs : '', sumberdana: jenjangs ? 'bosp-reguler' : ''}),
            isActive: sumberdana === 'bosp-reguler'
        },
        { 
            title: "Bos Kinerja", 
            href: bos.rkas.detailRekapitulasi({ tahun: tahun, jenjangs: jenjangs ? jenjangs : '', sumberdana: jenjangs ? 'bosp-kinerja' : ''}),
            isActive: sumberdana === 'bosp-kinerja'
        },
      ];
    }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link
                href={item.href}
                className={cn(
                    navigationMenuTriggerStyle(),
                    item.isActive && activeItemStyles,
                    'h-9 cursor-pointer px-3',
                )}
            >
                {item.title}
            </Link>
            {item.isActive && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-indigo-500 dark:bg-white"></div>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
