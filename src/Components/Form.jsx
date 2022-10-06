import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    const { getWeather } = this.props;
    return (
      <form onSubmit={getWeather}>
        <input type="text" name="City" placeholder="City..." />
        <input type="text" name="State" placeholder="State..." />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
