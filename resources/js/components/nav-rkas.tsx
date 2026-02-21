import { ChevronRight, NotepadText } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import { NavCollapse } from "@/types";
import bos from "@/routes/bos";


export function NavArkas({ tahun }: { tahun: number }) {
    const { url } = usePage();

    const items: NavCollapse[] = [
    {
      title: "Rkas",
      icon: NotepadText,
      isActive: url.startsWith(`/bos/${tahun}/rkas`),
      items: [
        {
          title: "Rincian",
          href: bos.rkas.rincian({ tahun: tahun }),
          isActive: url.startsWith(`/bos/${tahun}/rkas/rincian`),
        },
        {
          title: "Rekapitulasi",
          href: bos.rkas.rekapitulasi({ tahun: tahun }),
          isActive: url.startsWith(`/bos/${tahun}/rkas/rekapitulasi`),
        },
      ],
    },
];
    
  return (
        <>
          {items.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SidebarMenuButton asChild
                          isActive={subItem.isActive}
                        >
                          <Link href={subItem.href}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </>
  )
}
