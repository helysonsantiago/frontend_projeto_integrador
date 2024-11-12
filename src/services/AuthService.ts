import axios from "axios";
import { user, userCredentials } from "../types/auth/authType";
// Define a URL base para o json-server
const BASE_URL = "http://localhost:3000/";

export interface DATAAPI{
    code?: number;
    message?: string;
    auth?: string; 
    user ?:  user;
}

class AuthService {
  static async signin(login: userCredentials ): Promise<DATAAPI> {
   try{
    const response  = await axios.get(BASE_URL+"usuario");
    console.log(response?.data)
    if(response.data[0]?.email === login.email && response.data[0]?.password === login.password){
        return {code: 200, message: "Login efetuado com sucesso!"};
    }
    return {code: 400, message: "Verifique os dados e tente novamente"};
   }catch(error){
    console.error("Erro ao fazer login:", error);
    return {code: 500, message: "Erro ao fazer login"};
   }
  }
}

export default AuthService;
