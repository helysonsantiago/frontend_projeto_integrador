import styled from "styled-components";

export const StyledContainerNewItemStock = styled.div`
  font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;

  height: 100vh;
  width: 120%;
  flex: 1;
  position: absolute;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 50%);

  & main {
    height: 300px;
    background-color: #fff;
    border: 2px solid #2b555c;
    width: 650px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & svg {
    font-size: 50px;
    cursor: pointer;
    position: absolute;
    right: 300px;
    top: 20px;
    color: white;
    background-color: rgb(255, 255, 255, 10%);
    border-radius: 50%;
  }
`;

export const StyledBoxNewItemStock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  & input {
    border: none;
    background-color: none;
    outline: none;
    border: 1px solid #5c5c5c;
    background-color: #f1f1f1;
    border-radius: 10px;
    height: 60px;
    padding: 10px;
    margin: 7px;
    
    &:disabled{
        cursor: not-allowed;
        user-select: none;
    }
  }

  & img {
    height: 180px;
    border-radius: 10px;
  }
  &:nth-child(1) div {
    display: flex;
    flex-direction: column;
    width: 65%;
  }
  &:nth-child(2) {
    & input {
      width: 70%;
    }

    & button {
      height: 60px;
      border: none;
      background: none;
      background-color: var(--verde);
      border-radius: 10px;
      width: 22%;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
