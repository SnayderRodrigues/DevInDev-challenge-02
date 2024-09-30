import React, { useState } from "react";
import CloseButton from "../assets/Close.svg";

const Sidebar = ({ isOpen, onClose, taskAction, onSaveTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      name: taskName.trim(),
      description: taskDescription.trim(),
    };

    onSaveTask(newTask);

    setTaskName("");
    setTaskDescription("");
  };

  return (
    <section className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar__content">
        <button className="sidebar__close-button" onClick={onClose}>
          <img src={CloseButton} alt="Fechar" />
        </button>
        <div className="sidebar__header">
          <span className="sidebar__action">{taskAction}</span>
          <span id="taskTitle"></span>
        </div>
        <form className="sidebar__form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="taskName">
              Nome<span>*</span>
            </label>
            <input
              type="text"
              required
              id="taskName"
              name="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="taskDescription">Descrição (opcional)</label>
            <textarea
              name="taskDescription"
              id="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button type="submit" className="form__save-button">
              Salvar tarefa
            </button>
            <button
              type="button"
              className="form__close-button"
              onClick={onClose}
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Sidebar;
