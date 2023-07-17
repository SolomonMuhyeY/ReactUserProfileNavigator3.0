import React from "react";
import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
export default function NavBar() {
  return (
    <AppBar sx={{ bgcolor: "black" }}>
      <List
        component='nav'
        sx={{
          display: "flex",
          mx: 1,
          justifyContent: "space-between",
          p: "6px",
        }}
      >
        <ListItem sx={{ p: 0 }}>
          <ListItemText>JSOM</ListItemText>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemText primary='Autors' />
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemText primary='Most Liked Posts' />
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemText>Most Commented Post</ListItemText>
        </ListItem>
      </List>
    </AppBar>
  );
}
