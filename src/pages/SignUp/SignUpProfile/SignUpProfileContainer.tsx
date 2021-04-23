import { ChangeEvent, FC } from 'react';
import useSignUpProfileUseCase from '../../../hooks/useCase/useSignUp/useSignUpProfileUseCase';
import { SignUpProfileView } from './SignUpProfileView';

export const SignUpProfileContainer: FC = () => {
    const {
        state: { name, nameError },
        setState: { setName, setNameError },
        useCase: { createParentAccountUseCase }
    } = useSignUpProfileUseCase();

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onClickSignUpBtn = () => {
        if (name.length > 10) {
            setNameError(true);
            return;
        }
        createParentAccountUseCase();
    }

    return <SignUpProfileView onChangeName={onChangeName} nameError={nameError} onClickSignUpBtn={onClickSignUpBtn} />
}