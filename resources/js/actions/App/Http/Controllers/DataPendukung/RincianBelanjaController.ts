import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::index
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:15
* @route '/data-pendukung/rincian-belanja'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/data-pendukung/rincian-belanja',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::index
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:15
* @route '/data-pendukung/rincian-belanja'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::index
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:15
* @route '/data-pendukung/rincian-belanja'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::index
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:15
* @route '/data-pendukung/rincian-belanja'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::index
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:15
* @route '/data-pendukung/rincian-belanja'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::index
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:15
* @route '/data-pendukung/rincian-belanja'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::index
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:15
* @route '/data-pendukung/rincian-belanja'
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
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::store
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:33
* @route '/data-pendukung/rincian-belanja'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/data-pendukung/rincian-belanja',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::store
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:33
* @route '/data-pendukung/rincian-belanja'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::store
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:33
* @route '/data-pendukung/rincian-belanja'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::store
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:33
* @route '/data-pendukung/rincian-belanja'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::store
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:33
* @route '/data-pendukung/rincian-belanja'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::update
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:57
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
export const update = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/data-pendukung/rincian-belanja/{rincian_belanja}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::update
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:57
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
update.url = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rincian_belanja: args }
    }

    if (Array.isArray(args)) {
        args = {
            rincian_belanja: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        rincian_belanja: args.rincian_belanja,
    }

    return update.definition.url
            .replace('{rincian_belanja}', parsedArgs.rincian_belanja.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::update
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:57
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
update.put = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::update
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:57
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
update.patch = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::update
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:57
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
const updateForm = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::update
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:57
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
updateForm.put = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::update
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:57
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
updateForm.patch = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:65
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
export const destroy = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/data-pendukung/rincian-belanja/{rincian_belanja}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:65
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
destroy.url = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rincian_belanja: args }
    }

    if (Array.isArray(args)) {
        args = {
            rincian_belanja: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        rincian_belanja: args.rincian_belanja,
    }

    return destroy.definition.url
            .replace('{rincian_belanja}', parsedArgs.rincian_belanja.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:65
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
destroy.delete = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:65
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
const destroyForm = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\RincianBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/RincianBelanjaController.php:65
* @route '/data-pendukung/rincian-belanja/{rincian_belanja}'
*/
destroyForm.delete = (args: { rincian_belanja: string | number } | [rincian_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const RincianBelanjaController = { index, store, update, destroy }

export default RincianBelanjaController