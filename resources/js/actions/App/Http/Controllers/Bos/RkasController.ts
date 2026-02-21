import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:30
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
* @see app/Http/Controllers/Bos/RkasController.php:30
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
* @see app/Http/Controllers/Bos/RkasController.php:30
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
rincian.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:30
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
rincian.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rincian.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:30
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
const rincianForm = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:30
* @route '/bos/{tahun?}/rkas-rincian/checkuser'
*/
rincianForm.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rincian
* @see app/Http/Controllers/Bos/RkasController.php:30
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
* @see app/Http/Controllers/Bos/RkasController.php:118
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
* @see app/Http/Controllers/Bos/RkasController.php:118
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
* @see app/Http/Controllers/Bos/RkasController.php:118
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
rekapitulasi.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:118
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
rekapitulasi.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rekapitulasi.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:118
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
const rekapitulasiForm = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:118
* @route '/bos/{tahun?}/rkas-rekapitulasi/checkuser'
*/
rekapitulasiForm.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:118
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
* @see \App\Http\Controllers\Bos\RkasController::detail_rincian
* @see app/Http/Controllers/Bos/RkasController.php:46
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
export const detail_rincian = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail_rincian.url(args, options),
    method: 'get',
})

detail_rincian.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rincian
* @see app/Http/Controllers/Bos/RkasController.php:46
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detail_rincian.url = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions) => {
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

    return detail_rincian.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{jenjangs?}', parsedArgs.jenjangs?.toString() ?? '')
            .replace('{npsn?}', parsedArgs.npsn?.toString() ?? '')
            .replace('{sumberdana?}', parsedArgs.sumberdana?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rincian
* @see app/Http/Controllers/Bos/RkasController.php:46
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detail_rincian.get = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail_rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rincian
* @see app/Http/Controllers/Bos/RkasController.php:46
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detail_rincian.head = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail_rincian.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rincian
* @see app/Http/Controllers/Bos/RkasController.php:46
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
const detail_rincianForm = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail_rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rincian
* @see app/Http/Controllers/Bos/RkasController.php:46
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detail_rincianForm.get = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail_rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rincian
* @see app/Http/Controllers/Bos/RkasController.php:46
* @route '/bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}'
*/
detail_rincianForm.head = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail_rincian.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

detail_rincian.form = detail_rincianForm

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:133
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
export const detail_rekapitulasi = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail_rekapitulasi.url(args, options),
    method: 'get',
})

detail_rekapitulasi.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:133
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detail_rekapitulasi.url = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions) => {
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

    return detail_rekapitulasi.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{jenjangs?}', parsedArgs.jenjangs?.toString() ?? '')
            .replace('{sumberdana?}', parsedArgs.sumberdana?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:133
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detail_rekapitulasi.get = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail_rekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:133
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detail_rekapitulasi.head = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail_rekapitulasi.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:133
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
const detail_rekapitulasiForm = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail_rekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:133
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detail_rekapitulasiForm.get = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail_rekapitulasi.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::detail_rekapitulasi
* @see app/Http/Controllers/Bos/RkasController.php:133
* @route '/bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}'
*/
detail_rekapitulasiForm.head = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail_rekapitulasi.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

detail_rekapitulasi.form = detail_rekapitulasiForm

/**
* @see \App\Http\Controllers\Bos\RkasController::importMethod
* @see app/Http/Controllers/Bos/RkasController.php:188
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
* @see app/Http/Controllers/Bos/RkasController.php:188
* @route '/import-data/rkas'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\RkasController::importMethod
* @see app/Http/Controllers/Bos/RkasController.php:188
* @route '/import-data/rkas'
*/
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::importMethod
* @see app/Http/Controllers/Bos/RkasController.php:188
* @route '/import-data/rkas'
*/
const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\RkasController::importMethod
* @see app/Http/Controllers/Bos/RkasController.php:188
* @route '/import-data/rkas'
*/
importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

importMethod.form = importMethodForm

const RkasController = { rincian, rekapitulasi, detail_rincian, detail_rekapitulasi, importMethod, import: importMethod }

export default RkasController