import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sekolah
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:18
* @route '/import-data/sekolah'
*/
export const sekolah = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sekolah.url(options),
    method: 'post',
})

sekolah.definition = {
    methods: ["post"],
    url: '/import-data/sekolah',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sekolah
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:18
* @route '/import-data/sekolah'
*/
sekolah.url = (options?: RouteQueryOptions) => {
    return sekolah.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sekolah
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:18
* @route '/import-data/sekolah'
*/
sekolah.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sekolah.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sekolah
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:18
* @route '/import-data/sekolah'
*/
const sekolahForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sekolah.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sekolah
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:18
* @route '/import-data/sekolah'
*/
sekolahForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sekolah.url(options),
    method: 'post',
})

sekolah.form = sekolahForm

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:37
* @route '/import-data/program'
*/
export const program = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: program.url(options),
    method: 'post',
})

program.definition = {
    methods: ["post"],
    url: '/import-data/program',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:37
* @route '/import-data/program'
*/
program.url = (options?: RouteQueryOptions) => {
    return program.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:37
* @route '/import-data/program'
*/
program.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: program.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:37
* @route '/import-data/program'
*/
const programForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: program.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:37
* @route '/import-data/program'
*/
programForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: program.url(options),
    method: 'post',
})

program.form = programForm

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sub_program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
export const sub_program = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sub_program.url(options),
    method: 'post',
})

sub_program.definition = {
    methods: ["post"],
    url: '/import-data/sub-program',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sub_program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
sub_program.url = (options?: RouteQueryOptions) => {
    return sub_program.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sub_program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
sub_program.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sub_program.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sub_program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
const sub_programForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sub_program.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::sub_program
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
sub_programForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sub_program.url(options),
    method: 'post',
})

sub_program.form = sub_programForm

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatans
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
export const kegiatans = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: kegiatans.url(options),
    method: 'post',
})

kegiatans.definition = {
    methods: ["post"],
    url: '/import-data/kegiatan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatans
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
kegiatans.url = (options?: RouteQueryOptions) => {
    return kegiatans.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatans
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
kegiatans.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: kegiatans.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatans
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
const kegiatansForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: kegiatans.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatans
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
kegiatansForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: kegiatans.url(options),
    method: 'post',
})

kegiatans.form = kegiatansForm

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincian_belanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
export const rincian_belanja = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rincian_belanja.url(options),
    method: 'post',
})

rincian_belanja.definition = {
    methods: ["post"],
    url: '/import-data/rincian-belanja',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincian_belanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
rincian_belanja.url = (options?: RouteQueryOptions) => {
    return rincian_belanja.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincian_belanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
rincian_belanja.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rincian_belanja.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincian_belanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
const rincian_belanjaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rincian_belanja.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincian_belanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
rincian_belanjaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rincian_belanja.url(options),
    method: 'post',
})

rincian_belanja.form = rincian_belanjaForm

const ImportDataController = { sekolah, program, sub_program, kegiatans, rincian_belanja }

export default ImportDataController