import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenuButton,
    useSidebar,
} from '@/components/ui/sidebar';
import { Calendar, CheckIcon, ChevronsUpDown } from 'lucide-react';
import {
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { router, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import bos from '@/routes/bos';


type Props = {
    tahun: number;
};

export function NavTahun() {
    const { state } = useSidebar();
    const { tahun } = usePage<Props>().props;
    const [tahunState, setTahunState] = useState<number | null>(null);
    const currentYear = new Date().getFullYear();

    const years = useMemo(() => {
        const startYear = 2024;
        const yearsList: number[] = [];
        for (let year = startYear; year <= currentYear; year++) {
            yearsList.push(year);
        }
        return yearsList;
    }, []);

    const updateNewTahun = (newTahun: number) => {
        setTahunState(newTahun);
    };

    useEffect(() => {
        if (tahunState) {
            router.visit(bos.dashboard(tahunState));
        }

        return () => {
            tahun;
        }
        
    }, [tahunState]);
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                    size="lg"
                    className="group w-40 h-8 items-center justify-center text-lg font-medium text-indigo-500"
                    data-test="sidebar-menu-button"
                >
                    {state === "collapsed" ? (
                        <Calendar />
                    ):(
                        <>
                        {tahun}
                        <ChevronsUpDown className="ml-auto size-4" />
                        </>
                    )}
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {years.map((year) => (
                    <DropdownMenuItem key={year} onSelect={() => updateNewTahun(year)}>
                        {year}
                        <CheckIcon className={cn('ml-auto', year === tahun ? 'opacity-100' : 'opacity-0')} />
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
