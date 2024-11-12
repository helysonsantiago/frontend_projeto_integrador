
import { IoImage } from "react-icons/io5";
import { BiArchiveIn } from "react-icons/bi";
import { StyledContainerForm, StyledContainerRetirada, StyledContentRetirada, StyledTitleRetirada } from './styledRetirada';

const Retirada = () => {
    return (
        <StyledContainerRetirada>
            <StyledTitleRetirada>
                <h1>Retirada</h1>
            </StyledTitleRetirada>
            <StyledContainerForm>
            <IoImage className="ioimage"/>
                    <StyledContentRetirada >                  
                        <div>                       
                            <div className="formcima">
                                <input placeholder="Código do produto" />                                                                  
                                <input placeholder="Profisional" list="lstprof" /> 
                                    <datalist id="lstprof">                    
                                        <option value="DR. ">Doutor</option> 
                                        <option value="DRA. ">Doutora</option> 
                                    </datalist>         
                                <input placeholder="Descrição" />
                            </div>
                        </div>
                        <div className="formbaixo">
                            <input placeholder="Nome do produto" />
                            <input placeholder="Quantidade" />
                            <span className="retirabutton">Retirar<BiArchiveIn /></span>
                        </div>
                    </StyledContentRetirada >
            </StyledContainerForm>
            
        </StyledContainerRetirada>
    );
}

export default Retirada;
