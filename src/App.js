import Namebar from "./Components/Namebar";
import Navbar from "./Components/Navbar";
import EditUser from "./Components/EditUser";
import Users from "./Components/UserList";

function App() {
  return (
    <div>
 <Namebar/>
 {/* <Navbar/> */}
 <Users/>
 <EditUser/>
    </div>
  );
}

export default App;
