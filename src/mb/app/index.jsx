import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import modelActionCreators from '../actions/model-action-creators'

import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import ProgressBar from '../components/ProgressBar'

class App extends React.Component{
    static propTypes = {
        // isRequired表明该prop不能缺少
        // objectOf 表明status是Immutable.Map类型
        status: PropTypes.objectOf(Immutable.Map).isRequired,
        children: PropTypes.element,
        // shape: 特定形状参数的对象
        action: PropTypes.shape({
            search: PropTypes.func.isRequired
        }).isRequired
    }
    static defaultProps = {
        children: []
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         isLoading: false
    //     }
    // }
    // componentDidMount(){
    //     this.setState({
    //         isLoading: true
    //     })
    // }
    render(){
        return (
            <div className="mb-app">
                <AppHeader />
                <ProgressBar isLoading={this.props.status.get('isLoading')}/>
                <h1>Hello World</h1>
                {this.props.children}
                <AppFooter />
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