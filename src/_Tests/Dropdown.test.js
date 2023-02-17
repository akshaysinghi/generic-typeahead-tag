import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "../Components/Dropdown/Dropdown";
import SearchContext from "../Utils/search-bar-context";

const results = [
  {
    API: "AdoptAPet",
    Description: "Resource to help get pets adopted",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "yes",
    Link: "https://www.adoptapet.com/public/apis/pet_list.html",
    Category: "Animals",
  },
];

describe("Dropdown", () => {
  it("should perform an action when the checkbox is clicked", async () => {
    const mockAction = jest.fn();

    render(
      <SearchContext.Provider
        value={{ updateTags: mockAction, results, tag: ["ts"] }}
      >
        <Dropdown />
      </SearchContext.Provider>
    );
    // Click the checkbox
    const checkbox = screen.getByTestId("AdoptAPet-check");
    fireEvent.click(checkbox);

    // Assert that the action was called once with the correct argument
    expect(mockAction).toHaveBeenCalledTimes(1);
    expect(mockAction).toHaveBeenCalledWith("AdoptAPet");
  });
});
