import Namebar from "./Components/Namebar";
import Navbar from "./Components/Navbar";
import Users from "./Components/UserList";
import React, { useState } from "react";
function App() {
  const [isGetUser, setIsGetUser] = useState(true)
  return (
    <div>
 <Namebar  isGetUser={isGetUser} setIsGetUser={setIsGetUser}/>
 {/* <Navbar/> */}
 <Users isGetUser={isGetUser} setIsGetUser={setIsGetUser} />
    </div>
  );
}

export default App;
