
import { ADD_ITEM, DEL_ITEM,  COMPLETE_ITEM } from './addItemTypes'

const intialState = {
    content: [],
    completeid: [],
    deleteContent: [],
    inCompleteid: []
}


const addReducer = (state = intialState, action) => {

    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state, content: [...state.content, action.payload],
                inCompleteid: [...state.inCompleteid, action.payload]
            }
        case DEL_ITEM:

            return {
                ...state,
                content: state.content.filter((newItem, index) => newItem.content !== action.payload),
                deleteContent: [...state.deleteContent, state.content.filter((newItem, index) => newItem.content === action.payload)[0]],
                completeid: state.completeid.filter((newItem, index) => newItem.content !== action.payload),
                inCompleteid: state.inCompleteid.filter((newItem, index) => newItem.content !== action.payload)
            }
        case COMPLETE_ITEM:
            
            return {
                ...state,
                completeid: [...state.completeid, state.content.filter((newItem, index) => newItem.content === action.payload)[0]],
                inCompleteid: state.inCompleteid.filter((e, i) => e.content !== action.payload)
            }


        default: return {
            ...state
        }
    }

}

export default addReducer;