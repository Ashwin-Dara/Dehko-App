import React from "react";
import "@fontsource/jost"; // Defaults to weight 400.

function NavBar() {
    return (
        <div style = {{background:'#300B82' , color:'white', display:'flex', gap:'2vw', paddingLeft:'2vw',fontFamily:'jost', fontSize:'1.1vw'}}>
            <p> Documentation </p> 
            <p> GitHub </p>
            <p> Docker </p>
        </div>
    );
}

export default NavBar;