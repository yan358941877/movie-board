import React from 'react'
import PropTypes from 'prop-types'

import '../res/rating-stars.less'
class RatingStars extends React.Component{
    static propTypes = {
        stars: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps){
        return nextProps.stars !== this.props.stars
    }

    render(){
        const {stars} = this.props
        const starElements = []
        for(let i=0;i<50;i+=10){
            if(stars-i>=10){
                starElements.push(<div className="star" key={i}></div>)
            }else if(stars - i===5){
                starElements.push(<div className="half star" key={i}><div className="inner-star" /></div>)
            }else {
                starElements.push(<div className="zero star" key={i}></div>)
            }
        }
        return (
            <div className="mb-rating-stars">
                {starElements}
            </div>
        )
    }
}

export default RatingStars