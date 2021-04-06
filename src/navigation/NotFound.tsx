import React, { FC } from "react";
import LinkRoute from "../components/LinkRoute/index";
import { SIGN_IN } from "./CONSTANTS";

const NotFound: FC = () => {
  return <LinkRoute to={SIGN_IN}>Sign In</LinkRoute>;
};

export default NotFound;
