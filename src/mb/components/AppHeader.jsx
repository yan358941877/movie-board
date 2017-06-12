import {browserHistory} from 'react-router'
import cn from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import '../res/AppHeader.less'

class AppHeader extends React.PureComponent{
    static propTypes = {
        navbars: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ])
    }

    static defaultProps = {
        navbars: []
    }

    constructor(props){
        super(props)
        this.state = {
            translucent: false
        }
    }

    componentDidMount(){
        // 当滚动了一定距离时，修改translucent的值为true
        $(document).on('scroll',()=>{
            const translucent = document.body.scrollTop > 5
            if(this.state.translucent !== translucent){
                this.setState({
                    translucent
                })
            }
        })
    }
    
    // cn的作用是：当translucent的值为true时，header则会有一个translucent的classname，否则不存在该classname
    render(){
        return (
            <header className={cn('mb-app-header', { translucent: this.state.translucent})}>
                <div className="mb-logo" onClick={()=>browserHistory.push('/')}/>
                <div className="navbars">
                </div>
            </header>
        )
    }
}

export default AppHeader