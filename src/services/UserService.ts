import axios from "axios";
import { responseApiType } from "../types/response-api/responseApiTypes";
import { BASE_URL } from "../config/api";
import { userUpdate } from "../pages/general-configs/GeneralConfigs";

class UserService {
  static async getUserByID(user: userUpdate): Promise<responseApiType> {
    try {
      const response = await axios.put(
        `${BASE_URL}usuario/${user.id}`,
        user,
        {
  
        }
      );

      console.log(response);

      if (response.status === 200) {
        
        sessionStorage.removeItem("user_name", );
        sessionStorage.removeItem("user_email");
        sessionStorage.removeItem("user_id");

        sessionStorage.setItem("user_name", response.data[0]?.nome);
        sessionStorage.setItem("user_email", response.data[0]?.email);
        sessionStorage.setItem("user_id", response.data[0]?.id);
        sessionStorage.setItem("password", "*************");
      }

      return { code: 200, message: "Ok" };
    } catch (error) {
      console.error("Erro ao pegar usuário: ", error);
      return { code: 500, message: "Erro no servidor" };
    }
  }
}
export default UserService;
