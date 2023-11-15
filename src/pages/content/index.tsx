import { Box } from "@mui/material";

const Content = () => {
  return (
    <Box
      className="flex flex-row "
      sx={{ height: `calc(100vh - 105px)`, width: "100wv" }}
    >
      <Box className="bg-amber-500 h-full sm:w-0 md:w-1/4 "></Box>
      <Box className="bg-blue-500 p-4 h-full w-full md:w-3/4">
        <h1 className="text-3xl text-red-500 font-bold underline">BNA App</h1>
      </Box>
    </Box>
  );
};

export default Content;
