import axios from "axios";
import { responseApiStock } from "../types/response-api/responseApiTypes";
import { BASE_URL } from "../config/api";
import { userModel } from "../types/user/usertypes";

class UserService {
  static async getUserByID(user: userModel): Promise<responseApiStock> {
    try {
      const { id } = user;

      const response = await axios.put(`${BASE_URL}usuario/${id}`, null, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return { code: 200, message: "Ok", stock: response.data };
    } catch (error) {
      console.error("Erro ao pegar usuário: ", error);
      return { code: 500, message: "Erro no servidor" };
    }
  }
}
export default UserService;
