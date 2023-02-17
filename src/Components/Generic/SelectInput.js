import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { categories, defaultCategory } from "../../Utils/constant";
import { setAvailableCategory } from "../../Utils/util-service";

const SelectInput = () => {
  const [category, setCategory] = useState(defaultCategory);

  const handleChange = (event) => {
    let val = event.target.value;
    setCategory(val);
    setAvailableCategory(val);
  };

  return (
    <FormControl variant="standard" sx={{ mt: -0.4, ml: 1, mb: 4 }}>
      <Select value={category} label="Category" onChange={handleChange}>
        {categories.map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SelectInput;
