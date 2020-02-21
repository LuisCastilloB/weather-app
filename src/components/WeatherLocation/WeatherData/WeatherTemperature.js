import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';
import {
    CLOUD, 
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from "./../../../constants/weathers";

const icons = {
    [CLOUD] : "cloud",
    [SUN] : "day-sunny",
    [CLOUDY]: "cloudy",
    [RAIN] : "rain",
    [SNOW] : "snow",
    [WINDY] : "windy"    
}
const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState ? weatherState : 'sunny'];
    const sizeIcon = "4x"
    return   <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>

}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTempCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature"> { `${temperature}` } </span>
        <span className="temperatureType"> { ` C°` }</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;