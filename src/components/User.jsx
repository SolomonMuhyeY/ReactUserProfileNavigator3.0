import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function User({ client }) {
  return (
    <Box
      sx={{
        borderRadius: "5px",
        py: "0.5rem",
        px: "0.85rem",
        my: "16px",
        mx: "14px",
        textAlign: "center",
        boxShadow: "2px 0 1px 0 #ddd, -2px 0 1px 0 #ddd, 0 2px 1px 0 #ddd",
        ":hover": {
          scale: "1.035",
          transition: "ease-in-out",
          transitionDuration: "1400ms",
        },
      }}
    >
      <img src={client.img} />
      <Typography
        variant='body1'
        sx={{ fontStyle: "italic", fontWeight: "bolder" }}
      >
        {client.name}
      </Typography>
      <Link to={`/UserDescription/${client.id}`}>
        <Button
          variant='contained'
          color='primary'
          sx={{
            py: "3px",
            px: "5px",
            fontSize: "small",
            fontWeight: "bold",
            wordSpacing: "-2px",
            borderRadius: "5px",
            ":hover": {
              bgcolor: "rgb(32, 32, 210)",
            },
            transition: "all",
            transitionDuration: "2000ms",
            transition: "ease-in-out",
            my: "0.56rem",
          }}
        >
          {client.btnMsg}
        </Button>
      </Link>
    </Box>
  );
}
