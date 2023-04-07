import axios from "axios";
import {GET_USER_LOGIN,GET_USER_REGISTER} from '../assets/API/APILinks';


export async function postRegister(user: any){
   const headers = {
      'apiKey':'115700622',
      'secret':'123456'
   };
   const options={
      method:"POST",
      headers: headers,
      withCredentials: false,
      url: GET_USER_REGISTER,
      data: user,
   }
   return await axios
   .request(options).then(function(response){
      console.log(response.data.message);
      return response.status;
   }).catch(function(error){
      console.log(error);
   });
}

export async function getLogin(userLogin : any){
   const headers = {
      'apiKey':'115700622',
      'secret':'123456'
   };
   const options={
      method:"POST",
      headers: headers,
      withCredentials: false,
      url: GET_USER_LOGIN,
      data: userLogin,
   }
   return await axios
   .request(options).then(function(response){
      return response.data;
   }).catch(function(error){
      console.log(error);
   });
}