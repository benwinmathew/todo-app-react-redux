import React, { useState } from 'react';
import { useDispatch } from "react-redux";
const Input = () => {
    const dispatch = useDispatch()
    const [item, setItem] = useState({
        content: ""
    });

    function handleChange(event) {

        setItem({
            content: event.target.value
        })

    }

    function handleNote() {
        dispatch({ type: "ADD_ITEM", payload: item })
        setItem({ content: "" })
    }

    return <div>
        <input name="content" value={item.content} onChange={handleChange} />
        <button onClick={handleNote}>Add !</button>
    </div>;
};

export default Input;

