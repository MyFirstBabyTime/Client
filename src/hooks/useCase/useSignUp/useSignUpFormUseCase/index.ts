import { useSignUpForm } from "../../../domain/useSignUp";

const useSignUpFormUseCase = () => {
  const {
    state: { formData, formError },
    setState: { setFormData, setFormError },
  } = useSignUpForm();
};

export default useSignUpFormUseCase;
