import { Box } from "@mui/material";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Content from "./pages/content";

const App = () => {
  return (
    <Box className="flex flex-col">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Box>
  );
};

export default App;
