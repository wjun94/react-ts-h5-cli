import React from 'react'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import reducer from '@/store/home/reducer'
import { edit } from '@/store/home/action'
import mixin, { sayName } from '@/utils/mixin'

@mixin({ sayName })
class Home extends React.Component<RouteComponentProps | any, {}> {
    back = () => {
        this.props.history.goBack()
    }

    onSend = () => {
        (this as any).sayName()
        this.props.homeReducer({}, edit('redux传值'))
    }

    render() {
        return <div>
            <p>主页</p>
            <p>redux值：{this.props.name}</p>
            <button onClick={this.back}>返回</button>
            <button onClick={this.onSend}>传值</button>
        </div>
    }
}

export default connect((state: any) => ({
    name: state.homeReducer.name
}), {
    ...reducer
})(Home)