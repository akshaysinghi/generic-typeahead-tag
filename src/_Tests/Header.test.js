import { render, screen } from "@testing-library/react";
import Header from "../Components/Header/Header";

test("renders generic search", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Generic Search/i);
  expect(linkElement).toBeInTheDocument();
});
