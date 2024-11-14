import styled from "styled-components";

interface propsNavbar {
  active: number;
}

export const StyledContainerNavbar = styled.div<propsNavbar>`
  height: 80px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px;

  & li {
    padding: 20px;
    cursor: pointer;
    &:nth-child(${(props) => props.active}) {
      background-color: #f1f1f1;
      border-radius: 10px;
      padding: 20px;
    }
    & a {
      color: black;
    }
  }
`;
