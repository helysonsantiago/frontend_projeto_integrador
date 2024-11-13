import axios from "axios";
import { responseApiStock } from "../types/response-api/responseApiTypes";
import { BASE_URL } from "../config/api";
import { stockModel } from "../types/stock/stockType";

class StockService {
  static async getStock(): Promise<responseApiStock> {
    try {
      const response = await axios.get(BASE_URL + "estoque");
      return { code: 200, message: "Ok", stock: response.data };
    } catch (error) {
      console.error("Erro ao solicitar estoque:", error);
      return { code: 500, message: "Erro ao solicitar estoque" };
    }
  }

  static async updateItem(updatedData: stockModel): Promise<responseApiStock> {
    try {
      const { descricao, quantidade, preco, nome, imagemUrl } = updatedData;
      const mod = {
        descricao,
        quantidade,
        preco,
        nome,
        imagemUrl,
      };

      const response = await axios.put(
        `${BASE_URL}estoque/${updatedData.id}`,
        mod,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return { code: 200, message: "Ok", stock: response.data };
    } catch (error) {
      console.error("Erro ao atualizar item: " + updatedData.id, error);
      return { code: 500, message: "Erro ao solicitar estoque" };
    }
  }

  static async newItemStock(newItem: stockModel): Promise<responseApiStock> {
    try {
      const response = await axios.post(`${BASE_URL}estoque`, newItem, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return { code: 200, message: "Ok", stock: response.data };
    } catch (error) {
      console.error("Erro ao adicionar item" + error);
      return { code: 500, message: "Erro ao solicitar estoque" };
    }
  }
}
export default StockService;
