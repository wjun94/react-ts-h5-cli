import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component<{ sendAction: Function }, {}> {
    onTest = () => {
    }
    render() {
        return (
            <div>
                <p>详情页</p>
                <button onClick={this.onTest}>test</button>
            </div>
        )
    }
}


export default connect()(App)