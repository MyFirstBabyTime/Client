import { FC, useContext, ChangeEvent } from 'react';
import { SignUpContext } from '../../../contexts/SignUpContext';
import useSignUpValidationUseCase from '../../../hooks/useCase/useSignUp/useSignUpValidationUseCase';
import { SignUpValidationView } from './SignUpValidationView';

export const SignUpValidationContainer: FC = () => {
    const { onIncreasePageNum } = useContext(SignUpContext);
    const {
        state: { isSentCertifyCode, validationData, validationError },
        setState: { setValidationData, setValidationError },
        useCase: { sendCertifyCodeUseCase, getCertificationUseCase }
    } = useSignUpValidationUseCase();

    const onChangeValidationData = (e: ChangeEvent<HTMLInputElement>) => {
        setValidationData({
            ...validationData,
            [e.target.name]: e.target.value,
        });
    }

    const onClickSendCertifyCodeBtn = () => {
        // 숫자가 아닌경우
        if (isNaN(parseInt(validationData.phoneNumber))) {
            setValidationError({
                ...validationError,
                phoneNumberError: true
            });
            return;
        }
        // 11자리가 아닌 경우
        if (validationData.phoneNumber.length !== 11) {
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

    const onClickGetCertificationBtn = async () => {
        // 숫자가 아닌 경우
        if (isNaN(parseInt(validationData.certifyCode))) {
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