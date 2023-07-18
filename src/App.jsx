import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { client } from "./components/UserInfo";
import UserDescription from "./components/UserDescription";
import { alignProperty } from "@mui/material/styles/cssUtils";

const listOfClients = client.map((cl) => {
  return (
    <div key={cl.id}>
      <User key={cl.id} client={cl} />
    </div>
  );
});

function App() {
  return (
    <Router>
      <NavBar />
      <Container
        variant='div'
        spacing={6}
        sx={{
          my: "3.5rem",
          width: "80%",
          mx: "auto",
        }}
      >
        <Grid
          container
          sx={{
            gap: "2rem",
          }}
          justifyContent='center'
          alignContent='center'
        >
          <Routes>
            <Route
              path='/UserDescription/:id'
              element={<UserDescription clientList={listOfClients} />}
            />
            <Route path='/' element={listOfClients} />
          </Routes>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
