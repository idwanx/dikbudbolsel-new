
import { Badge } from "@/components/ui/badge";

type Status = "draft" | "validasi" | "divalidasi" | "berhasil" | "gagal";

function LabelStatusRincian({ status }: { status: Status }) {
  switch (status) {
    case 'draft':
        return (
            <Badge variant="outline">Draft</Badge>
        );
    case 'validasi':
        return (
            <Badge variant="outline" className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                Validasi
            </Badge>
        );
    case 'divalidasi':
        return (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                Divalidasi
            </Badge>
        );
    case 'berhasil':
        return (
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                Berhasil
            </Badge>
        );
    case 'gagal':
        return (
            <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                Gagal
            </Badge>
        );
    default:
      return (
        <Badge variant="outline">Draft</Badge>
      );
  }
}

export { LabelStatusRincian }