import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function User({ client }) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        py: "0.5rem",
        px: "0.85rem",
        my: "16px",
        mx: "auto",
        textAlign: "center",
        boxShadow: "2px 0 1px 0 #ddd, -2px 0 1px 0 #ddd, 0 2px 1px 0 #ddd",
        ":hover": {
          scale: "1.05",
          transition: "ease-in-out",
          transitionDuration: "2000ms",
        },
      }}
    >
      <img src={client.img} />
      <Typography
        variant='h6'
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
          className='bg-blue-600 p-1 my-3 rounded transition duration-1000 ease  hover:bg-blue-500'
        >
          {client.btnMsg}
        </Button>
      </Link>
    </Box>
  );
}
