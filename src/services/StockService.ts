import axios from "axios";
import { responseApiStock } from "../types/response-api/responseApiTypes";
import { BASE_URL } from "../config/api";

class StockService {
    static async getStock(): Promise<responseApiStock> {
     try{
      const response  = await axios.get(BASE_URL+"estoque");
      return {code: 200, message: "Ok", stock : response.data};
     }catch(error){
      console.error("Erro ao solicitar estoque:", error);
      return {code: 500, message: "Erro ao solicitar estoque"};
     }
    }
  }
  
  export default StockService;