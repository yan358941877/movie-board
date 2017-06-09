import React from 'react'
import { browserHistory, Router, IndexRoute, Route } from 'react-router'

import App from '../app'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'

class RouterMap extends React.Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={HomePage} />
                    <Route path='/search' component={SearchPage} />
                </Route>
            </Router>
        )
    }
}

export default RouterMap