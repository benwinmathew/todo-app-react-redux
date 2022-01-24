import { ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM } from './contentTypes';

export const addItem = (item) => (dispatch) => {
    return dispatch({
        type: ADD_ITEM,
        payload: item
    })
}

export const deleteItem = (id) =>(dispatch)=> {
    return dispatch({
        type: DELETE_ITEM,
        payload: id
    })
}

export const completeItem = (id) =>(dispatch)=> {
    return dispatch({
        type: COMPLETE_ITEM,
        payload: id
    })
}