import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import RatingStars from '../Components/RatingStars'

import '../res/rating.less'
class Rating extends React.Component{
    static propTypes = {
        rating: PropTypes.objectOf(Immutable.Map).isRequired
    }
    shouldComponentUpdate(nextProps){
        return (nextProps.rating.get('average')!== this.props.rating.get('average'))
    }
    render(){
        const {rating} = this.props
        const stars = parseInt(rating.get('stars'), 0)
        const average = rating.get('average')
        return(
            <div className="mb-rating" data-stars={stars}>
                <div className="average">{average ? `${average}分`: '暂无'}</div>
                <RatingStars stars={stars}/>
            </div>
        )
    }
}

export default Rating