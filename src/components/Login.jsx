import React from "react";
import Input from "./Input";
function Login(props) {
  return (
    <form className="forms">
      <Input type="text" placeholder="username" />
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {
        /* ternary operator Js , 
      cond ? trueTrait : falseTrait 
      [if we wont elseTrat , we put null] */
        //But in react we can directly use Cond && Express , so if the cond true , Expression will be executed , else , it wont
      }
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;

// function Login() {
//   return (
//     <div>
//       <form>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// function Confirm() {
//   return (
//     <div>
//       <form>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <input type="password" placeholder="Confirm Password" />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export { Login, Confirm };
