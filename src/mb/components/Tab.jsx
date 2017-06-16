import React from 'react'
import PropTypes from 'prop-types'

class Tab extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.arrayOf(React.PropTypes.element)])
    }

    static defaultProps = {
        children: []
    }

    render(){
        const {id, children} = this.props
        return (
            <div id={id} className="mb-tab">
                {children}
            </div>
        )
    }
}

export default Tab