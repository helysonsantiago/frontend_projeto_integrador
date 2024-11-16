// eslint-disable-file no-use-before-define 

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


interface HistoricoItem {
    codigo: string;
    profissional: string;
    descricao: string;
    nomeProduto: string;
    quantidade: string;
}

const Retirada: React.FC = () => {
    const [codigo, setCodigo] = useState<string>("");
    const [profissional, setProfissional] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [nomeProduto, setNomeProduto] = useState<string>("");
    const [quantidade, setQuantidade] = useState<string>("");
    const [historico, setHistorico] = useState<HistoricoItem[]>([]);

    const handleRetirar = () => {
        console.log("Função handleRetirar foi chamada!");

        const novoHistorico: HistoricoItem = {
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
