import type { AppLayoutProps } from '@/types';
import {
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppHeader } from '@/components/app-header';
import { Toaster } from 'sonner';
import { AppProvider } from './app-context';

export default ({ children }: AppLayoutProps) => (
    <div className="[--header-height:calc(--spacing(14))]">
      <Toaster />
      <AppProvider>
        <SidebarProvider className="flex flex-col">
          <AppHeader />
          <div className="flex flex-1 bg-sidebar">
            {children}
          </div>
        </SidebarProvider>
      </AppProvider>
    </div>
);
