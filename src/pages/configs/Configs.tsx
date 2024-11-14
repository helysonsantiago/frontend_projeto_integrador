import React from "react";
import { StyledContainerConfigs } from "./styled-config";
import Navbar from "../../components/navbar/Navbar";
import GeneralConfigs from "../general-configs/GeneralConfigs";

const Configs: React.FC = (): React.ReactElement => {
  const [value, setValue] = React.useState<number>(0);

  const handleSetValue = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <StyledContainerConfigs>
      <Navbar setValue={handleSetValue} />

      {value === 1 && <GeneralConfigs/>}
    </StyledContainerConfigs>
  );
};

export default Configs;
