import { FC } from 'react';
import { SignUpFormView } from './SignUpFormView';

interface Props {
    onIncreasePageNum: () => void;
}

export const SignUpFormContainer: FC<Props> = ({ onIncreasePageNum }) => {
    return <SignUpFormView onIncreasePageNum={onIncreasePageNum} />
}