import { React, useState } from "react";

function Input() {
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
                  <button>ADD TO LIST</button>
            </div>
      );
}

export default Input;
