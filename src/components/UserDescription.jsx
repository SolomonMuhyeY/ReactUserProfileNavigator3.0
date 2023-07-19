import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { client } from "./UserInfo";

function UserDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = client.find((cl) => cl.id == id);

  const handleGoBack = () => {
    navigate(-1);
  };
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <Container variant='div'>
      <img src={user.img} alt={user.name} />
      <Typography
        variant='h5'
        sx={{ fontWeight: "bolder", fontStyle: "italic" }}
      >
        {user.name}
      </Typography>
      <Typography variant='body1'>{user.description}</Typography>
      <Button
        variant='contained'
        sx={{
          my: ".44rem",
        }}
        onClick={handleGoBack}
      >
        Go Back
      </Button>
    </Container>
  );
}

export default UserDescription;
