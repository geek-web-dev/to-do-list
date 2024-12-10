import React from "react";
import { v4 as uuid } from "uuid";
import Form from "./Form";
import TaskBar from "./TaskBar";
import EditTask from "./EditTask";
import useLocalStorage from "../hook/useLocalStorage";

const Wrapper = () => {
  const [toDoList, setToDoList] = useLocalStorage("tasks_list", []);
  
  const toDo = (taskText) => {
    setToDoList([...toDoList, { task: taskText, id: uuid(), isDone: false, isEditing: false }]);
  }
  
  const complete = (clickedId) => {
    setToDoList(toDoList.map((obj) => obj.id === clickedId ? { ...obj, isDone: !obj.isDone } : obj))
  }
  
  const deleteTask = (clickedId) => setToDoList(toDoList.filter((obj) => obj.id !== clickedId))
  
  const edit = (clickedId) => {
    setToDoList(toDoList.map((obj) => obj.id === clickedId ? { ...obj, isEditing: !obj.isEditing } : obj))
  }
  
  const editUi = (clickedId, currentTask) => {
    setToDoList(toDoList.map((obj) => obj.id === clickedId ? { ...obj, task: currentTask, isEditing: !obj.isEditing } : obj))
  }
  
  
  return (
    <div id="wrapper">
      <h1 style={{ opacity: toDoList.every((obj) => obj.isDone) && toDoList.length ? "1" : "0" }}>All Tasks Done !</h1>
      <Form toDo={toDo} />
      <section id="tasks">
        {
          toDoList.map((object, index) => (
            object.isEditing ? (
              <EditTask object={object} editUi={editUi} key={index} />
            ) : (
              <TaskBar object={object} edit={edit} complete={complete} deleteTask={deleteTask} key={index} />
            )
          ))
        }
      </section>
    </div>
  )
}

export default Wrapper;