import { forwardRef, useContext } from "react";
import Chip from "@mui/material/Chip";
import SearchContext from "../../Utils/search-bar-context";

const Tags = forwardRef((props, ref) => {
  const { tag, updateTags, limitSearch } = useContext(SearchContext);
  const { onChange, ...values } = props;
  return (
    <>
      {tag.map((value, idx) => (
        <Chip
          key={idx}
          label={value}
          sx={{ mr: 1, my: 0.5 }}
          onDelete={() => updateTags(value)}
          color="primary"
          variant="outlined"
          data-testid={value + "-tag"}
        />
      ))}
      <input
        {...values}
        ref={ref}
        style={{ flex: 1 }}
        onChange={(e) => limitSearch(e.target.value)}
      />
    </>
  );
});

export default Tags;
