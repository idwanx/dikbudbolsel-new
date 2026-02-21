import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:28
* @route '/bos/{tahun?}/transaksi'
*/
export const index = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/transaksi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:28
* @route '/bos/{tahun?}/transaksi'
*/
index.url = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:28
* @route '/bos/{tahun?}/transaksi'
*/
index.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:28
* @route '/bos/{tahun?}/transaksi'
*/
index.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:28
* @route '/bos/{tahun?}/transaksi'
*/
const indexForm = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:28
* @route '/bos/{tahun?}/transaksi'
*/
indexForm.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:28
* @route '/bos/{tahun?}/transaksi'
*/
indexForm.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Bos\TransaksiController::store
* @see app/Http/Controllers/Bos/TransaksiController.php:35
* @route '/transaksi/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/transaksi/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Bos\TransaksiController::store
* @see app/Http/Controllers/Bos/TransaksiController.php:35
* @route '/transaksi/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\TransaksiController::store
* @see app/Http/Controllers/Bos/TransaksiController.php:35
* @route '/transaksi/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::store
* @see app/Http/Controllers/Bos/TransaksiController.php:35
* @route '/transaksi/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::store
* @see app/Http/Controllers/Bos/TransaksiController.php:35
* @route '/transaksi/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy
* @see app/Http/Controllers/Bos/TransaksiController.php:142
* @route '/transaksi/destroy/{transaksi}'
*/
export const destroy = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/transaksi/destroy/{transaksi}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy
* @see app/Http/Controllers/Bos/TransaksiController.php:142
* @route '/transaksi/destroy/{transaksi}'
*/
destroy.url = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { transaksi: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            transaksi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaksi: typeof args.transaksi === 'object'
        ? args.transaksi.id
        : args.transaksi,
    }

    return destroy.definition.url
            .replace('{transaksi}', parsedArgs.transaksi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy
* @see app/Http/Controllers/Bos/TransaksiController.php:142
* @route '/transaksi/destroy/{transaksi}'
*/
destroy.delete = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy
* @see app/Http/Controllers/Bos/TransaksiController.php:142
* @route '/transaksi/destroy/{transaksi}'
*/
const destroyForm = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy
* @see app/Http/Controllers/Bos/TransaksiController.php:142
* @route '/transaksi/destroy/{transaksi}'
*/
destroyForm.delete = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi
* @see app/Http/Controllers/Bos/TransaksiController.php:107
* @route '/transaksi/validasi/{nomor}'
*/
export const validasi = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: validasi.url(args, options),
    method: 'post',
})

validasi.definition = {
    methods: ["post"],
    url: '/transaksi/validasi/{nomor}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi
* @see app/Http/Controllers/Bos/TransaksiController.php:107
* @route '/transaksi/validasi/{nomor}'
*/
validasi.url = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { nomor: args }
    }

    if (Array.isArray(args)) {
        args = {
            nomor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        nomor: args.nomor,
    }

    return validasi.definition.url
            .replace('{nomor}', parsedArgs.nomor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi
* @see app/Http/Controllers/Bos/TransaksiController.php:107
* @route '/transaksi/validasi/{nomor}'
*/
validasi.post = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: validasi.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi
* @see app/Http/Controllers/Bos/TransaksiController.php:107
* @route '/transaksi/validasi/{nomor}'
*/
const validasiForm = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: validasi.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi
* @see app/Http/Controllers/Bos/TransaksiController.php:107
* @route '/transaksi/validasi/{nomor}'
*/
validasiForm.post = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: validasi.url(args, options),
    method: 'post',
})

validasi.form = validasiForm

const transaksi = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
    validasi: Object.assign(validasi, validasi),
}

export default transaksi