import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import {deleteItem,completeItem} from '../redux/content/contentActions';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const List = (props) => {
  const dispatch = useDispatch()

  return <div key={props.id}>
    <ul className="list-container">
      <div>
        <li>
          {(props.name !== "delete") && (
            <h6>

              <Checkbox {...label} size="small"
                checked={props.isCompleted}
                disabled={props.isCompleted}
                onClick={() => {

                  dispatch(completeItem(props.id))

                }} /> Completed</h6>)}
          {""}{props.content}

          {props.name !== "delete" && <p><button onClick={() => { dispatch(deleteItem(props.id)) }}>Delete</button></p>}
        </li>
      </div>
    </ul>
    <br />
  </div>;
};

export default List;