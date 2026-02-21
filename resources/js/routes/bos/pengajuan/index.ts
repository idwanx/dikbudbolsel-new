import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Bos\PengajuanController::index
* @see app/Http/Controllers/Bos/PengajuanController.php:35
* @route '/bos/{tahun?}/pengajuan'
*/
export const index = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/pengajuan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\PengajuanController::index
* @see app/Http/Controllers/Bos/PengajuanController.php:35
* @route '/bos/{tahun?}/pengajuan'
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
* @see \App\Http\Controllers\Bos\PengajuanController::index
* @see app/Http/Controllers/Bos/PengajuanController.php:35
* @route '/bos/{tahun?}/pengajuan'
*/
index.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::index
* @see app/Http/Controllers/Bos/PengajuanController.php:35
* @route '/bos/{tahun?}/pengajuan'
*/
index.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::index
* @see app/Http/Controllers/Bos/PengajuanController.php:35
* @route '/bos/{tahun?}/pengajuan'
*/
const indexForm = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::index
* @see app/Http/Controllers/Bos/PengajuanController.php:35
* @route '/bos/{tahun?}/pengajuan'
*/
indexForm.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::index
* @see app/Http/Controllers/Bos/PengajuanController.php:35
* @route '/bos/{tahun?}/pengajuan'
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
* @see \App\Http\Controllers\Bos\PengajuanController::rincian
* @see app/Http/Controllers/Bos/PengajuanController.php:49
* @route '/bos/{tahun?}/pengajuan/rincian/{nomor?}'
*/
export const rincian = (args?: { tahun?: string | number, nomor?: string | number } | [tahun: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rincian.url(args, options),
    method: 'get',
})

rincian.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/pengajuan/rincian/{nomor?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\PengajuanController::rincian
* @see app/Http/Controllers/Bos/PengajuanController.php:49
* @route '/bos/{tahun?}/pengajuan/rincian/{nomor?}'
*/
rincian.url = (args?: { tahun?: string | number, nomor?: string | number } | [tahun: string | number, nomor: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
            nomor: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
        "nomor",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
        nomor: args?.nomor,
    }

    return rincian.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{nomor?}', parsedArgs.nomor?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PengajuanController::rincian
* @see app/Http/Controllers/Bos/PengajuanController.php:49
* @route '/bos/{tahun?}/pengajuan/rincian/{nomor?}'
*/
rincian.get = (args?: { tahun?: string | number, nomor?: string | number } | [tahun: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::rincian
* @see app/Http/Controllers/Bos/PengajuanController.php:49
* @route '/bos/{tahun?}/pengajuan/rincian/{nomor?}'
*/
rincian.head = (args?: { tahun?: string | number, nomor?: string | number } | [tahun: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rincian.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::rincian
* @see app/Http/Controllers/Bos/PengajuanController.php:49
* @route '/bos/{tahun?}/pengajuan/rincian/{nomor?}'
*/
const rincianForm = (args?: { tahun?: string | number, nomor?: string | number } | [tahun: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::rincian
* @see app/Http/Controllers/Bos/PengajuanController.php:49
* @route '/bos/{tahun?}/pengajuan/rincian/{nomor?}'
*/
rincianForm.get = (args?: { tahun?: string | number, nomor?: string | number } | [tahun: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::rincian
* @see app/Http/Controllers/Bos/PengajuanController.php:49
* @route '/bos/{tahun?}/pengajuan/rincian/{nomor?}'
*/
rincianForm.head = (args?: { tahun?: string | number, nomor?: string | number } | [tahun: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rincian.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

rincian.form = rincianForm

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftar
* @see app/Http/Controllers/Bos/PengajuanController.php:82
* @route '/bos/{tahun?}/pengajuan/daftar/{jenjangs?}/{npsn?}'
*/
export const daftar = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: daftar.url(args, options),
    method: 'get',
})

daftar.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/pengajuan/daftar/{jenjangs?}/{npsn?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftar
* @see app/Http/Controllers/Bos/PengajuanController.php:82
* @route '/bos/{tahun?}/pengajuan/daftar/{jenjangs?}/{npsn?}'
*/
daftar.url = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
            jenjangs: args[1],
            npsn: args[2],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
        "jenjangs",
        "npsn",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
        jenjangs: args?.jenjangs,
        npsn: args?.npsn,
    }

    return daftar.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{jenjangs?}', parsedArgs.jenjangs?.toString() ?? '')
            .replace('{npsn?}', parsedArgs.npsn?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftar
* @see app/Http/Controllers/Bos/PengajuanController.php:82
* @route '/bos/{tahun?}/pengajuan/daftar/{jenjangs?}/{npsn?}'
*/
daftar.get = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: daftar.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftar
* @see app/Http/Controllers/Bos/PengajuanController.php:82
* @route '/bos/{tahun?}/pengajuan/daftar/{jenjangs?}/{npsn?}'
*/
daftar.head = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: daftar.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftar
* @see app/Http/Controllers/Bos/PengajuanController.php:82
* @route '/bos/{tahun?}/pengajuan/daftar/{jenjangs?}/{npsn?}'
*/
const daftarForm = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: daftar.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftar
* @see app/Http/Controllers/Bos/PengajuanController.php:82
* @route '/bos/{tahun?}/pengajuan/daftar/{jenjangs?}/{npsn?}'
*/
daftarForm.get = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: daftar.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftar
* @see app/Http/Controllers/Bos/PengajuanController.php:82
* @route '/bos/{tahun?}/pengajuan/daftar/{jenjangs?}/{npsn?}'
*/
daftarForm.head = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: daftar.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

daftar.form = daftarForm

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftarRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:125
* @route '/bos/{tahun?}/pengajuan/daftar/{rincian?}/{jenjangs?}/{npsn?}/{nomor?}'
*/
export const daftarRincian = (args?: { tahun?: string | number, rincian?: string | number, jenjangs?: string | number, npsn?: string | number, nomor?: string | number } | [tahun: string | number, rincian: string | number, jenjangs: string | number, npsn: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: daftarRincian.url(args, options),
    method: 'get',
})

daftarRincian.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/pengajuan/daftar/{rincian?}/{jenjangs?}/{npsn?}/{nomor?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftarRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:125
* @route '/bos/{tahun?}/pengajuan/daftar/{rincian?}/{jenjangs?}/{npsn?}/{nomor?}'
*/
daftarRincian.url = (args?: { tahun?: string | number, rincian?: string | number, jenjangs?: string | number, npsn?: string | number, nomor?: string | number } | [tahun: string | number, rincian: string | number, jenjangs: string | number, npsn: string | number, nomor: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
            rincian: args[1],
            jenjangs: args[2],
            npsn: args[3],
            nomor: args[4],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
        "rincian",
        "jenjangs",
        "npsn",
        "nomor",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
        rincian: args?.rincian,
        jenjangs: args?.jenjangs,
        npsn: args?.npsn,
        nomor: args?.nomor,
    }

    return daftarRincian.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{rincian?}', parsedArgs.rincian?.toString() ?? '')
            .replace('{jenjangs?}', parsedArgs.jenjangs?.toString() ?? '')
            .replace('{npsn?}', parsedArgs.npsn?.toString() ?? '')
            .replace('{nomor?}', parsedArgs.nomor?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftarRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:125
* @route '/bos/{tahun?}/pengajuan/daftar/{rincian?}/{jenjangs?}/{npsn?}/{nomor?}'
*/
daftarRincian.get = (args?: { tahun?: string | number, rincian?: string | number, jenjangs?: string | number, npsn?: string | number, nomor?: string | number } | [tahun: string | number, rincian: string | number, jenjangs: string | number, npsn: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: daftarRincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftarRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:125
* @route '/bos/{tahun?}/pengajuan/daftar/{rincian?}/{jenjangs?}/{npsn?}/{nomor?}'
*/
daftarRincian.head = (args?: { tahun?: string | number, rincian?: string | number, jenjangs?: string | number, npsn?: string | number, nomor?: string | number } | [tahun: string | number, rincian: string | number, jenjangs: string | number, npsn: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: daftarRincian.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftarRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:125
* @route '/bos/{tahun?}/pengajuan/daftar/{rincian?}/{jenjangs?}/{npsn?}/{nomor?}'
*/
const daftarRincianForm = (args?: { tahun?: string | number, rincian?: string | number, jenjangs?: string | number, npsn?: string | number, nomor?: string | number } | [tahun: string | number, rincian: string | number, jenjangs: string | number, npsn: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: daftarRincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftarRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:125
* @route '/bos/{tahun?}/pengajuan/daftar/{rincian?}/{jenjangs?}/{npsn?}/{nomor?}'
*/
daftarRincianForm.get = (args?: { tahun?: string | number, rincian?: string | number, jenjangs?: string | number, npsn?: string | number, nomor?: string | number } | [tahun: string | number, rincian: string | number, jenjangs: string | number, npsn: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: daftarRincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::daftarRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:125
* @route '/bos/{tahun?}/pengajuan/daftar/{rincian?}/{jenjangs?}/{npsn?}/{nomor?}'
*/
daftarRincianForm.head = (args?: { tahun?: string | number, rincian?: string | number, jenjangs?: string | number, npsn?: string | number, nomor?: string | number } | [tahun: string | number, rincian: string | number, jenjangs: string | number, npsn: string | number, nomor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: daftarRincian.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

daftarRincian.form = daftarRincianForm

/**
* @see \App\Http\Controllers\Bos\PengajuanController::kirimRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:282
* @route '/kirim/rincian-pengajuan/{nomor}'
*/
export const kirimRincian = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: kirimRincian.url(args, options),
    method: 'patch',
})

kirimRincian.definition = {
    methods: ["patch"],
    url: '/kirim/rincian-pengajuan/{nomor}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Bos\PengajuanController::kirimRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:282
* @route '/kirim/rincian-pengajuan/{nomor}'
*/
kirimRincian.url = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return kirimRincian.definition.url
            .replace('{nomor}', parsedArgs.nomor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PengajuanController::kirimRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:282
* @route '/kirim/rincian-pengajuan/{nomor}'
*/
kirimRincian.patch = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: kirimRincian.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::kirimRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:282
* @route '/kirim/rincian-pengajuan/{nomor}'
*/
const kirimRincianForm = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: kirimRincian.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::kirimRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:282
* @route '/kirim/rincian-pengajuan/{nomor}'
*/
kirimRincianForm.patch = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: kirimRincian.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

kirimRincian.form = kirimRincianForm

/**
* @see \App\Http\Controllers\Bos\PengajuanController::batalKirim
* @see app/Http/Controllers/Bos/PengajuanController.php:340
* @route '/batal-kirim/rincian-pengajuan/{nomor}'
*/
export const batalKirim = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: batalKirim.url(args, options),
    method: 'patch',
})

batalKirim.definition = {
    methods: ["patch"],
    url: '/batal-kirim/rincian-pengajuan/{nomor}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Bos\PengajuanController::batalKirim
* @see app/Http/Controllers/Bos/PengajuanController.php:340
* @route '/batal-kirim/rincian-pengajuan/{nomor}'
*/
batalKirim.url = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return batalKirim.definition.url
            .replace('{nomor}', parsedArgs.nomor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PengajuanController::batalKirim
* @see app/Http/Controllers/Bos/PengajuanController.php:340
* @route '/batal-kirim/rincian-pengajuan/{nomor}'
*/
batalKirim.patch = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: batalKirim.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::batalKirim
* @see app/Http/Controllers/Bos/PengajuanController.php:340
* @route '/batal-kirim/rincian-pengajuan/{nomor}'
*/
const batalKirimForm = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: batalKirim.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::batalKirim
* @see app/Http/Controllers/Bos/PengajuanController.php:340
* @route '/batal-kirim/rincian-pengajuan/{nomor}'
*/
batalKirimForm.patch = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: batalKirim.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

batalKirim.form = batalKirimForm

/**
* @see \App\Http\Controllers\Bos\PengajuanController::downloadRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:381
* @route '/download/rincian-pengajuan/{pengajuan}'
*/
export const downloadRincian = (args: { pengajuan: string | { slug: string } } | [pengajuan: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadRincian.url(args, options),
    method: 'get',
})

downloadRincian.definition = {
    methods: ["get","head"],
    url: '/download/rincian-pengajuan/{pengajuan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\PengajuanController::downloadRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:381
* @route '/download/rincian-pengajuan/{pengajuan}'
*/
downloadRincian.url = (args: { pengajuan: string | { slug: string } } | [pengajuan: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengajuan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { pengajuan: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            pengajuan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pengajuan: typeof args.pengajuan === 'object'
        ? args.pengajuan.slug
        : args.pengajuan,
    }

    return downloadRincian.definition.url
            .replace('{pengajuan}', parsedArgs.pengajuan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PengajuanController::downloadRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:381
* @route '/download/rincian-pengajuan/{pengajuan}'
*/
downloadRincian.get = (args: { pengajuan: string | { slug: string } } | [pengajuan: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadRincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::downloadRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:381
* @route '/download/rincian-pengajuan/{pengajuan}'
*/
downloadRincian.head = (args: { pengajuan: string | { slug: string } } | [pengajuan: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadRincian.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::downloadRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:381
* @route '/download/rincian-pengajuan/{pengajuan}'
*/
const downloadRincianForm = (args: { pengajuan: string | { slug: string } } | [pengajuan: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadRincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::downloadRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:381
* @route '/download/rincian-pengajuan/{pengajuan}'
*/
downloadRincianForm.get = (args: { pengajuan: string | { slug: string } } | [pengajuan: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadRincian.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::downloadRincian
* @see app/Http/Controllers/Bos/PengajuanController.php:381
* @route '/download/rincian-pengajuan/{pengajuan}'
*/
downloadRincianForm.head = (args: { pengajuan: string | { slug: string } } | [pengajuan: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadRincian.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadRincian.form = downloadRincianForm

/**
* @see \App\Http\Controllers\Bos\PengajuanController::destroy
* @see app/Http/Controllers/Bos/PengajuanController.php:254
* @route '/pengajuan/destroy/{pengajuan}/{tahun}'
*/
export const destroy = (args: { pengajuan: string | { slug: string }, tahun: string | number } | [pengajuan: string | { slug: string }, tahun: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/pengajuan/destroy/{pengajuan}/{tahun}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Bos\PengajuanController::destroy
* @see app/Http/Controllers/Bos/PengajuanController.php:254
* @route '/pengajuan/destroy/{pengajuan}/{tahun}'
*/
destroy.url = (args: { pengajuan: string | { slug: string }, tahun: string | number } | [pengajuan: string | { slug: string }, tahun: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            pengajuan: args[0],
            tahun: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pengajuan: typeof args.pengajuan === 'object'
        ? args.pengajuan.slug
        : args.pengajuan,
        tahun: args.tahun,
    }

    return destroy.definition.url
            .replace('{pengajuan}', parsedArgs.pengajuan.toString())
            .replace('{tahun}', parsedArgs.tahun.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PengajuanController::destroy
* @see app/Http/Controllers/Bos/PengajuanController.php:254
* @route '/pengajuan/destroy/{pengajuan}/{tahun}'
*/
destroy.delete = (args: { pengajuan: string | { slug: string }, tahun: string | number } | [pengajuan: string | { slug: string }, tahun: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::destroy
* @see app/Http/Controllers/Bos/PengajuanController.php:254
* @route '/pengajuan/destroy/{pengajuan}/{tahun}'
*/
const destroyForm = (args: { pengajuan: string | { slug: string }, tahun: string | number } | [pengajuan: string | { slug: string }, tahun: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::destroy
* @see app/Http/Controllers/Bos/PengajuanController.php:254
* @route '/pengajuan/destroy/{pengajuan}/{tahun}'
*/
destroyForm.delete = (args: { pengajuan: string | { slug: string }, tahun: string | number } | [pengajuan: string | { slug: string }, tahun: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Bos\PengajuanController::newMethod
* @see app/Http/Controllers/Bos/PengajuanController.php:154
* @route '/bos/pengajuan/new'
*/
export const newMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: newMethod.url(options),
    method: 'post',
})

newMethod.definition = {
    methods: ["post"],
    url: '/bos/pengajuan/new',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Bos\PengajuanController::newMethod
* @see app/Http/Controllers/Bos/PengajuanController.php:154
* @route '/bos/pengajuan/new'
*/
newMethod.url = (options?: RouteQueryOptions) => {
    return newMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\PengajuanController::newMethod
* @see app/Http/Controllers/Bos/PengajuanController.php:154
* @route '/bos/pengajuan/new'
*/
newMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: newMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::newMethod
* @see app/Http/Controllers/Bos/PengajuanController.php:154
* @route '/bos/pengajuan/new'
*/
const newMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: newMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\PengajuanController::newMethod
* @see app/Http/Controllers/Bos/PengajuanController.php:154
* @route '/bos/pengajuan/new'
*/
newMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: newMethod.url(options),
    method: 'post',
})

newMethod.form = newMethodForm

const pengajuan = {
    index: Object.assign(index, index),
    rincian: Object.assign(rincian, rincian),
    daftar: Object.assign(daftar, daftar),
    daftarRincian: Object.assign(daftarRincian, daftarRincian),
    kirimRincian: Object.assign(kirimRincian, kirimRincian),
    batalKirim: Object.assign(batalKirim, batalKirim),
    downloadRincian: Object.assign(downloadRincian, downloadRincian),
    destroy: Object.assign(destroy, destroy),
    new: Object.assign(newMethod, newMethod),
}

export default pengajuan