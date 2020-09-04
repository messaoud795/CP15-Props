import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import pic from "./pic.jpg";

function App() {
  const setAlert = (name) => {
    alert(name);
  };
  const user = {
    fullName: "Jonny Kim",
    profession: "(M.D.) (Lieutenant, U.S. Navy) NASA Astronaut",
    bio:
      "Dr. Jonny Kim was selected by NASA to join the 2017 Astronaut Candidate Class. He reported for duty in August 2017 and having completed the initial astronaut candidate training is now eligible for a mission assignment. A U.S. Navy SEAL, Kim completed more than 100 combat operations and is the recipient of the Silver Star and Bronze Star with Combat “V”. Kim was commissioned as a naval officer through an enlisted-to-officer program and earned his degree in mathematics at the University of San Diego and a doctorate of medicine at Harvard Medical School.",
  };
  return (
    <div className="App">
      <Profile user={user} handleName={setAlert}>
        <img src={pic} alt="" />
      </Profile>
      {/* {handleName=(fullName)=>alert fullName}/> */}
    </div>
  );
}

export default App;
