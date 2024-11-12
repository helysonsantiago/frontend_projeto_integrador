import styled from "styled-components";

//interface propsStock {}
export const StyledStockContainer = styled.main`
  height: 0 auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;

  & table {
    border-collapse: collapse;
    flex: 1;
    width: 100%;
    text-align: center;
    font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;

    & thead {
      background-color: var(--verde);
      height: 60px;
      color: white;
    }

    & tbody tr {
      height: 60px;
    }

    & tbody tr:nth-child(odd) {
      background-color: #f7f6fe;
    }
    & tbody tr:nth-child(even) {
      background-color: #ffffff;
    }
  }

  & .pagination {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    & button {
      margin: 3px;
      height: 30px;
      width: 30px;
      cursor: pointer;
      border-radius: 10px;
      border: none;
      background-color: none;
      font-weight: 600;
    }
    & button {
      background-color: var(--verde);
      color: white;
    }
    & button:disabled {
      background-color: transparent;
      cursor: not-allowed;
      color: #707070;
      border: 1px solid gainsboro;
      height: 35px;
      width: 35px;
    }
  }
`;

export const StyledBoxContainer = styled.div`
  padding: 35px;
  border-radius: 26px;
  flex: 1;
  width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--verde);
  margin-bottom: 30px;

  & button{
    height: 50px;
    border: none;
    background-color: none;
    outline: none;
    color: white;
    background-color: rgb(255, 255, 255,40%);
    width: 180px;
    border-radius: 17px;
    cursor: pointer;
    box-shadow: 0px 4px  rgb(0, 0, 0,5%);
  }
`;
