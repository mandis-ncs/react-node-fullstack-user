import * as yup from "yup";

export const validationSchemaUser = yup.object({
  email: yup.required(),
  name: yup.required(),
});