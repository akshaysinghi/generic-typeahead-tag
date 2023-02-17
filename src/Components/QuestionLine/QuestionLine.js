import { Typography } from "@mui/material";
import SelectInput from "../Generic/SelectInput";

const QuestionLine = () => {
  return (
    <Typography variant="subtitle1" align={"left"}>
      Category for Public API.
      <SelectInput />
    </Typography>
  );
};

export default QuestionLine;
