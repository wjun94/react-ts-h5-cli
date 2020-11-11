const initState = {
    value: '默认值'
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'send_type':
            return Object.assign({}, state, action)
        default:
            return state
    }
}

const obj = {
    reducer
}

export default obj