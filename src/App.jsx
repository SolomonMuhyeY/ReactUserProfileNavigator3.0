import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { client } from "./components/UserInfo";
import UserDescription from "./components/UserDescription";
const listOfClients = client.map((cl) => {
  // console.log(cl);
  return (
    <div key={cl.id}>
      <User key={cl.id} client={cl} />
    </div>
  );
});
function App() {
  return (
    <Router>
      <div className='w-full mx-auto'>
        <NavBar />
        <div className='w-3/5 mb-16 mt-8 grid grid-cols-1 mx-auto flex-wrap gap-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
          <Routes>
            <Route
              path='/UserDescription/:id'
              element={<UserDescription clientList={listOfClients} />}
            />
            <Route path='/' element={listOfClients} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
