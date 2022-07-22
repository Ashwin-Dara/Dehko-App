import React from "react";
import "@fontsource/jost"; // Defaults to weight 400.
import DehkoSocials from './images/Dehko-Banner-Logos.png'

function BottomBanner() {
    return ( 
        <div style={{color:'white', background:'black', marginTop:'8vw', fontFamily:'jost', padding:'2vw', 
        paddingBottom:'2vw', paddingLeft:'4vw', paddingRight:'2vw'}}>
            <div>
                <h1 style ={{fontSize:'2vw'}}>
                    Dehko
                </h1>
                <div style={{fontSize:'0.8vw', position:'relative', top:'-1.5vw'}}>
                    The one stop automation assistant to meet your workflow needs. 
                    <img src={DehkoSocials} style={{width:'10vw', position:'absolute', left:'0vw', padding:'0', margin:'0', borderBottomStyle:'solid'}}/>
                </div>
            </div>


            <div style = {{display:'flex', gap:'7vw', justifyContent:'right', fontSize:'0.8vw', 
            position:'relative', top:'-6vw'}}>
                <span>
                    <h2>
                        Product
                    </h2>
                    Download <br/>
                    Docker <br/>
                    Customization 
                </span>

                <span>
                    <h2>
                        Resources
                    </h2>
                    Docs <br/>
                    Installation <br/>
                    ReadMe <br/>
                    GitHub <br/>
                    Source <br/>
                    Feedback <br/>
                    Contact 
                </span>

                <span style={{paddingRight:'8vw'}}>
                    <h2>
                        Policies
                    </h2>
                    Terms <br/>
                    Privacy <br/>
                    Settings <br/>
                    Guidelines <br/>
                    Acknowledgements <br/>
                    Licenses <br/>
                </span>
    
            </div>
        </div>

    )
}

export default BottomBanner;