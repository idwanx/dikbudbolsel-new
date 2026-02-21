import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::index
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:15
* @route '/data-pendukung/sumber-dana'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/data-pendukung/sumber-dana',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::index
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:15
* @route '/data-pendukung/sumber-dana'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::index
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:15
* @route '/data-pendukung/sumber-dana'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::index
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:15
* @route '/data-pendukung/sumber-dana'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::index
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:15
* @route '/data-pendukung/sumber-dana'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::index
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:15
* @route '/data-pendukung/sumber-dana'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::index
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:15
* @route '/data-pendukung/sumber-dana'
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
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::store
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:33
* @route '/data-pendukung/sumber-dana'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/data-pendukung/sumber-dana',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::store
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:33
* @route '/data-pendukung/sumber-dana'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::store
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:33
* @route '/data-pendukung/sumber-dana'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::store
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:33
* @route '/data-pendukung/sumber-dana'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::store
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:33
* @route '/data-pendukung/sumber-dana'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::update
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:57
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
export const update = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/data-pendukung/sumber-dana/{sumber_dana}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::update
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:57
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
update.url = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sumber_dana: args }
    }

    if (Array.isArray(args)) {
        args = {
            sumber_dana: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sumber_dana: args.sumber_dana,
    }

    return update.definition.url
            .replace('{sumber_dana}', parsedArgs.sumber_dana.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::update
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:57
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
update.put = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::update
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:57
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
update.patch = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::update
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:57
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
const updateForm = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::update
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:57
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
updateForm.put = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::update
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:57
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
updateForm.patch = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::destroy
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:65
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
export const destroy = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/data-pendukung/sumber-dana/{sumber_dana}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::destroy
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:65
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
destroy.url = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sumber_dana: args }
    }

    if (Array.isArray(args)) {
        args = {
            sumber_dana: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sumber_dana: args.sumber_dana,
    }

    return destroy.definition.url
            .replace('{sumber_dana}', parsedArgs.sumber_dana.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::destroy
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:65
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
destroy.delete = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::destroy
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:65
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
const destroyForm = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SumberDanaController::destroy
* @see app/Http/Controllers/DataPendukung/SumberDanaController.php:65
* @route '/data-pendukung/sumber-dana/{sumber_dana}'
*/
destroyForm.delete = (args: { sumber_dana: string | number } | [sumber_dana: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const SumberDanaController = { index, store, update, destroy }

export default SumberDanaController