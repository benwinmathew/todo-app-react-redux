import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const List = (props) => {
  const dispatch = useDispatch()

  return <div>
    <ul className="list-container">
      <div>
        <li>
          {(props.name !== "delete") && (
            <h6>

              <Checkbox {...label} size="small"
                checked={localStorage.getItem(props.content) || props.name === "complete" ? true : false}
                disabled={localStorage.getItem(props.content) || props.name === "complete" ? true : false}
                onClick={() => {
                  
                  dispatch({ type: "COMPLETE_ITEM", payload: props.content })
                  localStorage.setItem(props.content, props.content);
                }} /> Completed</h6>)}
          {""}{props.content}

          {props.name !== "delete" && <p><button onClick={() => { dispatch({ type: "DEL_ITEM", payload: props.content }) }}>Delete</button></p>}
        </li>
      </div>
    </ul>
    <br/>
  </div>;
};

export default List;
