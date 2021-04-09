import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { SIGN_IN, SIGN_UP } from "./CONSTANTS";
import SignIn from "../pages/SignIn";
import SignUpRouterConfig from "./SignUp/SignUpRouterConfig";
import NotFound from "./NotFound";

const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to={SIGN_IN} />

        <Route exact path={SIGN_IN} component={SignIn} />
        <Route path={SIGN_UP} component={SignUpRouterConfig} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
