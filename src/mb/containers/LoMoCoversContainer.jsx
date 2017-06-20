// 这是一行图片的container

import {connect} from 'react-redux'
import React from 'react'
import LoMoCovers from '../components/LoMoCovers'

import actionCreators from '../actions/lolomo-action-creators'

const mapStateToProps = (state)=>{
    return {
        selectedSubjectId: state.getIn(['lolomo','selectedSubject','id'])
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        actions: {
            selectSubject(subject){
                // actionCreators.selectSubject将会生成一个action，action.type = "SELECT_SUBJECT", action.payload = {subject, modelKey: ownProps.modelKey}
                dispatch(actionCreators.selectSubject({subject, modelKey: ownProps.modelKey}))
                if(subject){
                    dispatch(actionCreators.loadSubject(subject.get('id')))
                }
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoMoCovers)