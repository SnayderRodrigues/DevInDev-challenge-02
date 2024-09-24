import Header from "./components/Header";

function App() {

  return (
    <>
      <Header/>
      <main>
        <section class="tasks">
          <div class="tasks__header">
            <h1>Tarefas</h1>
          </div>
          <div class="tasks__content-empty">
            <span>Você ainda não criou nenhuma tarefa</span>
            <span>Não se preocupe, suas novas tarefas irão aparecer aqui.</span>
          </div>
          <div class="tasks__content"></div>
          <button class="tasks__button">
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 18.5V6.5"
                stroke="#989898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Adicionar tarefas
          </button>
        </section>
        <section class="sidebar">
          <div class="sidebar__content">
            <button class="sidebar__close-button">
              <img src="./assets/Close.svg" alt="Fechar" />
            </button>
            <div class="sidebar__header">
              <span class="sidebar__action"></span>
              <span id="taskTitle"></span>
            </div>
            <form class="sidebar__form">
              <div>
                <label for="taskName">
                  Nome<span>*</span>
                </label>
                <input type="text" required id="taskName" name="taskName" />
              </div>
              <div>
                <label for="taskDescription">Descrição (opcional)</label>
                <textarea
                  name="taskDescription"
                  id="taskDescription"
                ></textarea>
              </div>
              <div>
                <button type="submit" class="form__save-button">
                  Salvar tarefa
                </button>
                <button type="button" class="form__close-button">
                  Fechar
                </button>
              </div>
            </form>
          </div>
        </section>
        <div class="saved-task-animation">
          <img src="./assets/Close.svg" alt="" />
        </div>
        <div class="sidebar__drop-shadow"></div>
      </main>
    </>
  );
}

export default App
