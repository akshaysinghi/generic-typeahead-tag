import { Container } from "@mui/material";
import Header from "../Components/Header/Header";
import Searchbar from "../Components/Searchbar/Searchbar";
import SelectInput from "../Components/Generic/SelectInput";
import QuestionLine from "../Components/QuestionLine/QuestionLine";

const Dashboard = () => {
  return (
    <>
      <Container>
        <Header />
        <QuestionLine />
        <Searchbar sx={{ mt: 50 }} />
      </Container>
    </>
  );
};
export default Dashboard;
