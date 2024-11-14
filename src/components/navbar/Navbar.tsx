import React from "react";
import { StyledContainerNavbar } from "./styled-navbar";

interface propsNavbar {
  setValue: (value: number) => void;
}

const Navbar: React.FC<propsNavbar> = (
  props: propsNavbar
): React.ReactElement => {
  const [valueNav, setValueNav] = React.useState<number>(1);

  React.useEffect(() => {
    props.setValue(valueNav);
  }, [valueNav, props]);

  return (
    <StyledContainerNavbar active={valueNav}>
      <>
        <li onClick={() => setValueNav(1)}>Geral</li>
        <li onClick={() => setValueNav(2)}>Avançado</li>
      </>
    </StyledContainerNavbar>
  );
};

export default Navbar;
