import React from 'react';
import './SeasonDisplay.css'
const seasonConfig = {
    Summer : {text : "Let's hit the beach.", iconName : "sun"},
    Winter : {text : "Burr it's chilly here.", iconName : "snowflake"}
}

const getSeason = (lat,month) =>{
    if(lat > 0){
        return (month > 2 && month < 9) ? "Summer" : "Winter";
    } else {
        return (month > 2 && month < 9) ? "Winter" : "Summer";
    }
}

const SeasonDisplay =(props)=> {
    const season = getSeason(props.latitude, new Date().getMonth());
    const config = seasonConfig[season];

    return(
        <div className={`season-display ${season}`}>
            {props.latitude && 
                <div>
                    <i className={`${config.iconName} icon huge icon-left`}></i>
                    <h1>{config.text}</h1>
                    <i className={`${config.iconName} icon huge icon-right`}></i>
                </div>
            }
            {props.errorMessage && <h1>Error Message : {props.errorMessage}</h1>} 
        </div>
    );
}

export default SeasonDisplay;