import { combineReducers } from 'redux'

//criando um alias
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer} from 'react-redux-toastr'

import userReducer from '../components/user/UserReducer'

const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer