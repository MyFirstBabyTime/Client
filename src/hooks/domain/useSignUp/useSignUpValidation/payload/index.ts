export interface IValidationData {
  phoneNumber: string;
  certifyCode: number;
}

export interface IValidationError {
  phoneNumberError: boolean;
  certifyCodeError: boolean;
}
