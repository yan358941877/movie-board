import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
// 这是一个电影的封面图片

class MoCover extends React.Component {
    static propTypes = {
        subject: PropTypes.objectOf(Immutable.Map).isRequired
    }

    shouldComponentUpdate(nextProps){
        return nextProps.subject.get('id') !== this.props.subject.get('id')
    }
    render() {
        const { subject } = this.props
        return (
            <div className="mb-mo-cover">
                <div className="cover-img" style={{backgroundImage: `url(${subject.getIn(['images','large'])})`}}/>
            </div>
        )
    }
}

export default MoCover