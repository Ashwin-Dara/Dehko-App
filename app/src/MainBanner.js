import React from "react";
import {ReactComponent as BackDrop} from './images/backgrounds/flat-mountains.svg';
import ReactLogo from './images/react-logo.png'
import "@fontsource/jost"; // Defaults to weight 400.
import NavBar from "./NavBar";
import Button from "./Button";
import InformationBox from "./InfoBox";

function MainBanner(){
    return ( 
        <React.Fragment>
            <div style={{position:'relative', textAlign:'center', color:'white', background:'#300B82'}}>

            <NavBar/>
            <span style ={{fontFamily:'jost', fontSize:'0.7vw', position:'relative', left:'44vw', top:'-2.5vw', background:'#300B82', marginBottom:'-10vw', marginTop:'-10vw'}}>
                Powered By  <img src={ReactLogo} style={{width:'3vw', position:'relative', top:'0.2vw', left:'0.1vw'}}/>
            </span>

            <div style={{position:'absolute', left:'6%', 
            top:'13.5%', width:'50%', textAlign:'left', background:'#300B82'}}>
                <p style={{fontFamily:'jost', fontSize:'3vw', fontWeight:'800', letterSpacing:'0.2vw'}}>
                    Dehko
                </p>
                <p style = {{fontFamily:'jost', fontSize:'1.8vw', fontWeight:'thin', position:'absolute', top:'55%'}}>
                    A Customizable NLP Automation Assisant. 
                </p>
                <p style={{fontFamily:'jost', fontSize:'1.4vw', width:'70%', position:'absolute'}}>
                Efficiently automate your workflow through a powerful, robust, and accurate script execution tool. Eliminate the tedious syntax and errors that come with traditional CLIs. 
                </p>
                
                <button style={{position:'absolute', background:'#155f75', border:'none', borderRadius:'0.35vw', fontWeight:'normal', color:'white', top:'20vw', 
                fontFamily:'jost', fontSize:'1.2vw', width:'20%', height:'30%'}}>
                    Learn More
                </button>
                
            </div>

            <BackDrop style={{maxWidth:'100%', height:'auto', width:'auto'}}/>

            </div>
            <InformationBox offset="-2.5vw"/>

        </React.Fragment>
        
    );
}

export default MainBanner;