import actionCreators from '../actions/status-action-creators'

const loadingActions = []

export default store => next => action =>{
    if(action.payload instanceof Promise){
        if(action.type === 'LOAD_SUBJECT'){
            loadingActions.splice(0, loadingActions.length)
        }
        loadingActions.push(action.type)
        if(!store.getState().getIn(['status','isLoading'])){
            store.dispatch(actionCreators.load())
        }
    }

    else {
        const index = loadingActions.indexOf(action.type)
        if(index !== -1){
            loadingActions.splice(index, 1)
            if(loadingActions.length === 0 && store.getState().getIn(['status', 'isLoading'])){
                store.dispatch(actionCreators.loadComplete())
            }
        }
    }
    next(action)
}


// 每一个action被传入到dispatch后，都会先经过该中间件
// loadingActions数组中只会存放LOAD_SUBJECT事件
/*
如果这个action的payload是一个propmise类型，并且action.type为'Load_SUBJECT',则将loadingActions数组清空，将'LOAD_SUBJECT'放入该数组中
如果现在state.status.isLoading为false，则生成一个action。调用dispatch方法，使得state.status.isLoading为true
*/


/*
比如，调用 lolomo-action-creator中的loadSubject，会先在sessionStorage中查找数据，如果不存在，就会向服务器请求数据，这对应着一个Promise，并且该Promise会作为action的payload，当该action经过这个中间件的时候，会进入if部分，然后该action会进入到redux-promise，在redux-promise中，指明了会在promise的成功回调函数中重新生成一个action，其payload会是Promise的结果，type值不变，然后重新调用dispatch，去处理这个新生成的action，这时又会进入到当前中间件，但这次会进入else部分进行处理。

*/