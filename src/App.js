import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddUser from "./componants/AddUser/AddUser";
import Header from "./componants/Header/Header";
import Home from "./componants/Home/Home";
import UpdateUser from "./componants/UpdateUser/UpdateUser";
import Users from "./componants/Users/Users";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>
            <Route path="/users/add">
              <AddUser></AddUser>
            </Route>
            <Route path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;