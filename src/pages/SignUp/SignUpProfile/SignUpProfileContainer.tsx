import { FC } from 'react';
import { SignUpProfileView } from './SignUpProfileView';

interface Props {
    onIncreasePageNum: () => void;
}

export const SignUpProfileContainer: FC<Props> = ({ onIncreasePageNum }) => {
    return <SignUpProfileView onIncreasePageNum={onIncreasePageNum} />
}