import React from 'react';
import PropTypes from 'prop-types';
const WeatherExtraInfo = ({ humity, wind }) => (
    <div>
        <span>{`${humity} % Humity - `}</span>
        <span>{`${wind} Wind`}</span>
    </div>
);
WeatherExtraInfo.propTypes = {
    humity : PropTypes.number.isRequired,
    wind : PropTypes.number.isRequired,
}
export default WeatherExtraInfo;