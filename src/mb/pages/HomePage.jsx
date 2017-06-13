import React from 'react'
import { connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import modelActionCreators from '../actions/model-action-creators'

import LoLoMoContainer from '../containers/LoLoMoContainer'

class HomePage extends React.Component{
    static propTypes = {
        models: PropTypes.objectOf(Immutable.Map).isRequired,
        actions: PropTypes.shape({
            loadComingSoon: PropTypes.func.isRequired,
            loadInTheaters: PropTypes.func.isRequired,
            loadTop20: PropTypes.func.isRequired
        }).isRequired
    }
    // 请求comingsoon、intheaters、top20数据
    componentDidMount(){
        this.props.actions.loadComingSoon()
        this.props.actions.loadInTheaters()
        this.props.actions.loadTop20()
    }
    render(){
        const models = Immutable.Map({
            inTheaters: this.props.models.get('inTheaters'),
            comingSoon: this.props.models.get('comingSoon'),
            top20: this.props.models.get('top20')

        })
        return (
            <div className="mb-page mb-home-page">
                <LoLoMoContainer models={models}/>
            </div>    
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