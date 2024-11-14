import styled from "styled-components";

export const StyledContainerGeneralConfigs = styled.div`
  min-height: 80%;
  flex: 1;
  margin-left: 40px;
  display: flex;
  justify-content: flex-start;
  width: 97%;
  flex-direction: column;
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;

  & button {
    font-family: "Poppins";
    margin-top: 40px;
    border: none;
    background: none;
    background-color: var(--verde);
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    color: white;
    width: 200px;
    cursor: pointer;
  }

  & div {
    border-bottom: 1px solid #f1f1f1;
    padding: 10px;
    margin-top: 40px;
    margin-right: 10px;
    color: #303030;
    font-size: 20px;
    width: 40%;
    display: flex;
    justify-content: space-between;
    & img {
      height: 100px;
      border-radius: 10px;
      cursor: not-allowed;
    }
    & svg {
      cursor: pointer;
    }
    & input {
      border: none;

      &:disabled {
        color: #303030;
        font-size: 20px;
      }

      &:enabled {
        border: 1px solid var(--verde);
        padding: 10px;
        border-radius: 10px;
        font-size: 19px;
      }
    }
  }
`;
