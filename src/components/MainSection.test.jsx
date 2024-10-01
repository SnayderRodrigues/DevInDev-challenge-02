import { render, screen } from "@testing-library/react";
import MainSection from "./MainSection";

describe("Jest", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });
  it("should display elements", () => {
    render(<MainSection />);
    screen.debug();
    expect(screen.getByRole("heading", { name: /tarefas/i })).toBeInTheDocument;
  });
});
