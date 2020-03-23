import React, { Component } from "react";

export default class Reloj extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún NO esta en el DOM");

    this.state = {
      date: new Date().toLocaleTimeString()
    };

    this.timer = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  tictac = () => {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      });
    }, 1000);
  };

  start = () => {
    this.tictac();
  };

  stop = () => {
    clearInterval(this.timer);
  };

  render() {
    console.log(
      4,
      "El componente se dibuja (o redibuja por algun cambio) en el DOM"
    );
    return (
      <>
        <div>{this.state.date}</div>
        <button onClick={this.start}>iniciar</button>
        <button onClick={this.stop}>detener</button>
      </>
    );
  }
}
