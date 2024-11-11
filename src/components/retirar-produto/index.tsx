import './retirada.css';
import { IoImage } from "react-icons/io5";

const Retirada = () => {
    return (
        <div>
            <header>
                <h1>Retirada</h1>
            </header>
            <div className="retirada">
                <fieldset>
                    <div className="fieldset-content">
                        {/* Coloca o ícone ao lado dos inputs */}
                        <div className="icon-input-container">
                            <IoImage/>
                            <div className="input-container">
                                <input placeholder="Código do produto" />                                                                  
                                <input placeholder="Profissional" />
                                <input placeholder="Descrição" />
                            </div>
                        </div>
                        {/* Grupo de inputs adicionais */}
                        <div className="additional-inputs">
                            <input placeholder="Nome do produto" />
                            <input placeholder="Quantidade" />
                            <input placeholder="Retirar" />
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default Retirada;
