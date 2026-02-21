import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\FetchDataController::penerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
export const penerima = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: penerima.url(options),
    method: 'get',
})

penerima.definition = {
    methods: ["get","head"],
    url: '/fetch-data/penerima',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FetchDataController::penerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
penerima.url = (options?: RouteQueryOptions) => {
    return penerima.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FetchDataController::penerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
penerima.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: penerima.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::penerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
penerima.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: penerima.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FetchDataController::penerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
const penerimaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: penerima.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::penerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
penerimaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: penerima.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::penerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
penerimaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: penerima.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

penerima.form = penerimaForm

/**
* @see \App\Http\Controllers\FetchDataController::rkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
export const rkas = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rkas.url(args, options),
    method: 'get',
})

rkas.definition = {
    methods: ["get","head"],
    url: '/fetch-data/rkas/{tahun?}/{sumberdana?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FetchDataController::rkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
rkas.url = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
            sumberdana: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
        "sumberdana",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
        sumberdana: args?.sumberdana,
    }

    return rkas.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{sumberdana?}', parsedArgs.sumberdana?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FetchDataController::rkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
rkas.get = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rkas.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::rkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
rkas.head = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rkas.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FetchDataController::rkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
const rkasForm = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rkas.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::rkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
rkasForm.get = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rkas.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::rkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
rkasForm.head = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rkas.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

rkas.form = rkasForm

/**
* @see \App\Http\Controllers\FetchDataController::sekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
export const sekolah = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sekolah.url(args, options),
    method: 'get',
})

sekolah.definition = {
    methods: ["get","head"],
    url: '/fetch-data/sekolah/{jenjang?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FetchDataController::sekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
sekolah.url = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenjang: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { jenjang: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            jenjang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "jenjang",
    ])

    const parsedArgs = {
        jenjang: typeof args?.jenjang === 'object'
        ? args.jenjang.slug
        : args?.jenjang,
    }

    return sekolah.definition.url
            .replace('{jenjang?}', parsedArgs.jenjang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FetchDataController::sekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
sekolah.get = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sekolah.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::sekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
sekolah.head = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sekolah.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FetchDataController::sekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
const sekolahForm = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sekolah.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::sekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
sekolahForm.get = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sekolah.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::sekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
sekolahForm.head = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sekolah.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sekolah.form = sekolahForm

const fetchData = {
    penerima: Object.assign(penerima, penerima),
    rkas: Object.assign(rkas, rkas),
    sekolah: Object.assign(sekolah, sekolah),
}

export default fetchData