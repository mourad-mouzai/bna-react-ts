import { Box, Avatar, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CardTravelIcon from "@mui/icons-material/CardTravel";

const Sidebar = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Box className="flex flex-col h-44 w-full bg-sky-500 items-center justify-center">
        <Avatar
          className="mt-6"
          sx={{ width: 96, height: 96 }}
          alt="User"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Typography variant="h5" color={"white"}>
          User Name
        </Typography>
        <Typography variant="h6" fontSize={"14px"} color={"white"}>
          tim@gmail.com
        </Typography>
      </Box>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CardTravelIcon />
              </ListItemIcon>
              <ListItemText primary="Customer" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default Sidebar;
