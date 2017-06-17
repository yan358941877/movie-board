import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import RatingStars from '../components/RatingStars'

class Comment extends React.Component{
    static propTypes = {
        comment: PropTypes.objectOf(Immutable.Map).isRequired
    }

    static defaultProps = {
        comment: null
    }

    render(){
        const {comment} = this.props
        const content = comment.get('content')
        const author = comment.getIn(['author', 'name'])
        const stars = comment.getIn(['rating', 'value'])*10

        return (
            <div className="mb-lo-comment">
                <div className="content">{content}</div>
                <div className="info">
                    <div className="author">{author}</div>
                    <RatingStars stars={stars}/>
                </div>
            </div>
        )
    }
}

export default Comment