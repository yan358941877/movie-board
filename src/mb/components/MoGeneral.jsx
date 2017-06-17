import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import Rating from '../components/Rating'
import MoDetailRow from '../components/MoDetailRow'

import '../res/mo-general.less'

class MoGeneral extends React.Component{
    static propTypes = {
        subject: PropTypes.objectOf(Immutable.Map).isRequired
    }
    render(){
        const {subject} = this.props
        const year = subject.get('year')
        const rating = subject.get('rating')
        const casts = subject.get('casts')
        const directors = subject.get('directors')
        const genres = subject.get('genres')
        const summary = subject.get('summary')

        return (
            <div className="mb-mo-general">
                <div className="general">
                    <div className="rating-and-year">
                        <Rating rating={rating}/>
                        <div className="year">{year}</div>
                    </div>
                    <div className="details">
                        <MoDetailRow type="casts" data={casts}/>
                        <MoDetailRow type="directors" data={directors}/>
                        <MoDetailRow type="genres" data={genres}/>
                    </div>
                    <div className="summary">
                        {summary}
                    </div>
                </div>
            </div>
        )
    }
}

export default MoGeneral