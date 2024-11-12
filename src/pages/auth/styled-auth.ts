import { Form } from "formik";
import styled from "styled-components";

type ContainerAuthProps = {
  showPassword?: boolean;
};

export const StyledContainerAuth = styled.div<ContainerAuthProps>`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;

  & main {
    display: flex;
    height: 100%;
    width: 70vw;
    align-items: center;
    justify-content: space-between;
    background-color: #218d9e;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    background-image: var(--bgk-white);
  }
`;

export const StyledFormAuth = styled(Form)<ContainerAuthProps>`
  height: 98%;
  margin-right: 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Abel", sans-serif;

  .erro {
    height: 30px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    width: 340px;
    position: relative;

    @media (max-width: 350px) {
      margin-left: 80px;
      height: 22px;
      font-size: 13px;
    }
  }

  .erro .span {
    height: 100%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    width: auto;
    background-color: #f8d7dab4;
    border: 2px solid #de0000;
    color: #de0000;
    border-radius: 3px;
    padding: 10px;

    font-weight: 600;
    &:before {
      content: "";
      position: absolute;
      top: 100%;
      right: 80%;
      transform: rotate(-90deg);
      border: 8px solid transparent;
      border-right-color: #de0000a6;

      @media (max-width: 350px) {
        right: 0%;
      }
    }
  }

  a {
    font-family: "Poppins";
    font-size: 18px;
    margin-top: 20px;
    text-decoration: underline;
    font-weight: 600;
    color: var(--color-blue);

    @media (max-width: 350px) {
      font-size: 15px;
    }
  }

  a:hover {
    color: var(--color-orange);
  }
`;

export const StyledContentAuth = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  & h2{
    margin-bottom: 10px;
  }
`;

export const StyledInputAuth = styled.div<ContainerAuthProps>`
  margin-top: 10px;
  width: 340px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .icon {
    height: 100%;
    min-width: 57px;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    border-radius: 10px;
    border: 2px solid #808080;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: none;
    font-size: 30px;
    color: #808080;
    z-index: 99;
  }

  .input {
    height: 100%;
    z-index: 98;
    min-width: 290px;
    border: none;
    border: 2px solid #808080;
    border-left: 0;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    outline: none;
    padding: 10px;
    font-weight: 500;
    font-size: 24px;
    color: #444;
    white-space: nowrap; // Impede a quebra de linha
    overflow: hidden;
    font-family: "Poppins";
    text-overflow: ellipsis; //Adiciona três pontos (...)

    @media (max-width: 340px) {
      min-width: 200px;
      font-size: 20px;
    }
    &:hover {
      outline: 1px solid skyblue;
    }
    &:focus {
      border-color: #218d9e;
      outline: 1px solid skyblue;
    }
  }

  @media (max-width: 340px) {
    height: 50px;
    width: 200px;
  }
  .eye {
    z-index: 100;
    height: 90%;
    right: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 30px;
    cursor: pointer;
    color: #808080;
    background-color: white;
    @media (max-width: 350px) {
      width: 40px;
      font-size: 30px;
      right: -20px;
    }

    & svg {
      animation: show 0.5s linear;

      @keyframes show {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;

export const StyledLogoAuth = styled.img<ContainerAuthProps>`
  height: 250px;
  @media (max-width: 768px) {
    width: 508px;
    height: 100px;
  }

  @media (max-width: 380px) {
    height: 70px;
  }
`;

export const StyledButtonAuth = styled.button<ContainerAuthProps>`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #218d9e;
  border: none;
  outline: none;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  margin-top: 40px;
  position: relative;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    height: 50px;
    left: -25px;
    width: 50px;
    background-color: #218d9e;
  }

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    height: 50px;
    right: -25px;
    width: 50px;
    background-color: #218d9e;
  }

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    outline-offset: 0px;
  }

  @media (max-width: 350px) {
    margin-top: 30px;
    height: 40px;
    width: 140px;
    font-size: 20px;
  }
`;

export const StyledCheckbox = styled.div<ContainerAuthProps>`
  display: flex;
  width: 340px;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 350px) {
    width: 250px;
  }
  .checkbox {
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 3px;
    cursor: pointer;
  }

  .label {
    color: #808080;
    font-size: 14px;
    margin-left: 4px;
  }
`;
