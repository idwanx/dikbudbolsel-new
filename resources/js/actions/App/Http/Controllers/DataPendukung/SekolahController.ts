import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::index
* @see app/Http/Controllers/DataPendukung/SekolahController.php:20
* @route '/data-pendukung/sekolah'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/data-pendukung/sekolah',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::index
* @see app/Http/Controllers/DataPendukung/SekolahController.php:20
* @route '/data-pendukung/sekolah'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::index
* @see app/Http/Controllers/DataPendukung/SekolahController.php:20
* @route '/data-pendukung/sekolah'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::index
* @see app/Http/Controllers/DataPendukung/SekolahController.php:20
* @route '/data-pendukung/sekolah'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::index
* @see app/Http/Controllers/DataPendukung/SekolahController.php:20
* @route '/data-pendukung/sekolah'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::index
* @see app/Http/Controllers/DataPendukung/SekolahController.php:20
* @route '/data-pendukung/sekolah'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::index
* @see app/Http/Controllers/DataPendukung/SekolahController.php:20
* @route '/data-pendukung/sekolah'
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
* @see \App\Http\Controllers\DataPendukung\SekolahController::store
* @see app/Http/Controllers/DataPendukung/SekolahController.php:47
* @route '/data-pendukung/sekolah'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/data-pendukung/sekolah',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::store
* @see app/Http/Controllers/DataPendukung/SekolahController.php:47
* @route '/data-pendukung/sekolah'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::store
* @see app/Http/Controllers/DataPendukung/SekolahController.php:47
* @route '/data-pendukung/sekolah'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::store
* @see app/Http/Controllers/DataPendukung/SekolahController.php:47
* @route '/data-pendukung/sekolah'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::store
* @see app/Http/Controllers/DataPendukung/SekolahController.php:47
* @route '/data-pendukung/sekolah'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::update
* @see app/Http/Controllers/DataPendukung/SekolahController.php:71
* @route '/data-pendukung/sekolah/{sekolah}'
*/
export const update = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/data-pendukung/sekolah/{sekolah}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::update
* @see app/Http/Controllers/DataPendukung/SekolahController.php:71
* @route '/data-pendukung/sekolah/{sekolah}'
*/
update.url = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sekolah: args }
    }

    if (Array.isArray(args)) {
        args = {
            sekolah: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sekolah: args.sekolah,
    }

    return update.definition.url
            .replace('{sekolah}', parsedArgs.sekolah.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::update
* @see app/Http/Controllers/DataPendukung/SekolahController.php:71
* @route '/data-pendukung/sekolah/{sekolah}'
*/
update.put = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::update
* @see app/Http/Controllers/DataPendukung/SekolahController.php:71
* @route '/data-pendukung/sekolah/{sekolah}'
*/
update.patch = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::update
* @see app/Http/Controllers/DataPendukung/SekolahController.php:71
* @route '/data-pendukung/sekolah/{sekolah}'
*/
const updateForm = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::update
* @see app/Http/Controllers/DataPendukung/SekolahController.php:71
* @route '/data-pendukung/sekolah/{sekolah}'
*/
updateForm.put = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::update
* @see app/Http/Controllers/DataPendukung/SekolahController.php:71
* @route '/data-pendukung/sekolah/{sekolah}'
*/
updateForm.patch = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DataPendukung\SekolahController::destroy
* @see app/Http/Controllers/DataPendukung/SekolahController.php:79
* @route '/data-pendukung/sekolah/{sekolah}'
*/
export const destroy = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/data-pendukung/sekolah/{sekolah}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::destroy
* @see app/Http/Controllers/DataPendukung/SekolahController.php:79
* @route '/data-pendukung/sekolah/{sekolah}'
*/
destroy.url = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sekolah: args }
    }

    if (Array.isArray(args)) {
        args = {
            sekolah: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sekolah: args.sekolah,
    }

    return destroy.definition.url
            .replace('{sekolah}', parsedArgs.sekolah.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::destroy
* @see app/Http/Controllers/DataPendukung/SekolahController.php:79
* @route '/data-pendukung/sekolah/{sekolah}'
*/
destroy.delete = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::destroy
* @see app/Http/Controllers/DataPendukung/SekolahController.php:79
* @route '/data-pendukung/sekolah/{sekolah}'
*/
const destroyForm = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SekolahController::destroy
* @see app/Http/Controllers/DataPendukung/SekolahController.php:79
* @route '/data-pendukung/sekolah/{sekolah}'
*/
destroyForm.delete = (args: { sekolah: string | number } | [sekolah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const SekolahController = { index, store, update, destroy }

export default SekolahController