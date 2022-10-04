import React from 'react';

class Form extends React.Component {
    render(){
        return (
            <form onSubmit={this.props.getWeather} >
                <input type='text' name='City' placeholder='City...'/>
                <input type='text' name='State' placeholder='State...'/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;