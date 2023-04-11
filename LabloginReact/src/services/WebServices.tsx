import axios from "axios";
import {GET_USER_WEBS} from '../assets/API/APILinks';

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