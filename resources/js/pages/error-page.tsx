import AppLayout from '@/layouts/app-layout';

interface ErrorProps {
  status: number;
}

export default function ErrorPage({ status }: ErrorProps) {
    const title = {
        503: '503: Layanan tidak tersedia',
        500: '500: Server error',
        404: '404: Halaman tidak ditemukan',
        403: '403: Tidak bisa di akses',
        413: '413: File terlalu besar',
    }[status] || 'Terjadi kesalahan';

    const description = {
        503: 'SMaaf, kami sedang melakukan pemeliharaan. Silakan periksa kembali nanti.',
        500: 'Ups, terjadi kesalahan pada server kami..',
        404: 'Maaf, halaman yang Anda cari tidak dapat ditemukan.',
        403: 'Maaf, Halaman tidak bisa diakses.',
        413: 'Maaf, File yang anda upload melebihi batas kapasitas upload.',
    }[status] || 'Kami mengalami kesalahan';
    
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-700">{status}</h1>
                    <h2 className="text-xl font-semibold text-gray-500 mb-4">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </>
    );
}