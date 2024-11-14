import { useState } from "react";
import { IoImage } from "react-icons/io5";
import { BiArchiveIn } from "react-icons/bi";
import {
    StyledContainerForm,
    StyledContainerRetirada,
    StyledContentRetirada,
    StyledHistoricoContainer,
    StyledHistoricoItem,
    StyledHistoricoTitle,
    StyledTitleRetirada,
} from "./styledRetirada";

const Retirada = () => {
    const [codigo, setCodigo] = useState("");
    const [profissional, setProfissional] = useState("");
    const [descricao, setDescricao] = useState("");
    const [nomeProduto, setNomeProduto] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [historico, setHistorico] = useState([]);

    const handleRetirar = () => {
        console.log("Função handleRetirar foi chamada!"); 
        
       
        const novoHistorico = {
            codigo,
            profissional,
            descricao,
            nomeProduto,
            quantidade,
        };

        console.log("Novo item de histórico:", novoHistorico); 

        
        setHistorico([novoHistorico, ...historico]);
        setCodigo("");
        setProfissional("");
        setDescricao("");
        setNomeProduto("");
        setQuantidade("");
    };

    return (
        <StyledContainerRetirada>
            <StyledTitleRetirada>
                <h1>Retirada</h1>
            </StyledTitleRetirada>
            <StyledContainerForm>
                <IoImage className="ioimage" />
                <StyledContentRetirada>
                    <div>
                        <div className="formcima">
                            <input
                                placeholder="Código do produto"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                            />
                            <input
                                placeholder="Profissional"
                                list="lstprof"
                                value={profissional}
                                onChange={(e) => setProfissional(e.target.value)}
                            />
                            <datalist id="lstprof">
                                <option value="DR. ">Doutor</option>
                                <option value="DRA. ">Doutora</option>
                            </datalist>
                            <input
                                placeholder="Descrição"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="formbaixo">
                        <input
                            placeholder="Nome do produto"
                            value={nomeProduto}
                            onChange={(e) => setNomeProduto(e.target.value)}
                        />
                        <input
                            placeholder="Quantidade"
                            type="number"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                        <span className="retirabutton" onClick={handleRetirar}>
                            Retirar <BiArchiveIn />
                        </span>
                    </div>
                    
                </StyledContentRetirada>
                
            </StyledContainerForm>
   


 <div>        
 <StyledHistoricoTitle>
        <h2>Histórico</h2>
        <hr className="linha-horizontal" />
    </StyledHistoricoTitle>
    
    {historico.length > 0 ? (
        <StyledHistoricoContainer>
            {historico.map((item, index) => (
               <StyledHistoricoItem key={index}>
               <div className="top-row">
                   <div className="info">
                     <p>Código: <span>{item.codigo}</span></p>
                   </div>
                   <div className="info">
                     <p>Profissional: <span>{item.profissional}</span></p>
                   </div>
                   <div className="info">
                     <p>Descrição: <span>{item.descricao}</span></p>
                   </div>
               </div>
               <div className="bottom-row">
                   <div className="info">
                     <p>Nome do Produto: <span>{item.nomeProduto}</span></p>
                   </div>
                   <div className="info">
                     <p>Quantidade: <span>{item.quantidade}</span></p>
                   </div>
               </div>
             </StyledHistoricoItem>
            ))}
        </StyledHistoricoContainer>
    ) : (
        <p>Nenhuma retirada registrada.</p>
    )}
</div>
        </StyledContainerRetirada>
    );
};

export default Retirada;
