import { ChangeEvent, FC, useContext } from 'react';
import { SignUpContext } from '../../../contexts/SignUpContext';
import { useSignUpForm } from '../../../hooks/domain/useSignUp';
import { SignUpFormView } from './SignUpFormView';

export const SignUpFormContainer: FC = () => {
    const { state: { formData, idError, pwError, pwConfirmError }, setState: { setFormData, setIdError, setPwError, setPwConfirmError } } = useSignUpForm();
    const { onIncreasePageNum } = useContext(SignUpContext);

    const onChangeFormData = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const onClickNextBtn = () => {
        if (callFormatCheckFuncs()) return;
        onIncreasePageNum();
    }

    const callFormatCheckFuncs = (): boolean => {
        const isIdError = checkFormId(),
            isPwError = checkFormPw(),
            isPwConfirmError = checkFormPwConfirm();

        return isIdError || isPwError || isPwConfirmError;
    }

    const checkFormId = (): boolean => {
        if (formData.id.length < 4 || formData.id.length > 20) {
            setIdError(true);
            return true;
        }
        setIdError(false);
        return false;
    }

    const checkFormPw = (): boolean => {
        if (formData.pw.length < 6 || formData.pw.length > 20) {
            setPwError(true);
            return true;
        }
        setPwError(false);
        return false;
    }

    const checkFormPwConfirm = (): boolean => {
        if (formData.pwConfirm !== formData.pw || !formData.pwConfirm) {
            setPwConfirmError(true);
            return true;
        }
        setPwConfirmError(false);
        return false
    }

    return <SignUpFormView onChangeFormData={onChangeFormData} onClickNextBtn={onClickNextBtn} idError={idError} pwError={pwError} pwConfirmError={pwConfirmError} />
}