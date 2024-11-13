import styled from "styled-components";

export const StyledContainerUpdateItemModal = styled.div`
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
`;
