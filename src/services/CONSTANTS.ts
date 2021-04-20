export const SEND_CERTIFY_CODE = (phoneNumber: string) =>
  `/phones/phone-number/${phoneNumber}/certify-code`;
export const GET_CERTIFICATION = (phoneNumber: string) =>
  `/phones/phone-number/${phoneNumber}/certification`;
export const CREATE_PARENT_ACCOUNT = () => "/parents";
