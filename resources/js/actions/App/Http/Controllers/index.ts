import Bos from './Bos'
import FetchDataController from './FetchDataController'
import DataPendukung from './DataPendukung'
import UsersController from './UsersController'
import Settings from './Settings'

const Controllers = {
    Bos: Object.assign(Bos, Bos),
    FetchDataController: Object.assign(FetchDataController, FetchDataController),
    DataPendukung: Object.assign(DataPendukung, DataPendukung),
    UsersController: Object.assign(UsersController, UsersController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers