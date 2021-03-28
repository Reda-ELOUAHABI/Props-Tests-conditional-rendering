import React from "react";
import Login from "./Login";
//var bool = false;
//const style1 = {color: "green"};
//let style = {};
//const style2 = { color: "blue" };
var userIsRegistered = false;
function functio1() {
  document.getElementById("root").style.color = "blue";
}
function functio() {
  //userIsRegistered ? (userIsRegistered = false) : (userIsRegistered = true);
  // if(userIsRegistered) document.getElementById("root").style.color="blue";
  document.getElementById("root").style.color = "red";
  //bool && (bool = false);
  // console.log(userIsRegistered);
  //ehy the userregistred change , and the style didn't change
  //bool ? (style = style1) : (style = style2);
  // console.log(bool); style={userIsRegistered ? style1 : style2}
}
function App() {
  return (
    <div className="container">
      <p> Hello</p>
      <button onClick={functio}>Change user Logged Status</button>
      <button onClick={functio1}>Change user Logged Status 1</button>
      {/* I think here we will need redux , to have the ability to change the state .. */}
      <Login isRegistered={userIsRegistered} />
      {/* <h1>Hello</h1>
      <form>
        <input type="text" placeholder="Your email" />
        <input type="password" placeholder="Your password" />
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
}

export default App;

// ternary
// isLoggedIn === true ? <h1>Hello</h1> : null

// AND operator
// isLoggedIn === true && <h1>Hello</h1>
// most user using this just for render when the first expression value is true
