import React from "react";
import Sidebar from "./Sidebar";
import SavedTaskAnimation from "./SavedTaskAnimation";
import DropShadow from "./DropShadow";

const MainSection = () => {
  return (
    <main>
      <section className="tasks">
        <div className="tasks__header">
          <h1>Tarefas</h1>
        </div>
        <div className="tasks__content-empty">
          <span>Você ainda não criou nenhuma tarefa</span>
          <span>Não se preocupe, suas novas tarefas irão aparecer aqui.</span>
        </div>
        <div className="tasks__content"></div>
        <button className="tasks__button">
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
      <Sidebar />
      <SavedTaskAnimation />
      <DropShadow />
    </main>
  );
};

export default MainSection;
