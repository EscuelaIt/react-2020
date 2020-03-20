import React from "react";

const Componente = ({ msg }) => <h2>{msg}</h2>;

/* const Componente = function({ msg }) {
  return <h2>{msg}</h2>;
}; */

export default Componente;

/* export default function Componente({ msg }) {
  return <h2>{msg}</h2>;
} */

/* export default function Componente(props) {
  return <h2>{props.msg}</h2>;
} */

/* export default class Componente extends Component {
  render() {
    return (
      <>
        <h2>{this.props.msg}</h2>
      </>
    );
  }
}
 */
