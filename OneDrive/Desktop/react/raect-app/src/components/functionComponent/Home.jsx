// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h1>This page is for Home details</h1>
//     </div>
//   );
// };

// export default Home;
import "../../css/home.css"
const Home =()=>{
    
    return(
        <div>
            <h1>This page is meant for home</h1>
            <form>
                <label>Username: </label>
                <input type="text" placeholder="username"></input>
                <br></br>
                <label>Password : </label>
                <input type="password" placeholder="password"></input>
                <br></br>
                <input type="submit" ></input>
                </form>
        </div>)}

export default Home;