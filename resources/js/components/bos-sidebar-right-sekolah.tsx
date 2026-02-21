import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";
import { BosNavSekolah } from "./bos-nav-sekolah";

export function BosSidebarRightSekolah() {

  return (
    <Sidebar
      className="sticky hidden border-l lg:flex top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      variant="inset"
    >
      <SidebarContent>
        <BosNavSekolah />
      </SidebarContent>
    </Sidebar>
  )
}
