export interface IRegisterChildrenForm {
  name: string;
  birth: string;
  sex: 'male' | 'female';
  profile?: File | undefined;
}