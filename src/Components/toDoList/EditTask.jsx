import { useState } from "react";

const EditTask = ({ object, editUi }) => {
  const [value, setValue] = useState(object.task);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length) {
      editUi(object.id, value);
      setValue("");
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} ></input>
      <button>Edit Task</button>
    </form>
  );
}

export default EditTask;