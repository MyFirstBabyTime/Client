import { Switch, Route, Redirect } from "react-router-dom";
import { Background } from "../../components/Authentication/Background";
import { SignUpContainer } from "../../pages/SignUp/SignUpContainer";
import {
  SIGN_UP,
  SIGN_UP_FORM,
  SIGN_UP_VERIFICATION,
  SIGN_UP_PROFILE,
} from "../CONSTANTS";
import styled from "styled-components";

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SignUpRouterConfig = () => {
  return (
    <SContainer>
      <Background />
      <Switch>
        <Redirect exact path={SIGN_UP} to={SIGN_UP_FORM} />

        <Route exact path={SIGN_UP_FORM} component={SignUpContainer} />
        <Route exact path={SIGN_UP_VERIFICATION} />
        <Route exact path={SIGN_UP_PROFILE} />
      </Switch>
    </SContainer>
  );
};

export default SignUpRouterConfig;
