import React from "react";
import CheckboxSquare from "../assets/Square.svg";
import CheckedSquare from "../assets/SquareChecked.svg";
import EditButton from "../assets/Edit.svg";
import DeleteButton from "../assets/Trash.svg";

const TaskItem = ({ task, index, onCheck, onDelete }) => {
  return (
    <div className="tasks__item">
      <div
        className={`tasks__item-header ${task.checked ? "check" : ""}`}
        onClick={() => onCheck(index)}
      >
        <button className="tasks__item-checkbox">
          <img
            src={task.checked ? CheckedSquare : CheckboxSquare}
            alt={task.checked ? "Concluída" : "Não Concluída"}
          />
        </button>
        <div
          className={`tasks__item-info ${
            task.description ? "has-description" : ""
          }`}
        >
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </div>
      </div>
      <button type="button" className="tasks__item-edit-button">
        <img src={EditButton} alt="Editar" />
      </button>
      <button
        type="button"
        className="tasks__item-delete-button"
        onClick={() => onDelete(index)}
      >
        <img src={DeleteButton} alt="Deletar" />
      </button>
    </div>
  );
};

export default TaskItem;
