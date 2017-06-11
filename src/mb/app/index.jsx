import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import Immutable from 'immutable'

import modelActionCreators from '../actions/model-action-creators'
class App extends React.Component{
    static propTypes = {
        // isRequired表明该prop不能缺少
        // objectOf 表明status是Immutable.Map类型
        status: React.PropTypes.objectOf(Immutable.Map).isRequired,
        children: React.PropTypes.element,
        // shape: 特定形状参数的对象
        action: React.PropTypes.shape({
            search: React.PropTypes.func.isRequired
        }).isRequired
    }
    static defaultProps = {
        children: []
    }

    render(){
        return (
            <div className="mb-app">
                <AppHeader />
                <h1>Hello World</h1>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        status: state.get('status')
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actions: bindActionCreators(modelActionCreators, dispatch)
    }
}
App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App