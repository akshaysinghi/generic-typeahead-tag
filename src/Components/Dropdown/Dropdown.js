import { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import SearchContext from "../../Utils/search-bar-context";

const Dropdown = () => {
  const { results, tag, updateTags } = useContext(SearchContext);
  return (
    <List sx={{ width: (1 / 2) * 2 }}>
      {results.map((value, idx) => {
        const { API, Category, Description } = value;
        return (
          <ListItem key={idx} disablePadding>
            <ListItemButton role={API} dense key={idx}>
              <ListItemIcon>
                <Checkbox
                  edge={"start"}
                  checked={tag.indexOf(API) !== -1}
                  tabIndex={-1}
                  disableRipple
                  key={idx}
                  onChange={() => updateTags(API)}
                  inputProps={{ "data-testid": API + "-check" }}
                />
              </ListItemIcon>
              <ListItemText
                role={API}
                primary={API}
                secondary={`${Category} | ${Description}`}
                primaryTypographyProps={{ "data-testid": API }}
                secondaryTypographyProps={{
                  "data-testid": `${Category} | ${Description}`,
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
export default Dropdown;
