import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Separator } from "@/components/ui/separator"

export function AppSidebarHeader({
    breadcrumbs = [],
    trigger,
}: {
    breadcrumbs?: BreadcrumbItemType[],
    trigger: boolean
}) {
    return (
        <header className="flex shrink-0 py-2 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2">
            {trigger && (
              <>
              <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
              </>
            )}
            
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
        </header>
    );
}
