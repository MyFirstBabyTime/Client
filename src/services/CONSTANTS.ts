export const SIGN_UP_SEND_CERTIFY_CODE = (phoneNumber: string) =>
  `/phones/phone-number/${phoneNumber}/certify-code`;
export const SIGN_UP_GET_CERTIFICATION = (phoneNumber: string) =>
  `/phones/phone-number/${phoneNumber}/certification`;
export const SIGN_UP_CHECK_ID_DUPLICATION = (id: string) =>
  `/parents/id/${id}/existence`;
export const SIGN_UP_CREATE_PARENT_ACCOUNT = () => "/parents";

export const SIGN_IN = () => "/login/parent";

export const REGISTER_CHILDREN = (parentUuid: string) => `/parents/uuid/${parentUuid}/children`;
