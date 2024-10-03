import { render, screen, fireEvent } from "@testing-library/react";
import MainSection from "./MainSection";

test("renders the add task button", () => {
  render(<MainSection />);
  const buttonElement = screen.getByText(/Adicionar tarefas/i);
  expect(buttonElement).toBeInTheDocument();
});

test("opens sidebar when add task button is clicked", () => {
  render(<MainSection />);
  const buttonElement = screen.getByText(/Adicionar tarefas/i);
  fireEvent.click(buttonElement);
  const sidebarAction = screen.getByText(/Criar nova tarefa/i);
  expect(sidebarAction).toBeInTheDocument();
});
