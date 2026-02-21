import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
import transaksi from './transaksi'
import pengajuan from './pengajuan'
import rkas from './rkas'
import pagu from './pagu'
/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
export const dashboard = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
dashboard.url = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return dashboard.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
dashboard.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
dashboard.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
const dashboardForm = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
dashboardForm.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\DashboardController::__invoke
* @see app/Http/Controllers/Bos/DashboardController.php:19
* @route '/bos/{tahun?}/dashboard'
*/
dashboardForm.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

const bos = {
    dashboard: Object.assign(dashboard, dashboard),
    transaksi: Object.assign(transaksi, transaksi),
    pengajuan: Object.assign(pengajuan, pengajuan),
    rkas: Object.assign(rkas, rkas),
    pagu: Object.assign(pagu, pagu),
}

export default bos