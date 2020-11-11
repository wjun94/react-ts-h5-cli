import {
    ADD
} from './action-type'

const initState = {
    name: '默认值'
}

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, action)
        default:
            return state
    }
}

const obj = {
    homeReducer
}

export default obj