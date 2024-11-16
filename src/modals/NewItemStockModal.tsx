import React from "react";
import * as Redux from "react-redux";

import {
  StyledContainerNewItemStock,
  StyledBoxNewItemStock,
} from "./styled-new-item-stock";
import img from "../../src/assets/imgDefault.png";
import CloseButton from "../components/closeButton/CloseButton";
import { stockModel, stockStates } from "../types/stock/stockType";
import { CustomTsDispatch } from "../hooks/dispatch";
import { addList, newItemStock, resetStock } from "../slices/StockSlice";
import { toast } from "react-toastify";
interface propsNewItem {
  showNewItem: () => void;
}

const NewItemStockModal: React.FC<propsNewItem> = (
  props: propsNewItem
): React.ReactElement => {
  const { success_stock
   } = Redux.useSelector(
    (state: { stockStore: stockStates }) => state.stockStore
  );

  const dispatch = CustomTsDispatch();

  const [nome, setNome] = React.useState<string>("");
  const [descricao, setDescricao] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");
  const [qtd, setQtd] = React.useState<number>(0);
  const [preco, setPreco] = React.useState<number>(0);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setNome(newName);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(event.target.value);
    setPreco(newPrice);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newDescription = event.target.value;
    setDescricao(newDescription);
  };

  const handleQtdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQTd = Number(event.target.value);
    setQtd(newQTd);
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCode = event.target.value;
    setCode(newCode);
  };

  


  const newItem: stockModel = {
    id: code,
    quantidade: qtd,
    preco: preco,
    imagemUrl: "./",
    nome: nome,
    descricao: descricao,
  };

  const handleNewItem = () => {
    dispatch(newItemStock(newItem));
  };

  React.useEffect(() => {
    const notify = () => {
      if (typeof success_stock === "string") {
        toast.success(success_stock);
        dispatch(addList(newItem));
      }
    };
    notify();
    const timer = setTimeout(() => {
      dispatch(resetStock());
    }, 500);
    return () => clearTimeout(timer);
  }, [success_stock]);

  return (
    <StyledContainerNewItemStock>
      <main>
        <StyledBoxNewItemStock>
          <img src={img} alt="" />
          <div>
            <span>
              <input
                type="text"
                placeholder="Código do produto"
                value={code}
                onChange={handleCodeChange}
              />
              <input
                type="number"
                placeholder="Quantidade"
                value={qtd}
                onChange={handleQtdChange}
              />
            </span>
            <input
              type="text"
              placeholder="Nome do produto"
              value={nome}
              onChange={handleNameChange}
            />
          </div>
        </StyledBoxNewItemStock>
        <StyledBoxNewItemStock>
          <input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={handleDescriptionChange}
          />
           <input
            type="number"
            placeholder="Preço"
            min={1}
            value={preco}
            onChange={handlePriceChange}
          />
          <button onClick={handleNewItem}>ADICIONAR</button>
        </StyledBoxNewItemStock>
      </main>

      <CloseButton close={props.showNewItem} />
    </StyledContainerNewItemStock>
  );
};
export default NewItemStockModal;
