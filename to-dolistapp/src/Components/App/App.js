import "./App.css";
import Input from "../Input/index";
import React from "react";
import { useState} from "react";

//import an input - DONE
//import a task behaviour?
//import a state from react

function App() {
      const [list, updateList] = useState("");
      function addToList(value) {
            updateList(value)
            console.log(list)
      }
      //const []
      //const []
      //function event listener
      //console.log the input

      //function for when input submitted

      //function for delete

      //
      return <div>
            <Input addToList={addToList}/>
            <p>{list}</p>
      </div>
}

export default App;
