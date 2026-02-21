import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FetchDataController::getPenerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
export const getPenerima = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPenerima.url(options),
    method: 'get',
})

getPenerima.definition = {
    methods: ["get","head"],
    url: '/fetch-data/penerima',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FetchDataController::getPenerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
getPenerima.url = (options?: RouteQueryOptions) => {
    return getPenerima.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FetchDataController::getPenerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
getPenerima.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPenerima.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::getPenerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
getPenerima.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getPenerima.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FetchDataController::getPenerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
const getPenerimaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPenerima.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::getPenerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
getPenerimaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPenerima.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::getPenerima
* @see app/Http/Controllers/FetchDataController.php:33
* @route '/fetch-data/penerima'
*/
getPenerimaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPenerima.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getPenerima.form = getPenerimaForm

/**
* @see \App\Http\Controllers\FetchDataController::getRkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
export const getRkas = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRkas.url(args, options),
    method: 'get',
})

getRkas.definition = {
    methods: ["get","head"],
    url: '/fetch-data/rkas/{tahun?}/{sumberdana?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FetchDataController::getRkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
getRkas.url = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions) => {
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

    return getRkas.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{sumberdana?}', parsedArgs.sumberdana?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FetchDataController::getRkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
getRkas.get = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRkas.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::getRkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
getRkas.head = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getRkas.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FetchDataController::getRkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
const getRkasForm = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getRkas.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::getRkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
getRkasForm.get = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getRkas.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::getRkas
* @see app/Http/Controllers/FetchDataController.php:44
* @route '/fetch-data/rkas/{tahun?}/{sumberdana?}'
*/
getRkasForm.head = (args?: { tahun?: string | number, sumberdana?: string | number } | [tahun: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getRkas.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getRkas.form = getRkasForm

/**
* @see \App\Http\Controllers\FetchDataController::getSekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
export const getSekolah = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSekolah.url(args, options),
    method: 'get',
})

getSekolah.definition = {
    methods: ["get","head"],
    url: '/fetch-data/sekolah/{jenjang?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FetchDataController::getSekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
getSekolah.url = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return getSekolah.definition.url
            .replace('{jenjang?}', parsedArgs.jenjang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FetchDataController::getSekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
getSekolah.get = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSekolah.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::getSekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
getSekolah.head = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSekolah.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FetchDataController::getSekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
const getSekolahForm = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSekolah.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::getSekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
getSekolahForm.get = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSekolah.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FetchDataController::getSekolah
* @see app/Http/Controllers/FetchDataController.php:23
* @route '/fetch-data/sekolah/{jenjang?}'
*/
getSekolahForm.head = (args?: { jenjang?: string | { slug: string } } | [jenjang: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSekolah.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getSekolah.form = getSekolahForm

const FetchDataController = { getPenerima, getRkas, getSekolah }

export default FetchDataController