import React from "react";
import "@fontsource/jost"; // Defaults to weight 400.

function DescriptionImageBox(props) {
    if (props.reversed === "true"){
        return (
            <div style={{display:'flex', backgroundColor:'#F2F1EF' , gap:'7vw', width:'100%', margin:'auto', flexDirection:'row-reverse', paddingTop:'5vw', paddingBottom:'5vw', 
            marginTop:props.topMargin}}>
                <span style={{display:'flex', flexDirection:'row-reverse', width:'65%', gap:'7vw', margin:'auto'}}>
                <img src = {props.imagePath} style={{width:props.imageWidth}}/>
                <p style = {{fontFamily:'jost', fontSize:'1.2vw', color:'#708090', fontWeight:'100'}}>
                    <h2 style={{fontSize:'2.5vw', color:'black'}}>
                        {props.header}
                    </h2>
                        {props.text} 
                </p>
                </span>

            </div>
        );
    } else {
        return(
            <div style={{display:'flex', gap:'7vw', width:'65%', margin:'auto', marginTop:props.topMargin}}>
                <img src = {props.imagePath} style={{width:props.imageWidth}}/>
                <p style = {{fontFamily:'jost', fontSize:'1.2vw', color:'#708090', fontWeight:'100'}}>
                    <h2 style={{fontSize:'2.5vw', color:'black'}}>
                        {props.header}
                    </h2>
                        {props.text} 
                </p>
            </div>
        );
    }
}

export default DescriptionImageBox;