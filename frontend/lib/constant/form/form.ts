type TFormInputSignIn = {
  name: "email" | "password";
  placeHolder: string;
};

type TFormInputSignUp = {
  name:
    | "email"
    | "username"
    | "firstName"
    | "lastName"
    | "password"
    | "confirmPassword"
    | "mobile"
    | "birthday"
    | "address";
  placeHolder: string;
};

export const formInputFieldsSignUp: TFormInputSignUp[] = [
  {
    name: "email",
    placeHolder: "Enter Email",
  },
  {
    name: "username",
    placeHolder: "username",
  },
  {
    name: "firstName",
    placeHolder: "firstName",
  },
  {
    name: "lastName",
    placeHolder: "lastname",
  },
  {
    name: "password",
    placeHolder: "password",
  },

  {
    name: "confirmPassword",
    placeHolder: "confirm password",
  },
  {
    name: "mobile",
    placeHolder: "mobile",
  },
  {
    name: "birthday",
    placeHolder: "birthday",
  },
  {
    name: "address",
    placeHolder: "address",
  },
];

export const formInputFieldsSignIn: TFormInputSignIn[] = [
  {
    name: "email",
    placeHolder: "Enter Email",
  },

  {
    name: "password",
    placeHolder: "Password",
  },
];
