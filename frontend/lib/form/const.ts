type formInput = {
  name: "email" | "password";
  placeholder: string;
  errorMsg: string;
};

export const formInputFields: formInput[] = [
  {
    name: "email",
    placeholder: "Enter Email",
    errorMsg: "This is required",
  },
  {
    name: "password",
    placeholder: "Password",
    errorMsg: "This is required",
  },
];
