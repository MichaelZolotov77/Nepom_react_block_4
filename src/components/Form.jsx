import React from 'react';

class Form extends React.Component {
  state = {
    firstName: '',
  };

  handleChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  render() {
    const { firstName } = this.state;
    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          value={firstName}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export { Form };
