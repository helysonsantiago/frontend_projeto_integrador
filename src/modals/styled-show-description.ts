import styled from "styled-components";

export const StyledContainerShowDescription = styled.main`
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont,
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
  cursor: pointer;
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

  & div {
    display: flex;
    height: 440px;
    width: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    & p {
      background-color: #f1f1f1;
      height: 80%;
      width: 50%;
      padding: 10px;
      font-size: 20px;
      color: #5c5c5c;
      border: 1px solid #2b555c;
      border-radius: 10px;
    }

    & img {
      height: 200px;
    }
  }
`;
