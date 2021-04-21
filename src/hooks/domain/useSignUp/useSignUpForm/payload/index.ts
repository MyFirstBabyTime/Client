export interface IFormData {
  id: string;
  pw: string;
  pwConfirm: string;
}

export interface IFormError {
  idError: boolean;
  pwError: boolean;
  pwConfirmError: boolean;
}
