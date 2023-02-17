import { render, fireEvent, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Searchbar from "../Components/Searchbar/Searchbar";
import SearchContext from "../Utils/search-bar-context";
import { res } from "./mocks/res";

const server = setupServer(
  rest.get("https://api.publicapis.org/entries", (req, _, ctx) => {
    const mockData = {
      count: 1,
      entries: [
        {
          API: "AdoptAPet",
          Description: "Resource to help get pets adopted",
          Auth: "apiKey",
          HTTPS: true,
          Cors: "yes",
          Link: "https://www.adoptapet.com/public/apis/pet_list.html",
          Category: "Animals",
        },
      ],
    };
    return res(ctx.json(mockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Searchbar component", () => {
  it("should fetch and display data from API when text is entered in input", async () => {
    render(<Searchbar />);

    // Type some text into the search input field
    const input = screen.getByTestId("searchbox");
    fireEvent.change(input, {
      target: { value: "a" },
    });

    // Waiting for the component to update with our API response
    await screen.findByTestId("AdoptAPet");

    // Assert that the API response is displayed on the page
    expect(
      screen.getByTestId("Animals | Resource to help get pets adopted")
    ).toBeInTheDocument();
  });
});
