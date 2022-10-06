import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      city, country, temp, humidity, description, error,
    } = this.props;
    return (
      <div className="weather__info">
        {city && country && (
        <p>
          Location:
          {city}
          ,
          {country}
        </p>
        )}
        {temp && (
        <p>
          Temperature:
          {temp}
        </p>
        )}
        {humidity && (
        <p>
          Humidity:
          {humidity}
        </p>
        )}
        {description && (
        <p>
          Conditions:
          {description}
        </p>
        )}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default Weather;
