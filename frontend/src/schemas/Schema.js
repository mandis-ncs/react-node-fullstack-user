import * as yup from "yup";

export const validationSchemaUser = yup.object({
    email: yup.string()
        .email("E-mail inválido")
        .required("O e-mail é obrigatório"),
    name: yup.string()
        .trim()
        .min(1, "O nome é obrigatório")
        .required("O nome é obrigatório"),
});