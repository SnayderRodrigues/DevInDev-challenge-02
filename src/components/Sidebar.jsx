import React from 'react'

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__content">
        <button className="sidebar__close-button">
          <img src="./assets/Close.svg" alt="Fechar" />
        </button>
        <div className="sidebar__header">
          <span className="sidebar__action"></span>
          <span id="taskTitle"></span>
        </div>
        <form className="sidebar__form">
          <div>
            <label htmlFor="taskName">
              Nome<span>*</span>
            </label>
            <input type="text" required id="taskName" name="taskName" />
          </div>
          <div>
            <label htmlFor="taskDescription">Descrição (opcional)</label>
            <textarea name="taskDescription" id="taskDescription"></textarea>
          </div>
          <div>
            <button type="submit" className="form__save-button">
              Salvar tarefa
            </button>
            <button type="button" className="form__close-button">
              Fechar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Sidebar