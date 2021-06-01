import { FC } from 'react';
import MainBackground from '../../../assets/image/MainBackground.png';
import styled from 'styled-components';

const MainImgWrapper = styled.div`
width: 100%;
height: 500px;
`;

const MainImg = styled.img`
width: 100%;
height: 100%;
z-index: -10;
`;

const MainImgTitle = styled.h2`
font-size: 40px;
font-weight: bold;
line-height: 50px;
color: #fff;
position: absolute;
white-space: pre;
top: 200px;
left: 200px;
`;

const MainImgText = styled.p`
font-size: 22px;
line-height: 27px;
color: #fff;
position: absolute;
white-space: pre;
top: 350px;
left: 200px;
`;

const Title = '우리 모두\n육아는 처음이라';
const Text = '첫 육아라서 어떻게 해야할지 막막하신가요?\n저희 "육아는 처음이라"와 함께 전국의 부모들과 정보를 공유해보세요!';

export const MainBackgroundView: FC = () => {
  return (
    <MainImgWrapper>
      <MainImg src={MainBackground} />
      <MainImgTitle>{Title}</MainImgTitle>
      <MainImgText>{Text}</MainImgText>
    </MainImgWrapper>
  )
}