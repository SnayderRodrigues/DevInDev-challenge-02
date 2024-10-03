import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";

test("renders the task form when sidebar is open", () => {
  render(<Sidebar isOpen={true} taskAction="Criar nova tarefa" />);
  const formElement = screen.getByText(/Salvar tarefa/i);
  expect(formElement).toBeInTheDocument();
});

test("calls onSaveTask when form is submitted", () => {
  const mockSaveTask = jest.fn();
  render(
    <Sidebar
      isOpen={true}
      taskAction="Criar nova tarefa"
      onSaveTask={mockSaveTask}
    />
  );
  fireEvent.change(screen.getByLabelText(/Nome/i), {
    target: { value: "Nova Tarefa" },
  });
  fireEvent.click(screen.getByText(/Salvar tarefa/i));
  expect(mockSaveTask).toHaveBeenCalledWith({
    name: "Nova Tarefa",
    description: "",
  });
});
