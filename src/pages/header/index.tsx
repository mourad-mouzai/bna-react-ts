import FaceIcon from "@mui/icons-material/Face";
import { Button, Box, IconButton, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box className="flex flex-row justify-end h-14 w-full bg-indigo-200">
      <Button variant="contained" sx={{ marginX: "20px", marginY: "12px" }}>
        Validate
      </Button>
      <Button variant="outlined" sx={{ marginX: "20px", marginY: "12px" }}>
        Validate
      </Button>
      <IconButton onClick={() => {}}>
        <FaceIcon />
      </IconButton>
    </Box>
  );
};

export default Header;
