import React from 'react';

import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = '4c74cd9965ad22f4ae36b899ad0ecd19';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: undefined,
      city: undefined,
      state: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
    };
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.City.value;
    const state = e.target.elements.State.value;
    if (city && state) {
      const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},USA&appid=${API_KEY}`);
      const geoDataJSON = await geoResponse.json();
      const { lat, lon } = geoDataJSON[0];
      const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`);
      const data = await apiCall.json();
      this.setState({
        temp: data.main.temp,
        city: data.name,
        state: data.sys.state,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        state: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter a valid City and State.',
      });
    }
  };

  render() {
    const {
      temp, city, state, humidity, description, error,
    } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="title">
                  <Titles />
                </div>
              </div>
              <div className="row">
                <div className="col-12 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temp={temp}
                    city={city}
                    state={state}
                    humidity={humidity}
                    description={description}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
