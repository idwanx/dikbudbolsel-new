import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::index
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:15
* @route '/data-pendukung/sub-program'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/data-pendukung/sub-program',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::index
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:15
* @route '/data-pendukung/sub-program'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::index
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:15
* @route '/data-pendukung/sub-program'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::index
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:15
* @route '/data-pendukung/sub-program'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::index
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:15
* @route '/data-pendukung/sub-program'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::index
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:15
* @route '/data-pendukung/sub-program'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::index
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:15
* @route '/data-pendukung/sub-program'
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
* @see \App\Http\Controllers\DataPendukung\SubProgramController::store
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:33
* @route '/data-pendukung/sub-program'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/data-pendukung/sub-program',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::store
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:33
* @route '/data-pendukung/sub-program'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::store
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:33
* @route '/data-pendukung/sub-program'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::store
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:33
* @route '/data-pendukung/sub-program'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::store
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:33
* @route '/data-pendukung/sub-program'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::update
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:57
* @route '/data-pendukung/sub-program/{sub_program}'
*/
export const update = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/data-pendukung/sub-program/{sub_program}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::update
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:57
* @route '/data-pendukung/sub-program/{sub_program}'
*/
update.url = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sub_program: args }
    }

    if (Array.isArray(args)) {
        args = {
            sub_program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sub_program: args.sub_program,
    }

    return update.definition.url
            .replace('{sub_program}', parsedArgs.sub_program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::update
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:57
* @route '/data-pendukung/sub-program/{sub_program}'
*/
update.put = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::update
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:57
* @route '/data-pendukung/sub-program/{sub_program}'
*/
update.patch = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::update
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:57
* @route '/data-pendukung/sub-program/{sub_program}'
*/
const updateForm = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::update
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:57
* @route '/data-pendukung/sub-program/{sub_program}'
*/
updateForm.put = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::update
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:57
* @route '/data-pendukung/sub-program/{sub_program}'
*/
updateForm.patch = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DataPendukung\SubProgramController::destroy
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:65
* @route '/data-pendukung/sub-program/{sub_program}'
*/
export const destroy = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/data-pendukung/sub-program/{sub_program}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::destroy
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:65
* @route '/data-pendukung/sub-program/{sub_program}'
*/
destroy.url = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sub_program: args }
    }

    if (Array.isArray(args)) {
        args = {
            sub_program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sub_program: args.sub_program,
    }

    return destroy.definition.url
            .replace('{sub_program}', parsedArgs.sub_program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::destroy
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:65
* @route '/data-pendukung/sub-program/{sub_program}'
*/
destroy.delete = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::destroy
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:65
* @route '/data-pendukung/sub-program/{sub_program}'
*/
const destroyForm = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\SubProgramController::destroy
* @see app/Http/Controllers/DataPendukung/SubProgramController.php:65
* @route '/data-pendukung/sub-program/{sub_program}'
*/
destroyForm.delete = (args: { sub_program: string | number } | [sub_program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const SubProgramController = { index, store, update, destroy }

export default SubProgramController