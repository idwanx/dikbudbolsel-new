import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";
import { BosNavDataPendukung } from "./bos-nav-data-pendukung";

export function SidebarDataPendukung() {
  return (
    <Sidebar 
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      variant="inset"
    >
      <SidebarContent>
        <BosNavDataPendukung />
      </SidebarContent>
    </Sidebar>
  )
}
