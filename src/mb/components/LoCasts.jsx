import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import '../res/lo-casts.less'
class LoCasts extends React.Component {

    static propTypes = {
        casts: PropTypes.objectOf(Immutable.List)
    }


    static defaultProps = {
        casts: Immutable.fromJS([])
    }

    render() {
        const { casts } = this.props
        const items = casts.map(cast => (
            <li key={cast.get('id')}>
                <a>
                    <div className="thumbnail" style={{ backgroundImage: `url(${cast.getIn(['avatars', 'large'])})` }} />
                    <div className="title">
                        {cast.get('name')}
                    </div>
                </a>
            </li>
        )).toArray()

        return (
            <ul className="mb-lo-casts mb-lo-common">
                {items}
            </ul>
        )
    }
}

export default LoCasts