import { useContext } from "react";
import Input from "@mui/material/Input";
import Tags from "./Tags";
import SearchContext from "../../Utils/search-bar-context";

const SearchInput = () => {
  const { handleInputFocus, inputContainerRef } = useContext(SearchContext);

  return (
    <Input
      fullWidth={true}
      multiline={true}
      onFocus={handleInputFocus}
      inputComponent={Tags}
      style={{ minHeight: 50, flexWrap: "wrap" }}
      placeholder={"Select your favorite API 😜"}
      ref={inputContainerRef}
      sx={{ position: "relative" }}
      autoFocus={true}
      inputProps={{ "data-testid": "searchbox" }}
    />
  );
};

export default SearchInput;
