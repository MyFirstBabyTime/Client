import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { REGISTER_CHILDREN, SIGN_IN, SIGN_UP, MAIN } from "./CONSTANTS";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import RegisterChildren from "../pages/RegisterChildren";
import Main from "../pages/Main";
import NotFound from "./NotFound";

const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to={SIGN_IN} />

        <Route exact path={SIGN_IN} component={SignIn} />
        <Route exact path={SIGN_UP} component={SignUp} />
        <Route exact path={REGISTER_CHILDREN} component={RegisterChildren} />
        <Route exact path={MAIN} component={Main} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
