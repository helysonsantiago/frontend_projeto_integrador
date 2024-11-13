import React from "react";
import { StyledContainerShowDescription } from "./styled-show-description";
//import { IoMdCloseCircle } from "react-icons/io";
import { stockModel } from "../types/stock/stockType";
import img from "../../src/assets/imgDefault.png";

interface propsDescriptionModal {
  showModal: () => void;
  item: stockModel | null;
}

const ShowDescriptionModal: React.FC<propsDescriptionModal> = (
  props: propsDescriptionModal
): React.ReactElement => {
  return (
    <StyledContainerShowDescription onClick={() => props.showModal()}>
   {/*   <IoMdCloseCircle /> */}

      {props.item !== null && (
        <div>
          <p>{props.item.descricao}</p>
          <img src={img} alt="test" />
        </div>
      )}
    </StyledContainerShowDescription>
  );
};

export default ShowDescriptionModal;
