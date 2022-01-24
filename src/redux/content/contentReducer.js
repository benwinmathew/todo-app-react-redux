import { ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM } from './contentTypes'

const intialState = {
    content: []
}


const contentReducer = (state = intialState, { type, payload }) => {

    switch (type) {
        case ADD_ITEM:
            return {
                ...state, content: [...state.content, payload],
            }
        case DELETE_ITEM:
            return {
                ...state,
                content: [...state.content, state.content.map(newItem => { if (newItem !== undefined) if (newItem.id === payload) newItem.isDeleted = true })[0]]
            }
        case COMPLETE_ITEM:
            return {
                ...state,
                content: [...state.content, state.content.map(newItem => { if (newItem !== undefined) if (newItem.id === payload) newItem.isCompleted = true })[0]]
            }
        default: return {
            ...state
        }
    }
}

export default contentReducer;