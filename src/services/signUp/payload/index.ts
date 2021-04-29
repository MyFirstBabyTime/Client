export interface IValidationData {
  phoneNumber: string;
  certifyCode: string;
}

export interface IParentAccountForm {
  id: string;
  pw: string;
  name: string;
  phoneNumber: string;
  profile?: File | null;
}
