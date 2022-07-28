import React from "react";
import "@fontsource/jost"; // Defaults to weight 400.
import DescriptionImageBox from "./DescriptionImageBox";
import versatile from "./images/versatility.png"
import customization from "./images/integration-removebg-preview.png"
import plugplay from "./images/plug-and-play.png"

const header1 = "Versatile To Meet Everyone's Needs";
const body1 = "Can be used by developers looking to streamline the process of setting up their workflow, students looking to establish routines, or just anyone who wants to eliminate the feeling of monotony and reptition.";

const header2 = "Open Source With Easy Customizability";
const body2 = "Easily create custom automation commands and integrate them with Dehko by modifying a single settings JSON file. We try to make it easy for you so that you can make the changes that you want stress free.";

const header3 = "Plug and Plug: Ready From The Box";
const body3 = "Easy to install with minimal set up. Dehko was designed to easily download any required dependencies and isolate project libraries through intentionally managed through package managers.";


function DescriptionBanner() {
    return (
        <div>
            <DescriptionImageBox reversed = "false" imagePath={versatile} header={header1} 
            text={body1} imageWidth='27vw' topMargin='5vw'> </DescriptionImageBox>

            <DescriptionImageBox reversed="true" imagePath={customization} header={header2}
            text={body2} imageWidth='29vw' topMargin='6vw'/>

            <DescriptionImageBox reversed="false" imagePath={plugplay} header={header3} text={body3}
            imageWidth="30vw" topMargin='7vw'/>

        </div>
        
    );
}

export default DescriptionBanner;