import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  SIGN_IN,
  SIGN_UP_FORM,
  SIGN_UP_VERIFICATION,
  SIGN_UP_PROFILE,
} from "./CONSTANTS";

const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to={SIGN_IN} />

        <Route exact path={SIGN_IN} />
        <Route exact path={SIGN_UP_FORM} />
        <Route exact path={SIGN_UP_VERIFICATION} />
        <Route exact path={SIGN_UP_PROFILE} />

        <Route path="*" />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
