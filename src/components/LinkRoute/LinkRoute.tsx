import { FC } from "react";
import * as S from "./style";

interface Props {
  to: string;
  children: string;
}

const LinkRoute: FC<Props> = (props) => {
  return (
    <S.Container>
      <S.Warning>존재하지 않는 경로입니다!</S.Warning>
      <S.LinkTo {...props}>Move to {props.children} Page</S.LinkTo>
    </S.Container>
  );
};

export default LinkRoute;
