import { React, useState } from "react";

function Input({addToList}) {
      const [inputValue, setInputValue] = useState("");
      function getValue(value) {
            setInputValue(value);
            console.log(inputValue);
      }

      return (
            <div>
                  <input
                        type="text"
                        onChange={(event) => getValue(event.target.value)}
                        placeholder="Enter your task!"
                  />
                  <button onClick={() => addToList(inputValue)}>ADD TO LIST</button>
            </div>
      );
}

export default Input;
