import styled from "styled-components";


export const StyledContainerRetirada = styled.div`
font-family: 'Poppins', sans-serif;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

`;

export const StyledTitleRetirada = styled.div`

height: 10%;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;

& h1{
    width: auto;
    display: inline-block;
    font-weight: 600;
    font-size: 40px;
    padding: 5px 30px;
    margin-left: 70px;
    margin-top: 70px;
    background-color: #218D9E;
    text-align: center;
    border-radius: 40px;
    color: white;
    user-select: none;
}

`;

export const StyledContainerForm = styled.form`
  background-color: white;
    border: 2px solid #2B555C;
    border-radius: 10px;
    font-size: 24px;
    margin: 0 auto;
    display: flex;
    margin-top: 140px;
    width: 160vh;
    position: relative;
    top: 0;
   padding: 0%;
   

    .ioimage {
    color: #218D9E;
    font-size: 280px; 
    margin-right: 15px; 
    cursor: pointer;
    }

    input{
        margin: 10px;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #2B555C;
        font-weight: 900;
        background-color: #F1F1F1;
        color: #5C5C5C;
        font-size: 20px;
     

    }

.formcima {
    display: flex;
}

.formcima input {
    width: 80%; 
    padding: 30px;
}

.formbaixo {
    display: flex;

}
.formbaixo input {
    display: flex;
    margin-right: 10px;
    width: 35%;
    
   
}

.retirabutton {
    
    padding: 17px;
    width: 440;
    margin-left: 80px;
    padding-left: px;
    display: flex;
    align-items: center;
    justify-content: center; 
    border-radius: 10px;
    font-weight: 900;
    background-color:  #218D9E;
    color: white;
    cursor: pointer;
}
`;

export const StyledContentRetirada = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

`;



export const StyledHistoricoTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #193236;
    margin-bottom: 15px;
    text-align: left;
    margin-left: 235px;
    padding-top: 30px;

    .linha-horizontal {
    border-top: 4px solid #193236; 
    width: 1450px;
    margin: 20px auto; 
    }
   
`;

export const StyledHistoricoContainer = styled.div`
    margin-left: 230px;
    width: 96%;
    display: flex;
    flex-direction: column;
    
`;

export const StyledHistoricoItem = styled.div`
    background-color: white;
    border: 2px solid #2B555C;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
    width: 90%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;



    .info {
        padding: 5px;
        background-color: #F1F1F1;
        border: 1px solid #2B555C;
        border-radius: 10px;
        text-align: center;
        width: 400px;
        height: 70px;
    }
        .info span {
        font-weight: bold;
        color: #333; /* Exemplo de cor */
    }

    .top-row,.bottom-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        justify-content: center; /* Centraliza os itens */
         margin-bottom: 10px; /* Espaçamento entre as linhas */
        
    }
    .top-row{
        height: 40px;
        margin-bottom: 40px;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;



