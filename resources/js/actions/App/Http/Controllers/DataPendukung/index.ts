import SekolahController from './SekolahController'
import SumberDanaController from './SumberDanaController'
import JenisBelanjaController from './JenisBelanjaController'
import RincianBelanjaController from './RincianBelanjaController'
import ProgramController from './ProgramController'
import SubProgramController from './SubProgramController'
import KegiatanController from './KegiatanController'
import PenerimaController from './PenerimaController'
import ImportDataController from './ImportDataController'

const DataPendukung = {
    SekolahController: Object.assign(SekolahController, SekolahController),
    SumberDanaController: Object.assign(SumberDanaController, SumberDanaController),
    JenisBelanjaController: Object.assign(JenisBelanjaController, JenisBelanjaController),
    RincianBelanjaController: Object.assign(RincianBelanjaController, RincianBelanjaController),
    ProgramController: Object.assign(ProgramController, ProgramController),
    SubProgramController: Object.assign(SubProgramController, SubProgramController),
    KegiatanController: Object.assign(KegiatanController, KegiatanController),
    PenerimaController: Object.assign(PenerimaController, PenerimaController),
    ImportDataController: Object.assign(ImportDataController, ImportDataController),
}

export default DataPendukung