import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
const DashboardController = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardController.url(args, options),
    method: 'get',
})

DashboardController.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
DashboardController.url = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return DashboardController.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
DashboardController.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardController.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
DashboardController.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DashboardController.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
const DashboardControllerForm = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardController.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
DashboardControllerForm.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardController.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
DashboardControllerForm.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

DashboardController.form = DashboardControllerForm

export default DashboardController