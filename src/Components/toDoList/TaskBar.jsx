import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const TaskBar = ({ object, edit, complete, deleteTask }) => {
  return (
    <div id="task">
      <p className={object.isDone ? "done" : ""}>{object.task}</p>
      <div className="icons">
        <FAI icon={faPenToSquare} onClick={() => edit(object.id)} title="Edit" />
        <FAI icon={faCircleCheck} onClick={() => complete(object.id)} style={{ opacity: object.isDone ? "1" : null }}  title="Done" />
        <FAI icon={faTrashCan} onClick={() => deleteTask(object.id)} title="Delete" />
      </div>
    </div>
  )
}

export default TaskBar;