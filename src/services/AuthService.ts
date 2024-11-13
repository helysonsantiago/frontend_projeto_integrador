import axios from "axios";
import {  userCredentials } from "../types/auth/authType";
import { responseApiType } from "../types/response-api/responseApiTypes";
import { BASE_URL } from "../config/api";

class AuthService {
  static async signin(login: userCredentials ): Promise<responseApiType> {
   try{
    const response  = await axios.get(BASE_URL+"usuario");
    if(response.data[0]?.email === login.email && response.data[0]?.password === login.password){
        localStorage.setItem("current-user","active");
        return {code: 200, message: "Login efetuado com sucesso!"};
    }
    return {code: 400, message: "Verifique os dados e tente novamente"};
   }catch(error){
    console.error("Erro ao fazer login:", error);
    return {code: 500, message: "Erro na conexão com o servidor"};
   }
  }

  

}

export default AuthService;
