import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import MoJumbotron from '../components/MoJumbotron'


const mapStateToProps = (state) => {
    return {
        subject: state.getIn(['lolomo', 'selectedSubject'])
    }
}
export default connect(mapStateToProps)(MoJumbotron)

