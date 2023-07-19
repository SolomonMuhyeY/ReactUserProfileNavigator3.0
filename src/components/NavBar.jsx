import React from "react";
import { AppBar, List, ListItem, ListItemText } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar sx={{ bgcolor: "black", mb: "1rem" }}>
      <List
        component='nav'
        sx={{
          display: "flex",
          mb: 0,
          p: 0.7,
          fontSize: 12,
          justifyContent: "end",
        }}
      >
        <ListItem
          sx={{
            p: 0,
            ":hover": {
              scale: "1.009",
            },
            transition: "all",
            transitionDuration: "800ms",
            cursor: "pointer",
            mx: 2,
          }}
        >
          <ListItemText>JSOM</ListItemText>
        </ListItem>
        <ListItem
          sx={{
            p: 0,
            ":hover": {
              scale: "1.009",
            },
            transition: "all",
            transitionDuration: "800ms",
            cursor: "pointer",
          }}
        >
          <ListItemText primary='Autors' />
        </ListItem>
        <ListItem
          sx={{
            p: 0,
            ":hover": {
              scale: "1.009",
            },
            transition: "all",
            transitionDuration: "800ms",
            cursor: "pointer",
            color: "gray",
          }}
        >
          <ListItemText primary='Most Liked Posts' />
        </ListItem>
        <ListItem
          sx={{
            p: 0,
            ":hover": {
              scale: "1.009",
            },
            transition: "all",
            transitionDuration: "800ms",
            cursor: "pointer",
            color: "gray",
          }}
        >
          <ListItemText>Most Commented Post</ListItemText>
        </ListItem>
      </List>
    </AppBar>
  );
}
