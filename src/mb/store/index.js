import {createStore} from 'redux'

import reducers from '../reducers'

//const enhancer = process.env.NODE_ENV === 'production' ? require('./enhancer').default : require('./enhancer.dev').default
const enhancer = require('./enhancer.dev').default
export function configStore(initialState){
    return enhancer(createStore)(
        reducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    )
}