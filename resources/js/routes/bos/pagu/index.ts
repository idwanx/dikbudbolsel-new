import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Bos\PaguController::index
* @see app/Http/Controllers/Bos/PaguController.php:17
* @route '/bos/{tahun?}/pagu/{jenjangs?}/{sumberdana?}'
*/
export const index = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/pagu/{jenjangs?}/{sumberdana?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\PaguController::index
* @see app/Http/Controllers/Bos/PaguController.php:17
* @route '/bos/{tahun?}/pagu/{jenjangs?}/{sumberdana?}'
*/
index.url = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{jenjangs?}', parsedArgs.jenjangs?.toString() ?? '')
            .replace('{sumberdana?}', parsedArgs.sumberdana?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PaguController::index
* @see app/Http/Controllers/Bos/PaguController.php:17
* @route '/bos/{tahun?}/pagu/{jenjangs?}/{sumberdana?}'
*/
index.get = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PaguController::index
* @see app/Http/Controllers/Bos/PaguController.php:17
* @route '/bos/{tahun?}/pagu/{jenjangs?}/{sumberdana?}'
*/
index.head = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\PaguController::index
* @see app/Http/Controllers/Bos/PaguController.php:17
* @route '/bos/{tahun?}/pagu/{jenjangs?}/{sumberdana?}'
*/
const indexForm = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PaguController::index
* @see app/Http/Controllers/Bos/PaguController.php:17
* @route '/bos/{tahun?}/pagu/{jenjangs?}/{sumberdana?}'
*/
indexForm.get = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PaguController::index
* @see app/Http/Controllers/Bos/PaguController.php:17
* @route '/bos/{tahun?}/pagu/{jenjangs?}/{sumberdana?}'
*/
indexForm.head = (args?: { tahun?: string | number, jenjangs?: string | number, sumberdana?: string | number } | [tahun: string | number, jenjangs: string | number, sumberdana: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Bos\PaguController::importMethod
* @see app/Http/Controllers/Bos/PaguController.php:52
* @route '/import-data/pagu'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/import-data/pagu',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Bos\PaguController::importMethod
* @see app/Http/Controllers/Bos/PaguController.php:52
* @route '/import-data/pagu'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PaguController::importMethod
* @see app/Http/Controllers/Bos/PaguController.php:52
* @route '/import-data/pagu'
*/
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\PaguController::importMethod
* @see app/Http/Controllers/Bos/PaguController.php:52
* @route '/import-data/pagu'
*/
const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\PaguController::importMethod
* @see app/Http/Controllers/Bos/PaguController.php:52
* @route '/import-data/pagu'
*/
importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

importMethod.form = importMethodForm

const pagu = {
    index: Object.assign(index, index),
    import: Object.assign(importMethod, importMethod),
}

export default pagu