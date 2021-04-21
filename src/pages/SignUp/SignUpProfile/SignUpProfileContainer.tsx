import { FC, useContext } from 'react';
import { SignUpContext } from '../../../contexts/SignUpContext';
import { SignUpProfileView } from './SignUpProfileView';

export const SignUpProfileContainer: FC = () => {
    const { onIncreasePageNum } = useContext(SignUpContext);

    return <SignUpProfileView onIncreasePageNum={onIncreasePageNum} />
}