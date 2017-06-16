import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

 class MoJumbotron extends React.Component {
     static propTypes = {
         subject: PropTypes.objectOf(Immutable.Map)
     }

     static defaultProps = {
         subject: null
     }

     render(){
         return(
             <div>'电影详细信息'</div>
         )
     }
 }

 export default MoJumbotron