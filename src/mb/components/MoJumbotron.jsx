import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import MoSlides from '../components/MoSlides'
import Tabs from '../components/Tabs'
import Tab from '../components/Tab'
import MoGeneral from '../components/MoGeneral'
import LoCasts from '../components/LoCasts'
import LoTrailers from '../components/LoTrailers'
import '../res/mo-jumbotron.less'

 class MoJumbotron extends React.Component {
     static propTypes = {
         subject: PropTypes.objectOf(Immutable.Map)
     }

     static defaultProps = {
         subject: null
     }

     shouldComponentUpdate(nextProps){
         return (nextProps.subject === null&& this.props.subject!==null)||  
            !nextProps.subject.equals(this.props.subject)
     }
     render(){
         const {subject} = this.props
         if(subject === null){
             return null
         }
         console.log(subject.toJS())
         const {id, title} = subject.toJS()
         return(
             <div className="mb-mo-jumbotron" data-subject-id={id}>
                 <div className="jumbotron-content">
                    <h1 className="subject-title">
                        <span className="title">{title}</span>
                    </h1>
                    <Tabs>
                        <Tab id="general" title="总览">
                            <MoGeneral subject={subject} />  
                        </Tab>
                        <Tab id="casts" title="演员">
                            <LoCasts casts={subject.get('casts')}/>
                        </Tab>
                        <Tab id="trailers" title="预告片">
                            <LoTrailers trailers={subject.get('trailers')}/>
                        </Tab>
                        <Tab id="comments" title="评论">

                        </Tab>
                    </Tabs>
                 </div>
                 <MoSlides slides={subject.get('trailers')&&subject.get('trailers').size ? subject.get('trailers'): subject.get('photo')}/>
             </div>
         )
     }
 }

 export default MoJumbotron