import {handleActions} from 'redux-actions'
import Immutable from 'immutable'

import actionCreators from '../actions/status-action-creators'

const initialState = Immutable.fromJS({
    isLoading: false
})

export default handleActions({
    [actionCreators.load](state){
        return state.set('isLoading', true)
    },
    [actionCreators.loadComplete](state){
        return state.set('isLoding', false)
    }
}, initialState)

/*
[actionCreators.load]  --> 会调用actionCreators.load的toString方法，由于actionCreators是由 ‘redux-actions’的createAction方法构建的，
而reateAction方法会重写actionCreators.load的toString方法，其toString方法会获取actionCreators.load的type

因此[actionCreators.load] 等价于 ['LOAD'] 

根据ES6语法
['LOAD'](state){
    return state.set('isLoading', true)
} 等价于
Load: function(state){
    return state.set('isLoading', true)
}

最后handleActions(....)返回的是一个reducer

function reducer(state, action){
    .....
}

*/