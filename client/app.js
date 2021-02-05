import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Landing from "./components/landing.js";
// import Login from "./components/Login.js";
// import CreateAcct from "./components/CreateAcct.js";
//import Main from "./components/main.js";
// import AuthService from "./utilities/auth.js";
//import CSS from "../style.css";
//import Protect from "./utilities/protectRoutes.js";
//import Dashboard from "./components/dashboard.js";
//import Services from "./components/services.js";
//import Billing from "./components/billing.js";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

//Normal App flow below
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.auth = new AuthService();
  }
  // this is the router, the protect class is invoked with each page that should only be seen by a user that is logged in. easy to add additional protected features.
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/createAcct" component={CreateAcct} />
          <Route exact path="/main" component={Protect(Main)} />
          <Route exact path="/dashboard" component={Protect(Dashboard)} />
          <Route exact path="/services" component={Protect(Services)} />
          <Route exact path="/billing" component={Protect(Billing)} /> */}
          <Route component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
