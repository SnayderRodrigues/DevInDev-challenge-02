import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SavedTaskAnimation from "./SavedTaskAnimation";
import DropShadow from "./DropShadow";
import CheckboxSquare from "../assets/Square.svg";
import CheckedSquare from "../assets/SquareChecked.svg";
import EditButton from "../assets/Edit.svg";
import DeleteButton from "../assets/Trash.svg";

const MainSection = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [taskAction, setTaskAction] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
    setTaskAction("Criar nova tarefa");
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const handleSaveTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    handleCloseSidebar();
  };

  return (
    <main>
      <section className="tasks">
        <div className="tasks__header">
          <h1>Tarefas</h1>
        </div>
        {tasks.length === 0 ? (
          <div className="tasks__content-empty">
            <span>Você ainda não criou nenhuma tarefa</span>
            <span>Não se preocupe, suas novas tarefas irão aparecer aqui.</span>
          </div>
        ) : (
          <div className="tasks__content">
            {tasks.map((task, index) => (
              <div className="tasks__item" key={index}>
                <div className="tasks__item-header">
                  <button className="tasks__item-checkbox">
                    <img src={CheckboxSquare} alt="" />
                    <img src={CheckedSquare} alt="" />
                  </button>
                  <div className="tasks__item-info">
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                  </div>
                </div>
                <button type="button" className="tasks__item-edit-button">
                  <img src={EditButton} alt="Editar" />
                </button>
                <button type="button" className="tasks__item-delete-button">
                  <img src={DeleteButton} alt="Deletar" />
                </button>
              </div>
            ))}
          </div>
        )}
        <button className="tasks__button" onClick={handleOpenSidebar}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 12.5H18.5"
              stroke="#989898"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 18.5V6.5"
              stroke="#989898"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Adicionar tarefas
        </button>
      </section>
      <Sidebar
        isOpen={openSidebar}
        taskAction={taskAction}
        onClose={handleCloseSidebar}
        onSaveTask={handleSaveTask}
      />
      <SavedTaskAnimation />
      <DropShadow isOpen={openSidebar} onClose={handleCloseSidebar} />
    </main>
  );
};

export default MainSection;
