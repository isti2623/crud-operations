
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './componants/Home/Home';
import AddUser from './componants/AddUser/AddUser';
import UpdateUser from './componants/UpdateUser/UpdateUser';
import Users from './componants/Users/Users';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<AddUser />} />
          <Route path="/register" element={<Users />} />
          <Route path="/register" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
