import React from 'react';

class Titles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Weather Checker</h1>
        <p>Find out temperature, conditions, and more...USING REACT JS!</p>
      </div>
    );
  }
}

export default Titles;
