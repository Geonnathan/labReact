import * as yup from "yup";

const userWebSChema = yup
    .object({
        webName : yup
        .string()
        .required('')
        .matches(/^[a-zA-Z0-9,@,.]+$/,'Solo puede contener letras'),
        url : yup
        .string()
        .required('')
    })
    .required();
export default userWebSChema;