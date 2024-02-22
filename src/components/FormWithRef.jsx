import React from 'react';

class FormWithRef extends React.Component {
  constructor() {
    super();
    this.state = {
      card: '',
      email: '',
    };
    this.firstNameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleChange = (event) => {
    this.setState(
      () => ({ [event.target.name]: event.target.value }),
      () => {
        if (this.state.card.length === 16) {
          this.emailRef.current.focus();
        }
      }
    );
  };

  componentDidMount() {
    console.log(this.firstNameRef);
    this.firstNameRef.current.focus();
  }

  render() {
    const { card, email } = this.state;
    return (
      <div>
        <input
          type="text"
          name="card"
          placeholder="card"
          value={card}
          onChange={this.handleChange}
          ref={this.firstNameRef}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          ref={this.emailRef}
        />
      </div>
    );
  }
}

export { FormWithRef };
