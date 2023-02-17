import { useContext } from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import SearchContext from "../../Utils/search-bar-context";
import "../../App.css";

const SearchResults = (props) => {
  const { element, inputContainerRef } = useContext(SearchContext);
  return (
    <Popper
      open={Boolean(element)}
      anchorEl={element}
      transition
      container={inputContainerRef?.current}
      className="popper-style"
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={100}>
          <Paper>
            <div>{props.children}</div>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default SearchResults;
