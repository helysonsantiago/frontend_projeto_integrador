import styled from "styled-components";


export const StyledContainerRetirada = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
font-family: "Poppins", sans-serif;
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
