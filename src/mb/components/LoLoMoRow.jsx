import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

/*代表HomePage中的一行*/

class LoLoMoRow extends React.Component{
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.element,PropTypes.arrayOf(PropTypes.element)]),
        hasSelection: PropTypes.bool,
        jawBone: PropTypes.element,
        title: PropTypes.string.isRequired
    }

    static defaultProps = {
        children: null,
        hasSelection: false,
        jawBone: null
    }

    render(){
        const {title, hasSelection} = this.props
        const children = React.Children.toArray(this.props.children)
        return (
            <div className={cs('mb-lolomo-row', {'no-selection': !hasSelection}, {'has-selection': hasSelection})}>
                <div className="row-head">
                    <a className="title h3">{title}</a>
                </div>
                <div className="row-content">
                    <a className="left scroll-button" role="button" ><i className="octicon icon-chevron-left"/></a>
                    <div ref={(div)=>{this.scrollable = div}} className='scrollable'>
                        {children.length > 0? children[0]:null}
                    </div>
                    <a className="right scroll-button" role="button" ><i className="octicon icon-chevron-right"/></a>
                </div>
            </div>
        )
    }
}
export default LoLoMoRow