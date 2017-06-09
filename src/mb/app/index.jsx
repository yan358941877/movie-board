import React from 'react'

class App extends React.Component{
    render(){
        return (
            <div id='app'>
                <h1>Hello World</h1>
                {this.props.children}
            </div>
        )
    }
}

export default App