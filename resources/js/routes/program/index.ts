import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::index
* @see app/Http/Controllers/DataPendukung/ProgramController.php:15
* @route '/data-pendukung/program'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/data-pendukung/program',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::index
* @see app/Http/Controllers/DataPendukung/ProgramController.php:15
* @route '/data-pendukung/program'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::index
* @see app/Http/Controllers/DataPendukung/ProgramController.php:15
* @route '/data-pendukung/program'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::index
* @see app/Http/Controllers/DataPendukung/ProgramController.php:15
* @route '/data-pendukung/program'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::index
* @see app/Http/Controllers/DataPendukung/ProgramController.php:15
* @route '/data-pendukung/program'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::index
* @see app/Http/Controllers/DataPendukung/ProgramController.php:15
* @route '/data-pendukung/program'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::index
* @see app/Http/Controllers/DataPendukung/ProgramController.php:15
* @route '/data-pendukung/program'
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
* @see \App\Http\Controllers\DataPendukung\ProgramController::store
* @see app/Http/Controllers/DataPendukung/ProgramController.php:33
* @route '/data-pendukung/program'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/data-pendukung/program',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::store
* @see app/Http/Controllers/DataPendukung/ProgramController.php:33
* @route '/data-pendukung/program'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::store
* @see app/Http/Controllers/DataPendukung/ProgramController.php:33
* @route '/data-pendukung/program'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::store
* @see app/Http/Controllers/DataPendukung/ProgramController.php:33
* @route '/data-pendukung/program'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::store
* @see app/Http/Controllers/DataPendukung/ProgramController.php:33
* @route '/data-pendukung/program'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::update
* @see app/Http/Controllers/DataPendukung/ProgramController.php:57
* @route '/data-pendukung/program/{program}'
*/
export const update = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/data-pendukung/program/{program}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::update
* @see app/Http/Controllers/DataPendukung/ProgramController.php:57
* @route '/data-pendukung/program/{program}'
*/
update.url = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program: args }
    }

    if (Array.isArray(args)) {
        args = {
            program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        program: args.program,
    }

    return update.definition.url
            .replace('{program}', parsedArgs.program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::update
* @see app/Http/Controllers/DataPendukung/ProgramController.php:57
* @route '/data-pendukung/program/{program}'
*/
update.put = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::update
* @see app/Http/Controllers/DataPendukung/ProgramController.php:57
* @route '/data-pendukung/program/{program}'
*/
update.patch = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::update
* @see app/Http/Controllers/DataPendukung/ProgramController.php:57
* @route '/data-pendukung/program/{program}'
*/
const updateForm = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::update
* @see app/Http/Controllers/DataPendukung/ProgramController.php:57
* @route '/data-pendukung/program/{program}'
*/
updateForm.put = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::update
* @see app/Http/Controllers/DataPendukung/ProgramController.php:57
* @route '/data-pendukung/program/{program}'
*/
updateForm.patch = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DataPendukung\ProgramController::destroy
* @see app/Http/Controllers/DataPendukung/ProgramController.php:65
* @route '/data-pendukung/program/{program}'
*/
export const destroy = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/data-pendukung/program/{program}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::destroy
* @see app/Http/Controllers/DataPendukung/ProgramController.php:65
* @route '/data-pendukung/program/{program}'
*/
destroy.url = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program: args }
    }

    if (Array.isArray(args)) {
        args = {
            program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        program: args.program,
    }

    return destroy.definition.url
            .replace('{program}', parsedArgs.program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::destroy
* @see app/Http/Controllers/DataPendukung/ProgramController.php:65
* @route '/data-pendukung/program/{program}'
*/
destroy.delete = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::destroy
* @see app/Http/Controllers/DataPendukung/ProgramController.php:65
* @route '/data-pendukung/program/{program}'
*/
const destroyForm = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ProgramController::destroy
* @see app/Http/Controllers/DataPendukung/ProgramController.php:65
* @route '/data-pendukung/program/{program}'
*/
destroyForm.delete = (args: { program: string | number } | [program: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const program = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default program