import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
const WeatherExtraInfo = ({ humity, wind }) => (
    <div className="weatherExtaInfoCont">
        <span>{`${humity} % Humity - `}</span>
        <span>{`${wind} Wind`}</span>
    </div>
);
WeatherExtraInfo.propTypes = {
    humity : PropTypes.number.isRequired,
    wind : PropTypes.number.isRequired,
}
export default WeatherExtraInfo;