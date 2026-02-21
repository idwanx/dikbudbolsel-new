import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::index
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:15
* @route '/data-pendukung/kegiatan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/data-pendukung/kegiatan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::index
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:15
* @route '/data-pendukung/kegiatan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::index
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:15
* @route '/data-pendukung/kegiatan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::index
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:15
* @route '/data-pendukung/kegiatan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::index
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:15
* @route '/data-pendukung/kegiatan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::index
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:15
* @route '/data-pendukung/kegiatan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::index
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:15
* @route '/data-pendukung/kegiatan'
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
* @see \App\Http\Controllers\DataPendukung\KegiatanController::store
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:33
* @route '/data-pendukung/kegiatan'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/data-pendukung/kegiatan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::store
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:33
* @route '/data-pendukung/kegiatan'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::store
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:33
* @route '/data-pendukung/kegiatan'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::store
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:33
* @route '/data-pendukung/kegiatan'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::store
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:33
* @route '/data-pendukung/kegiatan'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::update
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:57
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
export const update = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/data-pendukung/kegiatan/{kegiatan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::update
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:57
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
update.url = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kegiatan: args }
    }

    if (Array.isArray(args)) {
        args = {
            kegiatan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kegiatan: args.kegiatan,
    }

    return update.definition.url
            .replace('{kegiatan}', parsedArgs.kegiatan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::update
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:57
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
update.put = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::update
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:57
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
update.patch = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::update
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:57
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
const updateForm = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::update
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:57
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
updateForm.put = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::update
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:57
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
updateForm.patch = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DataPendukung\KegiatanController::destroy
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:65
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
export const destroy = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/data-pendukung/kegiatan/{kegiatan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::destroy
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:65
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
destroy.url = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kegiatan: args }
    }

    if (Array.isArray(args)) {
        args = {
            kegiatan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kegiatan: args.kegiatan,
    }

    return destroy.definition.url
            .replace('{kegiatan}', parsedArgs.kegiatan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::destroy
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:65
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
destroy.delete = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::destroy
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:65
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
const destroyForm = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\KegiatanController::destroy
* @see app/Http/Controllers/DataPendukung/KegiatanController.php:65
* @route '/data-pendukung/kegiatan/{kegiatan}'
*/
destroyForm.delete = (args: { kegiatan: string | number } | [kegiatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const kegiatan = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default kegiatan