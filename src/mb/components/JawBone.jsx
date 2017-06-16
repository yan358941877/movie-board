import React from 'react'
import PropTypes from 'prop-types'

import '../res/jaw-bone.less'
/* 是电影详细信息的容器 container */
class JawBone extends React.PureComponent{
    static propTypes = {
        actions: PropTypes.shape({
            close: PropTypes.func
        }),
        children: PropTypes.element.isRequired
    }

    static defaultProps = {
        actions: {
            close: null
        }
    }
    handleClose(){
        if(this.props.actions.close){
            this.props.actions.close()
        }
    }
    render(){
        return(
            <div className="mb-jaw-bone">
                <div className="jaw-bone-container">
                    {this.props.children}
                </div>
                <a className="close-button" role="button"
                    onClick={this.handleClose.bind(this)} >
                    <i className="oction icon-x h2"/>
                </a>
            </div>
        )
    }
}

export default JawBone