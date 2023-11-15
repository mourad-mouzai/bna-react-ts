import { Box } from "@mui/material";
import Sidebar from "./components/sidebar";
import InfoCard from "./components/infoCard";

const Content = () => {
  return (
    <Box
      className="flex flex-row "
      sx={{ height: `calc(100vh - 118px)`, width: "100wv" }}
    >
      <Box className="h-full sm:w-0 md:w-1/4 ">
        <Sidebar></Sidebar>
      </Box>
      <Box className="bg-gray-50 p-4 h-full w-full md:w-3/4">
        <h1 className="text-3xl text-gray-700">BNA App</h1>
        <InfoCard></InfoCard>
      </Box>
    </Box>
  );
};

export default Content;
