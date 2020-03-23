import React, { Component } from "react";

/* export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    this.setState({
      cuenta: this.state.cuenta + 1
    });
  }

  restar() {
    this.setState({
      cuenta: this.state.cuenta - 1
    });
  }

  render() {
    return (
      <div>
        <p>Contador</p>
        <p>
          <b>{this.state.cuenta}</b>
        </p>
        <p>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </p>
      </div>
    );
  }
} */

export default class Contador extends Component {
  //Properties Initializer
  state = {
    cuenta: 0
  };

  static defaultProps = {
    titulo: "Clicks"
  };

  //Arrow Functions
  sumar = () => {
    this.setState({
      cuenta: this.state.cuenta + 1
    });
  };

  restar = () => {
    this.setState({
      cuenta: this.state.cuenta - 1
    });
  };

  render() {
    return (
      <div>
        <p>Contador de {this.props.titulo}</p>
        <p>
          <b>{this.state.cuenta}</b>
        </p>
        <p>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </p>
      </div>
    );
  }
}
