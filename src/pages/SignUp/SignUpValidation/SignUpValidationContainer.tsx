import React, { FC } from 'react';
import useSignUpValidationUseCase from '../../../hooks/useCase/useSignUp/useSignUpValidationUseCase';
import { SignUpValidationView } from './SignUpValidationView';

interface Props {
    onIncreasePageNum: () => void;
}

export const SignUpValidationContainer: FC<Props> = ({ onIncreasePageNum }) => {
    const {
        state: { isSentCertifyCode, validationData, validationError },
        setState: { setValidationData, setValidationError },
        useCase: { sendCertifyCodeUseCase, getCertificationUseCase }
    } = useSignUpValidationUseCase();

    const onChangeValidationData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValidationData({
            ...validationData,
            [e.target.name]: e.target.value,
        });

        console.log(typeof validationData.certifyCode);
    }

    const onClickSendCertifyCodeBtn = () => {
        if (isNaN(parseInt(validationData.phoneNumber))) {
            setValidationError({
                ...validationError,
                phoneNumberError: true
            });
            return;
        }

        setValidationError({
            phoneNumberError: false,
            certifyCodeError: false
        });
        sendCertifyCodeUseCase();
    }

    const onClickGetCertificationBtn = () => {
        if (isNaN(validationData.certifyCode)) {
            setValidationError({
                ...validationError,
                certifyCodeError: true
            });
            return;
        }

        setValidationError({
            phoneNumberError: false,
            certifyCodeError: false
        });
        getCertificationUseCase();
    }

    return <SignUpValidationView
        isSentCertifyCode={isSentCertifyCode}
        validationError={validationError}
        onChangeValidationData={onChangeValidationData}
        onClickSendCertifyCodeBtn={onClickSendCertifyCodeBtn}
        onClickGetCertificationBtn={onClickGetCertificationBtn}
    />
}