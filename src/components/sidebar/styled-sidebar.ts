import styled from 'styled-components';

export const StyledContainerSidebar = styled.nav`
  width: 20vw;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--verde);
  position: fixed;
  padding: 20px 0px 0px 5px ;



`;

export const StyledBoxFaBars = styled.div`
    & svg{
    color: white;
    font-size: 4.5vh;
  }
  padding-left: 18px;
`;

export const StyledBoxFaUserCircle = styled.div`
    & svg{
        color: white;
        font-size: 14vh;
    }
    padding: 20px 0px 0px 121.5px;
    
`;

export const StyledBoxInserir = styled.div`
    & svg{
        color: white;
        font-size: 50px;
    }
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 135px 10px 18px ;
    border-radius: 6px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4); 
        opacity: 0.9;
    }
`;

export const StyledBoxRetirada = styled.div`

    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: white;
    font-size: 28px;
    padding: 0 0 0 63px
`;