import axios from "axios";
import {GET_USER_WEBS, POST_USER_WEBS} from '../assets/API/APILinks';

export async function getUsersWebs(idUser : any){
    const headers = {
    'apiKey':'115700622',
       'secret':'123456'
    };
    const options={
       method:"POST",
       headers: headers,
       withCredentials: false,
       url: GET_USER_WEBS,
       data: {"idUser":idUser},
    }
    return await axios
    .request(options).then(function(response){
       return response.data;
    }).catch(function(error){
       return error;
    });
 }

 export async function postUsersWebs(webs : any){

   let idUser = sessionStorage.getItem('idUser');
   
   const headers = {
   'apiKey':'115700622',
      'secret':'123456'
   };
   const options={
      method:"POST",
      headers: headers,
      withCredentials: false,
      url: POST_USER_WEBS,
      data: {"idWeb": 0, "idUser": idUser, "webName": webs.webName, "url": webs.url},
   }
   return await axios
   .request(options).then(function(response){
      return response.data;
   }).catch(function(error){
      return error;
   });
}