import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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
* @see \App\Http\Controllers\DataPendukung\ImportDataController::subprogram
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
export const subprogram = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subprogram.url(options),
    method: 'post',
})

subprogram.definition = {
    methods: ["post"],
    url: '/import-data/sub-program',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::subprogram
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
subprogram.url = (options?: RouteQueryOptions) => {
    return subprogram.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::subprogram
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
subprogram.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subprogram.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::subprogram
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
const subprogramForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: subprogram.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::subprogram
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:47
* @route '/import-data/sub-program'
*/
subprogramForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: subprogram.url(options),
    method: 'post',
})

subprogram.form = subprogramForm

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatan
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
export const kegiatan = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: kegiatan.url(options),
    method: 'post',
})

kegiatan.definition = {
    methods: ["post"],
    url: '/import-data/kegiatan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatan
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
kegiatan.url = (options?: RouteQueryOptions) => {
    return kegiatan.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatan
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
kegiatan.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: kegiatan.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatan
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
const kegiatanForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: kegiatan.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::kegiatan
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:69
* @route '/import-data/kegiatan'
*/
kegiatanForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: kegiatan.url(options),
    method: 'post',
})

kegiatan.form = kegiatanForm

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincianbelanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
export const rincianbelanja = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rincianbelanja.url(options),
    method: 'post',
})

rincianbelanja.definition = {
    methods: ["post"],
    url: '/import-data/rincian-belanja',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincianbelanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
rincianbelanja.url = (options?: RouteQueryOptions) => {
    return rincianbelanja.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincianbelanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
rincianbelanja.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rincianbelanja.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincianbelanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
const rincianbelanjaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rincianbelanja.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DataPendukung\ImportDataController::rincianbelanja
* @see app/Http/Controllers/DataPendukung/ImportDataController.php:90
* @route '/import-data/rincian-belanja'
*/
rincianbelanjaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rincianbelanja.url(options),
    method: 'post',
})

rincianbelanja.form = rincianbelanjaForm

const importData = {
    sekolah: Object.assign(sekolah, sekolah),
    program: Object.assign(program, program),
    subprogram: Object.assign(subprogram, subprogram),
    kegiatan: Object.assign(kegiatan, kegiatan),
    rincianbelanja: Object.assign(rincianbelanja, rincianbelanja),
}

export default importData