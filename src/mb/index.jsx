import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import RouterMap from './router/RouterMap'
import { configStore} from './store'

import { createAction, handleActions } from 'redux-actions'
import Immutable from 'Immutable'

import './res/index.less'

const store = configStore()

render(
    <Provider store = {store}>
        <RouterMap />
    </Provider>
    ,
    document.getElementById('mbMountPoint')
);

//import movieApi from '../db/api/movie'

//console.log(movieApi.comingSoon())
// console.dir(createAction('LOAD_COMPLETE', movieApi.subject)())

// import actionCreators from './actions/status-action-creators'
// const initialState = Immutable.fromJS({
//     isLoading: false
// })

// const test = handleActions({
//     [actionCreators.load](state){
//         return state.set('isLoading', true)
//     },
//     [actionCreators.loadComplete](state){
//         return state.set('isLoding', false)
//     }
// }, initialState)
// console.dir()