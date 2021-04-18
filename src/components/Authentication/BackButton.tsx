import { FC } from 'react';
import styled from 'styled-components';
import BackButtonIcon from '../../assets/image/BackButtonIcon.png';

const SContainer = styled.div`
    width: 100%;
    height: 2.8vh;
    padding-left: 3vw;
    margin-bottom: 7.9vh;
    box-sizing: border-box;
    cursor: pointer;
`

const SBackButton = styled.img`
    width: 0.8vw;
    height: 100%;
`

interface Props {
    onClick: () => void;
}

export const BackButton: FC<Props> = ({ onClick }) => {
    return (
        <SContainer onClick={onClick}>
            <SBackButton src={BackButtonIcon} />
        </SContainer>
    )
}