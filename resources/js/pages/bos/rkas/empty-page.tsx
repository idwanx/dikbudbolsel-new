import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Import, NotepadText } from "lucide-react"

export function EmptyPage() {

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <NotepadText />
        </EmptyMedia>
        <EmptyTitle>Tidak ada data RKAS</EmptyTitle>
        <EmptyDescription>
          Silahkan klik tombol Import dikanan atas untuk mengimport data RKAS.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
          <Import /> Import
      </EmptyContent>
    </Empty>
  )
}
