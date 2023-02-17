import { useState, useRef, useCallback } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import SearchResults from "../SearchResults/SearchResults";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchInput from "../Generic/SearchInput";
import Dropdown from "../Dropdown/Dropdown";
import { getDataByTitleAndCategory } from "../../Utils/api-service";
import { limitApiCall } from "../../Utils/util-service";
import SearchContext from "../../Utils/search-bar-context";
import { LinearProgress } from "@mui/material";

const Searchbar = () => {
  const [element, setElement] = useState(null);
  const [tag, setTag] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState();
  const inputContainerRef = useRef();

  const handleInputFocus = (event) => {
    setElement(event.currentTarget);
  };

  const closeDropdown = () => {
    setElement(null);
  };

  const updateTags = (value) => {
    const tagIdx = tag.indexOf(value);
    const newTags = [...tag];
    tagIdx < 0 ? newTags.push(value) : newTags.splice(tagIdx, 1);
    setTag(newTags);
  };

  const getResultByKeyword = async (keyword) => {
    if (keyword) {
      try {
        setSearchText(keyword);
        setLoading(true);
        let data = await getDataByTitleAndCategory(keyword);
        let response = await data.json();
        response.entries.length > 0
          ? setResults(response.entries)
          : setResults([]);
        setLoading(false);
      } catch {
        setResults([]);
        setLoading(false);
      }
    } else {
      setSearchText(keyword);
      setResults([]);
    }
  };

  const limitSearch = useCallback(limitApiCall(getResultByKeyword), []);

  return (
    <ClickAwayListener onClickAway={closeDropdown}>
      <div>
        <SearchContext.Provider
          value={{
            tag,
            updateTags,
            limitSearch,
            handleInputFocus,
            inputContainerRef,
            element,
            results,
          }}
        >
          <SearchInput />
          <SearchResults>
            {loading && <LinearProgress />}
            {results.length > 0 && searchText && <Dropdown />}
            {results.length === 0 && !loading && (
              <Box px={2} py={1}>
                <Typography variant="subtitle2">
                  {results.length === 0 && searchText
                    ? `😞 No results while searching ${searchText}`
                    : "Please search your api."}
                </Typography>
              </Box>
            )}
          </SearchResults>
        </SearchContext.Provider>
      </div>
    </ClickAwayListener>
  );
};
export default Searchbar;
