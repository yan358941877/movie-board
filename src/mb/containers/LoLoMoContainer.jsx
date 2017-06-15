import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import React from 'react'
import PropTypes from 'prop-types'

import lolomoActionCreators from '../actions/lolomo-action-creators'

import LoLoMoRow from '../components/LoLoMoRow'

import LoMoCoversContainer from './LoMoCoversContainer'

import '../res/lolomo.less'

const TITLES = {
    inTheaters: '正在上映的电影',
    comingSoon: '即将上映的电影',
    top20: '豆瓣电影Top20'
}
class LoLoMoContainer extends React.PureComponent {
    static propTypes = {
        actions: PropTypes.shape({
            selectSubject: PropTypes.func.isRequired
        }).isRequired,
        models: PropTypes.objectOf(Immutable.Map).isRequired,
        selectedModelKey: PropTypes.string
    }
    static defaultProps = {
        selectedModelKey: null
    }
    render() {
        const { actions: { selectSubject }, models, selectedModelKey } = this.props

        // rows中的每一个row对应的是：正在上映的电影、即将上映的电影、豆瓣电影Top20中的一行
        const rows = models.map((model, key) => {
            
            const title = TITLES[key]
            const hasSelection = selectedModelKey === key;

            let jawBone = null
            return (
                <LoLoMoRow
                    key={key}
                    hasSelection={hasSelection}
                    modelKey={key}
                    title={title}
                    jawBone={jawBone}
                >
                    <LoMoCoversContainer
                        subjects={model.get('subjects')}
                        hasSelection={hasSelection}
                        modelKey={key}
                    />
                </LoLoMoRow>
            )
        }).toArray()
        return (
            <div className="mb-lolomo">
                {rows}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedModelKey: state.getIn(['lolomo', 'selectedModelKey'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(lolomoActionCreators, dispatch)
    }
}

LoLoMoContainer = connect(mapStateToProps, mapDispatchToProps)(LoLoMoContainer)

export default LoLoMoContainer
