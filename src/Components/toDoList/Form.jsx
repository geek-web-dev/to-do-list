import { useState } from "react";

const Form = ({ toDo }) => {
  const [value, setValue] = useState("");
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (value.length) {
      toDo(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Task" onChange={(ev) => setValue(ev.target.value)} value={value} ></input>
      <button type="submit">Log Task</button>
    </form>
  );
}

export default Form;