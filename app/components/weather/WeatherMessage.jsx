var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div className="text-center">It's it {temp} in {location}</div>
    );
};

module.exports = WeatherMessage;
