export type Links = {
    first: string | null;
    last: string | null;
    next: string | null;
    prev: string | null;
};

export type Meta = {
    current_page: number;
    from: number;
    last_page: number;
    links: MetaLinks[];
    path: string;
    per_page: number;
    to: number;
    total: number;
};

export type MetaLinks = {
    active: boolean;
    label: string;
    page: number | null;
    url: string | null;
};
