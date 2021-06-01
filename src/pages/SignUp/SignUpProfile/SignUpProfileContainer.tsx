import { ChangeEvent, FC } from 'react';
import useSignUpProfileUseCase from '../../../hooks/useCase/useSignUpUseCase/useSignUpProfileUseCase';
import { SignUpProfileView } from './SignUpProfileView';

export const SignUpProfileContainer: FC = () => {
    const {
        state: { thumbnail, profileData, nameError },
        setState: { setThumbnail, setProfileData, setNameError },
        useCase: { createParentAccountUseCase }
    } = useSignUpProfileUseCase();

    const onChangeProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.value) return;

        const reader = new FileReader();

        setProfileData({
            ...profileData,
            profile: e.target?.files[0],
        });

        reader.onload = function (e) {
            setThumbnail(e.target?.result?.toString());
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileData({
            ...profileData,
            name: e.target.value
        });
    }

    const onClickSignUpBtn = () => {
        if (profileData.name.length > 10) {
            setNameError(true);
            return;
        }
        createParentAccountUseCase();
    }

    return <SignUpProfileView onChangeProfileImg={onChangeProfileImg} thumbnail={thumbnail} onChangeName={onChangeName} nameError={nameError} onClickSignUpBtn={onClickSignUpBtn} />
}