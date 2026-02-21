import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { BosNavMain } from "@/components/bos-nav-main";
import { NavTahun } from "./nav-tahun";

export function BosSidebarLeft() {
  return (
    <Sidebar 
      // collapsible="none"
      // className="w-[calc(var(--sidebar-width-icon)+1px)]!"
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      collapsible="icon"
      variant="inset"
    >
      <SidebarHeader className="border-sidebar-border items-center p-2 border-b">
        <NavTahun />
      </SidebarHeader>
      <SidebarContent>
        <BosNavMain />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}
