import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import '../res/mo-detail-row.less'

const TYPES = {
    casts: '演员',
    directors: '导演',
    genres: '类型'
};

class MoDetailRow extends React.Component{
    static propTypes = {
        data: PropTypes.objectOf(Immutable.List).isRequired,
        type: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps){
        return nextProps.type !==this.props.type || nextProps.data.equals(this.props.data)
    }

    render(){
        const {data, type} = this.props
        let items = null
        if(type === 'genres'){
            items = data.map(genres=><li key={genres}>{genres}</li>)
        }else {
            items = data.map(people=><li key={people.get('id')}>{people.get('name')}</li>)
        }

        return (
            <dl className={`mb-mo-detail-row ${type}`}>
                <dt>{TYPES[type]}</dt>
                <dd>
                    <ul>
                        {items}
                    </ul>
                </dd>
            </dl>
        )
    }
}

export default MoDetailRow