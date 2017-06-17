import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import Comment from '../components/Comment'

import '../res/lo-comments.less'

class LoComments extends React.Component{
    static propTypes = {
        comments: PropTypes.objectOf(Immutable.List)
    }

    static defaultProps = {
        comments: Immutable.fromJS([])
    }

    render(){
        const {comments} = this.props
        const items = comments.map(comment=>(
            <li key={comment.get('id')}>
                <Comment comment={comment} />
            </li>
        )).toArray()

        return (
            <ul className='mb-lo-comments'>
                {items}
            </ul>
        )
    }
}

export default LoComments