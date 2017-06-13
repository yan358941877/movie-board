import React from 'react'
import { connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import modelActionCreators from '../actions/model-action-creators'

class HomePage extends React.Component{
    static propTypes = {
        models: PropTypes.objectOf(Immutable.Map).isRequired,
        actions: PropTypes.shape({
            loadComingSoon: PropTypes.func.isRequired,
            loadInTheaters: PropTypes.func.isRequired,
            loadTop20: PropTypes.func.isRequired
        }).isRequired
    }

    componentDidMount(){
        debugger
        this.props.actions.loadComingSoon()
        this.props.actions.loadInTheaters()
        this.props.actions.loadTop20()
    }
    render(){
        
        return (
            <h2>HomePage</h2>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        models: state.get('models')
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        actions: bindActionCreators(modelActionCreators, dispatch)
    }
}

HomePage = connect(mapStateToProps,mapDispatchToProps)(HomePage)
export default HomePage