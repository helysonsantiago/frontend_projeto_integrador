import React from "react";
import { StyledContainerGeneralConfigs } from "./styled-general-configs";
import { CustomTsDispatch } from "../../hooks/dispatch";
import { FaPencilAlt } from "react-icons/fa";
import img from "../../assets/imgDefault.png";

const GeneralConfigs: React.FC = (): React.ReactElement => {
  const dispatch = CustomTsDispatch();

  const [nameUser, setUserName] = React.useState<string | null>("");
  const [emailUser, setEmailUser] = React.useState<string | null>("");
  const [idUser, setIdUser] = React.useState<string | null>("");
  const [password, setPassword] = React.useState<string | null>("");

  const [enableInputEmail, setEnableInputEmail] = React.useState<boolean>(true);
  const [enableInputName, setEnableInputName] = React.useState<boolean>(true);
  const [enableInputPassword, setEnableInputPassword] =
    React.useState<boolean>(true);

  React.useEffect(() => {
    setUserName(
      sessionStorage.getItem("user_name")
        ? sessionStorage.getItem("user_name")
        : null
    );
    setEmailUser(
      sessionStorage.getItem("user_email")
        ? sessionStorage.getItem("user_email")
        : null
    );
    setIdUser(
      sessionStorage.getItem("user_id")
        ? sessionStorage.getItem("user_id")
        : null
    );
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setUserName(newName);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setEmailUser(newName);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setPassword(newName);
  };

  return (
    <StyledContainerGeneralConfigs>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <input
          type="text"
          value={nameUser ? nameUser : ""}
          onChange={handleNameChange}
          disabled={enableInputName}
        />
        <FaPencilAlt onClick={() => setEnableInputName(!enableInputName)} />
      </div>
      <div>
        <input
          type="text"
          value={emailUser ? emailUser : ""}
          onChange={handleEmailChange}
          disabled={enableInputEmail}
        />
        <FaPencilAlt onClick={() => setEnableInputEmail(!enableInputEmail)} />
      </div>

      <div>
        <input
          type={enableInputPassword ? "password" : "text"}
          value={password ? password : ""}
          onChange={handlePasswordChange}
          disabled={enableInputPassword}
          placeholder="*********"
        />
        <FaPencilAlt
          onClick={() => setEnableInputPassword(!enableInputPassword)}
        />
      </div>

      <button>ATUALIZAR</button>
    </StyledContainerGeneralConfigs>
  );
};

export default GeneralConfigs;
