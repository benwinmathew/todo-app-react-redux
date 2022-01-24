import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {addItem} from '../redux/content/contentActions';
const Input = () => {
    const dispatch = useDispatch()
    const [item, setItem] = useState({
        isCompleted: false,
        isDeleted: false,
        id: Math.floor(Math.random() * 100),
        content: ""
    });

    function handleChange(event) {

        setItem({
            ...item,
            content: event.target.value
        })

    }

    function handleNote() {
        dispatch(addItem(item))
        setItem({  isCompleted: false,
            isDeleted: false,
            id: Math.floor(Math.random() * 100),
            content: ""})
    }

    return <div>
        <input name="content" value={item.content} onChange={handleChange} />
        <button onClick={handleNote}>Add !</button>
    </div>;
};

export default Input;