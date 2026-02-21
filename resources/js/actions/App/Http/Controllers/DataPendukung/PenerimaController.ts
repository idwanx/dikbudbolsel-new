import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::index
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:30
* @route '/data-pendukung/penerima'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/data-pendukung/penerima',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::index
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:30
* @route '/data-pendukung/penerima'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::index
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:30
* @route '/data-pendukung/penerima'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::index
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:30
* @route '/data-pendukung/penerima'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::index
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:30
* @route '/data-pendukung/penerima'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::index
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:30
* @route '/data-pendukung/penerima'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::index
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:30
* @route '/data-pendukung/penerima'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::store
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:62
* @route '/data-pendukung/penerima'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/data-pendukung/penerima',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::store
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:62
* @route '/data-pendukung/penerima'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::store
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:62
* @route '/data-pendukung/penerima'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::store
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:62
* @route '/data-pendukung/penerima'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::store
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:62
* @route '/data-pendukung/penerima'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::update
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:110
* @route '/data-pendukung/penerima/{penerima}'
*/
export const update = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/data-pendukung/penerima/{penerima}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::update
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:110
* @route '/data-pendukung/penerima/{penerima}'
*/
update.url = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { penerima: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { penerima: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            penerima: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        penerima: typeof args.penerima === 'object'
        ? args.penerima.id
        : args.penerima,
    }

    return update.definition.url
            .replace('{penerima}', parsedArgs.penerima.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::update
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:110
* @route '/data-pendukung/penerima/{penerima}'
*/
update.put = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::update
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:110
* @route '/data-pendukung/penerima/{penerima}'
*/
update.patch = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::update
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:110
* @route '/data-pendukung/penerima/{penerima}'
*/
const updateForm = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::update
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:110
* @route '/data-pendukung/penerima/{penerima}'
*/
updateForm.put = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::update
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:110
* @route '/data-pendukung/penerima/{penerima}'
*/
updateForm.patch = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::destroy
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:141
* @route '/data-pendukung/penerima/{penerima}'
*/
export const destroy = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/data-pendukung/penerima/{penerima}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::destroy
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:141
* @route '/data-pendukung/penerima/{penerima}'
*/
destroy.url = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { penerima: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { penerima: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            penerima: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        penerima: typeof args.penerima === 'object'
        ? args.penerima.id
        : args.penerima,
    }

    return destroy.definition.url
            .replace('{penerima}', parsedArgs.penerima.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::destroy
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:141
* @route '/data-pendukung/penerima/{penerima}'
*/
destroy.delete = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::destroy
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:141
* @route '/data-pendukung/penerima/{penerima}'
*/
const destroyForm = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\PenerimaController::destroy
* @see app/Http/Controllers/DataPendukung/PenerimaController.php:141
* @route '/data-pendukung/penerima/{penerima}'
*/
destroyForm.delete = (args: { penerima: number | { id: number } } | [penerima: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const PenerimaController = { index, store, update, destroy }

export default PenerimaController