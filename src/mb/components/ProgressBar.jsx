import cs from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import '../res/progress-bar.less'

class ProgressBar extends React.Component{
    static propTypes = {
        isLoading: PropTypes.bool
    }
    static defaultProps = {
        isLoading: false
    }
    constructor(props){
        super(props)
        this.state = {
            percentage: 0
        }
    }

    componentWillUpdate(nextProps){
        if(nextProps.isLoading !== this.props.isLoading){
            this.clearTimer()
            // 如果isloading从false变为true，说明刚开始加载过程
            if(nextProps.isLoading){
                this.setState({
                    percentage: 15
                })
                this.timer = setInterval(()=>{
                    this.setState((currentState)=>{
                        let percentage = currentState.percentage
                        if(percentage >=98){
                            percentage = 98
                        }else if(percentage >= 90){
                            percentage +=1
                        }else {
                            percentage +=15
                        }
                        return {percentage}
                    })
                },500)
            }else {
                this.setState({
                    percentage: 100
                })
            }
        }
    }
    componentWillMount(){
        this.clearTimer()
    }
    clearTimer(){
        if(this.timer){
            clearInterval(this.timer)
            this.timer = null
        }
    }
    render(){
        return (
            <div className={cs("mb-progress-bar", {loading: this.props.isLoading})}>
                <div className="percentage" style={{width: `${this.state.percentage}%`}} />
            </div>
        )
    }
}

export default ProgressBar