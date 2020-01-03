import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => {
    //console.log(props);
    //debugger;

    //Destructuring
    //const {city} = props;

    //const city = props.city;
    return (
    <div>
        <h1>
            {city}
        </h1>
    </div>
    );

};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;