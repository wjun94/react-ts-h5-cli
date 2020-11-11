import {
    ADD
} from './action-type'

export const edit = (name: string) => {
    return {
        type: ADD,
        name
    }
}