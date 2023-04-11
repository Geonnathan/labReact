const URL_API = "https://localhost:7086/";
const URL_APIUser =  URL_API+"users/DN/";
const URL_APIUserWebs = URL_API+"userWeb/";

//Users
export const GET_USER_LOGIN = URL_APIUser + "getUser";
export const GET_USER_REGISTER = URL_APIUser + "upsertUser";
//Webs
export const GET_USER_WEBS = URL_APIUserWebs + "getUserWebs";