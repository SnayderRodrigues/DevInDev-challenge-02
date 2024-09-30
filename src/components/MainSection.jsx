import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SavedTaskAnimation from "./SavedTaskAnimation";
import DropShadow from "./DropShadow";
import TaskItem from "./TaskItem";

const MainSection = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [taskAction, setTaskAction] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
    setTaskAction("Criar nova tarefa");
    setEditingTaskIndex(null);
  };

  const handleEditTask = (index) => {
    setOpenSidebar(true);
    setTaskAction("Editar");
    setEditingTaskIndex(index);
  };

  const handleSaveTask = (newTask) => {
    if (editingTaskIndex !== null) {
      setTasks((prevTasks) =>
        prevTasks.map((task, index) =>
          index === editingTaskIndex ? { ...task, ...newTask } : task
        )
      );
    } else {
      const taskWithCheck = { ...newTask, checked: false };
      setTasks((prevTasks) => [...prevTasks, taskWithCheck]);
    }
    handleCloseSidebar();
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const toggleCheckTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, taskIndex) =>
        taskIndex === index ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, taskIndex) => taskIndex !== index)
    );
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
              <TaskItem
                key={index}
                task={task}
                index={index}
                onCheck={toggleCheckTask}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
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
        editingTask={editingTaskIndex !== null ? tasks[editingTaskIndex] : null}
        onClose={handleCloseSidebar}
        onSaveTask={handleSaveTask}
      />
      <SavedTaskAnimation />
      <DropShadow isOpen={openSidebar} onClose={handleCloseSidebar} />
    </main>
  );
};

export default MainSection;
