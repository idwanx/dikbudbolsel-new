import DashboardController from './DashboardController'
import TransaksiController from './TransaksiController'
import PengajuanController from './PengajuanController'
import RkasController from './RkasController'
import PaguController from './PaguController'

const Bos = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    TransaksiController: Object.assign(TransaksiController, TransaksiController),
    PengajuanController: Object.assign(PengajuanController, PengajuanController),
    RkasController: Object.assign(RkasController, RkasController),
    PaguController: Object.assign(PaguController, PaguController),
}

export default Bos