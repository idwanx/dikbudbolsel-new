import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:29
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
export const rincian = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rincian.url(args, options),
    method: 'get',
})

rincian.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/rkas-rincian/checkuser',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:29
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
rincian.url = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tahun: args }
    }

    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
    }

    return rincian.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:29
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
rincian.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:29
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
rincian.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rincian.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:29
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
const rincianForm = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:29
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
rincianForm.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:29
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
rincianForm.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rincian.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

rincian.form = rincianForm

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:113
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
export const rekapitulasi = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rekapitulasi.url(args, options),
    method: 'get',
})

rekapitulasi.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/rkas-rekapitulasi/checkuser',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:113
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
rekapitulasi.url = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tahun: args }
    }

    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
    }

    return rekapitulasi.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:113
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
rekapitulasi.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:113
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
rekapitulasi.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rekapitulasi.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:113
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
const rekapitulasiForm = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:113
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
rekapitulasiForm.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:113
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
rekapitulasiForm.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rekapitulasi.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

rekapitulasi.form = rekapitulasiForm

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRincian
* @see app/Http/Controllers/Bos/RkasController.php:45
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
export const detailRincian = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailRincian.url(args, options),
    method: 'get',
})

detailRincian.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRincian
* @see app/Http/Controllers/Bos/RkasController.php:45
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detailRincian.url = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
            jenjangs: args[1],
            npsn: args[2],
            sumberdana: args[3],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
        "jenjangs",
        "npsn",
        "sumberdana",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
        jenjangs: args?.jenjangs,
        npsn: args?.npsn,
        sumberdana: args?.sumberdana,
    }

    return detailRincian.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{jenjangs?}', parsedArgs.jenjangs?.toString() ?? '')
            .replace('{npsn?}', parsedArgs.npsn?.toString() ?? '')
            .replace('{sumberdana?}', parsedArgs.sumberdana?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRincian
* @see app/Http/Controllers/Bos/RkasController.php:45
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detailRincian.get = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailRincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRincian
* @see app/Http/Controllers/Bos/RkasController.php:45
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detailRincian.head = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detailRincian.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRincian
* @see app/Http/Controllers/Bos/RkasController.php:45
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
const detailRincianForm = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailRincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRincian
* @see app/Http/Controllers/Bos/RkasController.php:45
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detailRincianForm.get = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailRincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRincian
* @see app/Http/Controllers/Bos/RkasController.php:45
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detailRincianForm.head = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailRincian.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

detailRincian.form = detailRincianForm

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:128
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
export const detailRekapitulasi = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailRekapitulasi.url(args, options),
    method: 'get',
})

detailRekapitulasi.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:128
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detailRekapitulasi.url = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
            jenjangs: args[1],
            sumberdana: args[2],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
        "jenjangs",
        "sumberdana",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
        jenjangs: args?.jenjangs,
        sumberdana: args?.sumberdana,
    }

    return detailRekapitulasi.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{jenjangs?}', parsedArgs.jenjangs?.toString() ?? '')
            .replace('{sumberdana?}', parsedArgs.sumberdana?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:128
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detailRekapitulasi.get = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailRekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:128
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detailRekapitulasi.head = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detailRekapitulasi.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:128
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
const detailRekapitulasiForm = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailRekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:128
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detailRekapitulasiForm.get = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailRekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detailRekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:128
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detailRekapitulasiForm.head = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailRekapitulasi.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

detailRekapitulasi.form = detailRekapitulasiForm

/**
* @see \App\Http\Controllers\Bos\RkasController::importMethod
* @see app/Http/Controllers/Bos/RkasController.php:179
* @route '/import-data/rkas'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/import-data/rkas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Bos\RkasController::importMethod
* @see app/Http/Controllers/Bos/RkasController.php:179
* @route '/import-data/rkas'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\RkasController::importMethod
* @see app/Http/Controllers/Bos/RkasController.php:179
* @route '/import-data/rkas'
*/
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::importMethod
* @see app/Http/Controllers/Bos/RkasController.php:179
* @route '/import-data/rkas'
*/
const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::importMethod
* @see app/Http/Controllers/Bos/RkasController.php:179
* @route '/import-data/rkas'
*/
importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

importMethod.form = importMethodForm

const rkas = {
    rincian: Object.assign(rincian, rincian),
    rekapitulasi: Object.assign(rekapitulasi, rekapitulasi),
    detailRincian: Object.assign(detailRincian, detailRincian),
    detailRekapitulasi: Object.assign(detailRekapitulasi, detailRekapitulasi),
    import: Object.assign(importMethod, importMethod),
}

export default rkas