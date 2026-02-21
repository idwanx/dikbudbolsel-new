import { Links, Meta } from '@/types/pagination';
import { Link } from '@inertiajs/react';

interface IndexProps {
    links: Links;
    meta: Meta;
}

export default function Pagination({ links, meta }: IndexProps ) {

    return ( 
        <div className="flex items-center gap-x-2">
            {meta?.links.map((link, index) => {
                return link.url === null ? (
                    <span key={index} className="text-sm text-foreground/50 mx-2" 
                    dangerouslySetInnerHTML={{ __html: link.label }} />
                ):(
                    <Link preserveScroll key={index}
                        className={`${link.active ? 'text-foreground font-semibold border-foreground' : 'text-foreground/80 border-foreground/50'} lg:text-sm px-3 py-1 border rounded-lg`}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }} 
                    />
                )
            })}
        </div>
    );
}