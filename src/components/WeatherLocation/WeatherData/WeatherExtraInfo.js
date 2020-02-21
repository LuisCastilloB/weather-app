import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({ humity, wind }) => (
    <div className="weatherExtaInfoCont">
        <span  className="extraInfoText">{`Humedad: ${humity} %  - `}</span>
        <span className="extraInfoText">{`Vientos: ${wind} `}</span>
    </div>
);
WeatherExtraInfo.propTypes = {
    humity : PropTypes.number.isRequired,
    wind : PropTypes.number.isRequired,
}
export default WeatherExtraInfo;