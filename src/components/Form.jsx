import React from 'react';

class Form extends React.Component {
  state = {
    firstName: '',
    email: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateName = () => {
    if (this.state.firstName.length < 5) {
      alert("Your first name can't be less than 5 letters");
    }
  };

  validateEmail = () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email
      )
    ) {
      alert('email is not valid');
    }
  };

  render() {
    const { firstName, email } = this.state;
    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          value={firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
      </div>
    );
  }
}

export { Form };
