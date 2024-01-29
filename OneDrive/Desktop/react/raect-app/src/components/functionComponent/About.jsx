// import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>This page is for About details</h1>
//     </div>
//   );
// };

// export default About;
// import React from "react"
// import "../../css/styling.css"
// import { useState } from "react"//hooks

// const About = ()=>{
//     const[college,updateCollege]=useState("KEC")//HOOKS
//     const updatingClg=()=>{
//         updateCollege("Kongu Enginneering College")
//     }
//     return(
//         <div class="abi">
//             <h1>Welcome to {college}</h1>
//             {/* //EVENT handling */}
//             <button onDoubleClick={(updatingClg)}>Update College Name</button>
//         </div>
//     )
// }
// export default About
import React, { useEffect } from "react"
import "../../css/styling.css"
import { useState } from "react"//hooks

const About = ()=>{
    const[tabName,setTabName]=useState("you don't have any disease.don,t take pills")//HOOKS
    const updateTablet=()=>{
        setTabName("you have fever")
    }
    const updateTablet1=()=>{
      setTabName("you have cold")
  }
    useEffect(()=>{
      console.log("side effects are slepy,drowsy")
    },[tabName])
    return(
        <div class="abi">
            <h1>{tabName}</h1>
            {/* //EVENT handling */}
            <button onDoubleClick={(updateTablet)}>Click me if you feel fever</button>
            <button onDoubleClick={(updateTablet1)}>Click me if you feel cold</button>
        </div>
    )
}
export default About

