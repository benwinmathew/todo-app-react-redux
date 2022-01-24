import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector } from "react-redux";


function App() {
 
  const [item, setItem] = useState('all')
  const items = useSelector(state => state['addReducer'])
  function ListItems() {

    return (
      item === 'completed' ?
        items.completeid.map((newItem, index) => <List
          key={index}
          id={index}
          name="complete"
          content={newItem.content}

        />)
        : item === 'incompleted' ?

          items.inCompleteid.map((newItem, index) => <List
            key={index}
            id={index}
            name="In Complete"
            content={newItem.content}

          />)
          : item === 'deleted' ?
            items.deleteContent.map((newItem, index) => <List
              key={index}
              id={index}
              name="delete"
              content={newItem.content}

            />)
            :
            items.content.map((newItem, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  name="all"
                  content={newItem.content}

                />
              )
            }))

  }
  return (

    <div className="container">
      <h1 className="heading">To-Do List</h1>
     

      <Input /> <br />
      <div className="heading">
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label"><b>Filter</b></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        >
          <FormControlLabel value="completed" control={<Radio />} label="Completed" />
          <FormControlLabel value="incompleted" control={<Radio />} label="In Completed" />
          <FormControlLabel value="deleted" control={<Radio />} label="Deleted" />
          <FormControlLabel value="all" control={<Radio />} label="ALL" />
        </RadioGroup>
      </FormControl>
      </div>
      {console.log("items", items)}
      <ListItems />


    </div>

  )
}

export default App;
