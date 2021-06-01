export interface IValidationData {
  phoneNumber: string;
  certifyCode: string;
}

export interface IValidationError {
  phoneNumberError: boolean;
  certifyCodeError: boolean;
}
