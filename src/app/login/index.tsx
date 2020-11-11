import React from 'react'

export default function Login(props: any) {
    function onSubmit() {
        // props.history
        console.log(props)
        props.history.push({ pathname: '/home', query: `id=1` })
    }
    return (
        <div>
            <button onClick={onSubmit}>登录</button>
        </div>
    )
}