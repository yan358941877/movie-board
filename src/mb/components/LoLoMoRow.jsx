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

    getScroll(){
        let transform = this.scrollable.style.transform
        if(!transform.startsWith('translate')){
            transform = 'translateX(0px)'
        }
        const translateX = parseInt(transform.match(/\(([-\d]+)/)[1], 0)
        return Math.abs(translateX)
    }
    setScroll(scroll){
        this.scrollable.style.transform = `translate(${-scroll}px)`
    }
    scrollLeft(){
        let scroll = this.getScroll()
        scroll -= this.scrollable.offsetWidth - 40;
        if(scroll < 0){
            scroll = 0
        }
        this.setScroll(scroll)
    }
    scrollRight(){
        let scroll = this.getScroll()
        scroll += this.scrollable.offsetWidth -40
        const max = this.scrollable.scrollWidth - this.scrollable.offsetWidth
        if(scroll > max){
            scroll = max
        }
        this.setScroll(scroll)
    }
    componentDidMount(){
        //console.log(this.getScroll())
        //this.setScroll(1540)
        
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
                    <a className="left scroll-button" role="button" onClick={this.scrollLeft.bind(this)}>
                        <i className="octicon icon-chevron-left"/>
                    </a>
                    <div ref={(div)=>{this.scrollable = div}} className='scrollable'>
                        {children.length > 0? children[0]:null}
                    </div>
                    <a className="right scroll-button" role="button" onClick={this.scrollRight.bind(this)}>
                        <i className="octicon icon-chevron-right"/>
                    </a>
                </div>
            </div>
        )
    }
}
export default LoLoMoRow