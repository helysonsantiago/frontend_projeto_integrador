
import styled from 'styled-components';
interface propsSidebar{
    toggle:boolean;
}

export const StyledContainerSidebar = styled.div<propsSidebar>`


  min-height: 100vh;
  position: sticky;
  top: 0;
  flex: 0 0 7%;

  display: flex;
  justify-content: left;
  align-items: flex-start;  
  flex-direction: column;
  background-color: var(--verde);


  
    max-width: ${(props) => {return props.toggle ? '5vw':'20vw'}};
    align-items: ${(props) => {return props.toggle ? 'center':'flex-start'}};
    padding: ${(props) => {return props.toggle ? '20px 5px 0px 5px':'20px 5px 0px 5px'}};

`;

export const StyledBoxFaBars = styled.div <propsSidebar>`
    & svg{
    color: white;
    font-size: 4.5vh;
  }
  margin-left: 17px;
  padding:5px 5px 1px 5px;
  border-radius: 6px;
  margin-left: ${(props) => {return props.toggle ? '0px':'17px'}};

  &:hover {
        background-color: rgba(255, 255, 255, 0.4); 
        opacity: 0.9;
    }
`;

export const StyledBoxFaUserCircle = styled.div <propsSidebar>`
    & svg{
        color: white;
        font-size: 14vh;
        font-size: ${(props) => {return props.toggle ? '9vh':'14vh'}};
    }
    padding: 20px 0px 0px 121.5px;
    padding: ${(props) => {return props.toggle ? '40px 0px 0px 1px':'20px 0px 0px 121.5px'}};
    
`;

export const StyledBoxInserir = styled.a <propsSidebar>`
    & svg{
        color: white;
        font-size: 50px;
    }
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;

    padding: ${(props) => {return props.toggle ? '10px 16px 10px 16px':'10px 0px 10px 18px'}};
    width: ${(props) => {return props.toggle ? 'auto':'19.4vw'}};
    margin-top: ${(props) => {return props.toggle ? '66px':'40px'}};
    flex-direction: ${(props) => {return props.toggle ? 'column':'row'}};

    &:hover {
        background-color: rgba(255, 255, 255, 0.4); 
        opacity: 0.9;
    }
`;

export const StyledBoxRetirada = styled.div <propsSidebar>`
    font-family:'Poppins', sans-serif;
    color: white;
    font-size: 28px;
    padding: 0 0 0 63px;
    font-weight: 500;
    padding: ${(props) => {return !props.toggle ? '0px 0px 0px 63px':'0 0 0 0'}};

    & p{
        display: ${(props) => {return !props.toggle ? 'block':'none'}};
    }
`;

export const StyledBoxCaixa2 = styled.a <propsSidebar>`
    & svg{
        color: white;
        font-size: 50px;
    }
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;

    padding: ${(props) => {return props.toggle ? '10px 16px 10px 16px':'10px 0px 10px 18px'}};
    width: ${(props) => {return props.toggle ? 'auto':'19.4vw'}};
    flex-direction: ${(props) => {return props.toggle ? 'column':'row'}};

    &:hover {
        background-color: rgba(255, 255, 255, 0.4); 
        opacity: 0.9;
    }
`;

export const StyledBoxEstoque = styled.div <propsSidebar>`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 28px; 
    font-weight: 500;

    padding: ${(props) => {return !props.toggle ? '0px 0px 0px 63px':'0 0 0 0'}};

    & p{
        display: ${(props) => {return !props.toggle ? 'block':'none'}};
    }
`;

export const StyledBoxCaixa3 = styled.div <propsSidebar>`
    & svg{
        color: white;
        font-size: 50px;
    }
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;

    padding: ${(props) => {return props.toggle ? '10px 16px 10px 16px':'10px 0px 10px 18px'}};
    width: ${(props) => {return props.toggle ? 'auto':'19.4vw'}};
    flex-direction: ${(props) => {return props.toggle ? 'column':'row'}};

    &:hover {
        background-color: rgba(255, 255, 255, 0.4); 
        opacity: 0.9;
    }
`;

export const StyledBoxRelatorio = styled.div <propsSidebar>`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 28px;
    font-weight: 500;

    padding: ${(props) => {return !props.toggle ? '0px 0px 0px 63px':'0 0 0 0'}};

    & p{
        display: ${(props) => {return !props.toggle ? 'block':'none'}};
    }
`;

export const StyledBoxCaixa4 = styled.div <propsSidebar>`
    & svg{
        color: white;
        font-size: 45px;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;

    margin-top: ${(props) => {return props.toggle ? '42px':'40px'}};
    padding: ${(props) => {return props.toggle ? '10px 12px 10px 10px':'12px 0px 12px 19px'}};
    width: ${(props) => {return props.toggle ? 'auto':'19.4vw'}};
    flex-direction: ${(props) => {return props.toggle ? 'column':'row'}};

    &:hover {
        background-color: rgba(255, 255, 255, 0.4); 
        opacity: 0.9;
    }
`;

export const StyledBoxConfig = styled.div <propsSidebar>`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 28px;
    font-weight: 500;

    padding: ${(props) => {return props.toggle ? '0px 0px 0px 63px':'0 0 0 63px'}};

    & p{
        display: ${(props) => {return !props.toggle ? 'block':'none'}};
    }
`;

export const StyledBoxCaixa5 = styled.a <propsSidebar>`
    & svg{
        color: white;
        font-size: 45px;
    }
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;

    margin-top: ${(props) => {return props.toggle ? '220px':'218px'}};
    padding: ${(props) => {return props.toggle ? '10px 18px 10px 20px':'10px 0px 10px 21px'}};
    width: ${(props) => {return props.toggle ? 'auto':'19.4vw'}};
    flex-direction: ${(props) => {return props.toggle ? 'column':'row'}};
    

    &:hover {
        background-color: rgba(255, 255, 255, 0.4); 
        opacity: 0.9;
    }
`;

export const StyledBoxLogOut = styled.div <propsSidebar>`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 28px;
    font-weight: 500;

    padding: ${(props) => {return !props.toggle ? '0px 0px 0px 63px':'0 0 0 0'}};

    & p{
        display: ${(props) => {return !props.toggle ? 'block':'none'}};
    }
`;