import React from "react";
import {
  StyledContainerNewItemStock,
  StyledBoxNewItemStock,
} from "./styled-new-item-stock";
import img from "../../src/assets/imgDefault.png";
import CloseButton from "../components/closeButton/CloseButton";
interface propsNewItem {
  showNewItem: () => void;
}

const NewItemStockModal: React.FC<propsNewItem> = (
  props: propsNewItem
): React.ReactElement => {
  return (
    <StyledContainerNewItemStock>
      <main>
        <StyledBoxNewItemStock>
          <img src={img} alt="" />
          <div>
            <span>
              <input type="text" placeholder="Código do produto" />{" "}
              <input type="number" placeholder="Quantidade" />
            </span>
            <input type="text" placeholder="Nome do produto" />
          </div>
        </StyledBoxNewItemStock>
        <StyledBoxNewItemStock>
          {" "}
          <input type="test" placeholder="Descrição" /> <button>ADICIONAR</button>
        </StyledBoxNewItemStock>
      </main>

      <CloseButton close={props.showNewItem}/>
    </StyledContainerNewItemStock>
  );
};
export default NewItemStockModal;
