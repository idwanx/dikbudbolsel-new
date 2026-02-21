import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";
import { NavUsers } from "./nav-users";

export function SidebarUsers() {
  return (
    <Sidebar 
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      variant="inset"
    >
      <SidebarContent>
        <NavUsers />
      </SidebarContent>
    </Sidebar>
  )
}
