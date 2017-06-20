import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import RouterMap from './router/RouterMap'
import { configStore } from './store'

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

import movieApi from '../db/api/movie'
import actionCreators from './actions/status-action-creators'



// 验证movieApi中的方法
// var response = movieApi.comingSoon
// response().then(function (result){
//   console.log(result.toJS())
// })

// 验证 createAction 的作用 (createAction 带两个参数一个type，另一个func)
// import actionCreators from './actions/model-action-creators'
// actionCreators.loadComingSoon().payload.then(
//     function (result) {
//         console.log(result.toJS())
//     }
// )

// 验证 createAction 的作用 (createAction 带一个参数type)
// import actionCreators from './actions/status-action-creators'
// console.dir(actionCreators.loadComplete())

//console.log(movieApi.comingSoon())
// console.dir(createAction('LOAD_COMPLETE', movieApi.subject)())


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
// console.dir({
//     [actionCreators.load](state){
//         return state.set('isLoading', true)
//     },
//     [actionCreators.loadComplete](state){
//         return state.set('isLoding', false)
//     }
// })

/*

{
    [actionCreators.load](state){
        return state.set('isLoading', true)
    },
    [actionCreators.loadComplete](state){
        return state.set('isLoding', false)
    }
}
等价于
<===>
{
    LOAD: function(state){
        return state.set('isLoading', true)
    },
    LOAD_COMPLETE: function(state){
        return state.set('isLoading', false)
    }
} 

[actionCreators.load]会调用actionCreators.load的toString方法并将其结果作为函数名，而调用actionCreators.load.toString()的方法会将action.type返回
*/
// console.console(actionCreators.load.toString())  ==> 输出 “LOAD"