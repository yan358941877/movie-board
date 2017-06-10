import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import RouterMap from './router/RouterMap'
import { createAction, handleActions } from 'redux-actions'
import Immutable from 'Immutable'
render(
    
        <RouterMap />
    ,
    document.getElementById('mbMountPoint')
);

console.dir(createAction('LOAD_COMPLETE').toString)

const initialState = Immutable.fromJS({
    isLoading: false
})

function testfn (){
    console.log('aaa')
}
var test = handleActions({
    [createAction('LOAD_COMPLETE', testfn)](state,{payload: inTheaters}){
        
    }
}, initialState)
console.dir(test)