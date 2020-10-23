import React from 'react';
import ReactDOM from "react-dom";

import Form from "./components/form";
import Select from "./components/select";
import Button from "./components/button";

function Index() {
    const data = [
      {
        id: "1",
        name: "One"
      },
      {
        id: "2",
        name: "Two"
      },
      {
        id: "3",
        name: "Three"
      },
      {
        id: "4",
        name: "Four"
      }
    ];

    function handleChange(event) {
      console.log(event.target.value);
    }

    function onSelectChange(event) {
      console.log(event.target.value);
    }

    return (
      <div className="Index">
        <form>
          <Form type={"text"} onChange={handleChange} />
          <Form type={"email"} onChange={handleChange} />
          <div>
            <Select data={data} onSelectChange={onSelectChange} />
          </div>          
          <Button variant="danger">Button</Button>
        </form>
      </div>
    );
  }

ReactDOM.render(<Index/> , document.getElementById("root") )