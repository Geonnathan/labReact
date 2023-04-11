import * as yup from "yup";

const userSChema = yup
    .object({
        email : yup
        .string()
        .required('')
        .matches(/^[a-zA-Z0-9,@,.]+$/,'Solo puede contener letras'),
        password : yup
        .string()
        .required('')
    })
    .required();
export default userSChema;