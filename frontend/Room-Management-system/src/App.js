import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import AddRoom from './Rooms/AddRoom';
import EditRoom from "./Rooms/EditRoom";
import ViewRoom from "./Rooms/ViewRoom";
import Home1 from "./pages/Home1";
import ViewRooms from "./pages/ViewRooms";
import BoardRooms from "./pages/BoardRooms";
import CheckUp from "./pages/CheckUp";
import RoomService from "./pages/RoomService";


function App() {
  return (
    <div className="App">
      
      <Router>
       <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home1/>}/>
          <Route exact path="/addroom" element={<AddRoom/>}/>
          <Route exact path="/viewrooms" element={<ViewRooms/>}/>
          <Route exact path="/checkup" element={<CheckUp/>}/>
          <Route exact path="/roomservice" element={<RoomService/>}/>
          <Route exact path="/editroom/:rid" element={<EditRoom/>}/>
          <Route exact path="/viewroom/:rid" element={<ViewRoom/>} />
          <Route exact path="/boardrooms" element={<BoardRooms/>}/>
        </Routes>  
      </Router>

      

    </div>
  );
}
export default App;
