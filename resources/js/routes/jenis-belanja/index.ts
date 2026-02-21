import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::index
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:15
* @route '/data-pendukung/jenis-belanja'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/data-pendukung/jenis-belanja',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::index
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:15
* @route '/data-pendukung/jenis-belanja'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::index
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:15
* @route '/data-pendukung/jenis-belanja'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::index
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:15
* @route '/data-pendukung/jenis-belanja'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::index
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:15
* @route '/data-pendukung/jenis-belanja'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::index
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:15
* @route '/data-pendukung/jenis-belanja'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::index
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:15
* @route '/data-pendukung/jenis-belanja'
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
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::store
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:33
* @route '/data-pendukung/jenis-belanja'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/data-pendukung/jenis-belanja',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::store
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:33
* @route '/data-pendukung/jenis-belanja'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::store
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:33
* @route '/data-pendukung/jenis-belanja'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::store
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:33
* @route '/data-pendukung/jenis-belanja'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::store
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:33
* @route '/data-pendukung/jenis-belanja'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::update
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:57
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
export const update = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/data-pendukung/jenis-belanja/{jenis_belanja}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::update
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:57
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
update.url = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenis_belanja: args }
    }

    if (Array.isArray(args)) {
        args = {
            jenis_belanja: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jenis_belanja: args.jenis_belanja,
    }

    return update.definition.url
            .replace('{jenis_belanja}', parsedArgs.jenis_belanja.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::update
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:57
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
update.put = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::update
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:57
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
update.patch = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::update
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:57
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
const updateForm = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::update
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:57
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
updateForm.put = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::update
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:57
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
updateForm.patch = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:65
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
export const destroy = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/data-pendukung/jenis-belanja/{jenis_belanja}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:65
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
destroy.url = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenis_belanja: args }
    }

    if (Array.isArray(args)) {
        args = {
            jenis_belanja: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jenis_belanja: args.jenis_belanja,
    }

    return destroy.definition.url
            .replace('{jenis_belanja}', parsedArgs.jenis_belanja.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:65
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
destroy.delete = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:65
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
const destroyForm = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\JenisBelanjaController::destroy
* @see app/Http/Controllers/DataPendukung/JenisBelanjaController.php:65
* @route '/data-pendukung/jenis-belanja/{jenis_belanja}'
*/
destroyForm.delete = (args: { jenis_belanja: string | number } | [jenis_belanja: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const jenisBelanja = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default jenisBelanja