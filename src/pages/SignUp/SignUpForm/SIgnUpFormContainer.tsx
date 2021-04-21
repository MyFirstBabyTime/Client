import { FC, useContext } from 'react';
import { SignUpContext } from '../../../contexts/SignUpContext';
import { SignUpFormView } from './SignUpFormView';

export const SignUpFormContainer: FC = () => {
    const { onIncreasePageNum } = useContext(SignUpContext);

    return <SignUpFormView onIncreasePageNum={onIncreasePageNum} />
}