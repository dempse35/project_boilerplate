import React from "React";
import { withRouter } from "react-router-dom";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      None: true
    };
  }

  render() {
    return (
      <p>
        <h1>Welcome to your personal Stock Broker page!</h1>
        <h3>Dont tell your fiance how much you lost on GME</h3>
        <h5>It was a lot</h5>
      </p>
    );
  }
}

export default withRouter(Landing);
