import React from "react";
import { StyledContainerCloseButton } from "./styled-close-button";
import { IoMdCloseCircle } from "react-icons/io";

interface propsCloseButton {
  close: () => void;
}
const CloseButton: React.FC<propsCloseButton> = (
  props: propsCloseButton
): React.ReactElement => {
  return (
    <StyledContainerCloseButton>
      <IoMdCloseCircle onClick={() => props.close()} />
    </StyledContainerCloseButton>
  );
};
export default CloseButton;
