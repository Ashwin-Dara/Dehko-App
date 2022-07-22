import React from "react";
import "@fontsource/jost"; // Defaults to weight 400.
import Pipeline from './images/nlp-pipeline.png'

function InformationBox(props) {
    return (
        <div style = {{color:'black', borderStyle:'solid', 
        backgroundColor:'#e1e6eb', width:'60vw', borderRadius:'0.3vw',
        height:'13vw', textAlign:'left', paddingLeft:'1%', margin:'auto', position:'relative', 
        top:props.offset, borderWidth:'0.06vw', display:'flex', gap:'7vw'}}>

            <p>
                <span style={{color:'purple', fontFamily:'jost', fontSize:'1.3vw', fontWeight:'600'}}>
                    What's Included? 
                </span>
                <br></br>
                <span style={{color:'black', fontFamily:'jost', fontSize:'1vw'}}>
                    Here are some of the features that make Dehko so powerful!
                    <ul>
                        <li> Powerful Python scripting support providing capabilities with no limits. </li>
                        <li> Configurable JSON file for creating new custom commands. </li>
                        <li> Containerized application for reliability and seamless integration. </li>
                    </ul>
                </span>
            </p>
            <img src={Pipeline} style={{width:'15vw', height:'70%', position:'relative', paddingTop:'2vw'}} />
            
        </div>
    );
}

export default InformationBox;