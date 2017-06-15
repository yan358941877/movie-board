import cs from 'classnames'
import Immutable from 'immutable'
import React from 'react'
import PropTypes from 'prop-types'
import MoCover from '../components/MoCover'

/** 
 * 代表处于同一行的一组图片封面
 */
import '../res/lomo-covers.less'
class LoMoCovers extends React.Component {
    static propTypes = {
        actions: PropTypes.shape({
            selectSubject: PropTypes.func.isRequired
        }).isRequired,
        hasSelection: PropTypes.bool,
        selectedSubjectId: PropTypes.string,
        subjects: PropTypes.objectOf(Immutable.List).isRequired
    }

    static defaultProps = {
        hasSelection: false,
        selectedSubjectId: null
    }

    shouldComponentUpdate(nextProps) {
        let shouldUpdate = false
        if (nextProps.hasSelection !== this.props.hasSelection) {
            shouldUpdate = true
        } else if (nextProps.selectedSubjectId !== this.props.selectedSubjectId) {
            shouldUpdate = false
        }
        if (nextProps.subjects !== this.props.subject) {
            shouldUpdate = true
        }
        return shouldUpdate
    }

    render() {
        const { actions, selectedSubjectId, subjects } = this.props
        const items = subjects.map(subject => {
            return (
                <li
                    key={subject.get('id')}
                    className={cs('mb-lomo-covers-cell', { selected: selectedSubjectId === subject.get('id') })}
                    onClick={(event) => {
                        if (selectedSubjectId === subject.get('id')) {
                            actions.selectSubject(null)
                        } else {
                            actions.selectSubject(subject)
                            const parent = event.currentTarget.offsetParent
                            setTimeout(() => {
                                $(document.body).animate({
                                    scrollTop: parent.offsetTop + parent.offsetParent.offsetTop - $('.mb-app-header').height() - 8
                                }, 250);
                            }, 400);
                        }
                    }}
                >
                    <MoCover subject={subject} />
                </li>
            )
        }).toArray()

        return (
            <ul className="mb-lomo-covers">
                {items}
            </ul>
        )
    }
}

export default LoMoCovers