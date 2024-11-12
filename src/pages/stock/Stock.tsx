import React from "react";
import * as Redux from "react-redux";
import { StyledStockContainer, StyledBoxContainer } from "../stock/styled-stock";
import { CustomTsDispatch } from "../../hooks/dispatch";
import { getStock } from "../../slices/StockSlice";
import { stockStates } from "../../types/stock/stockType";
import { FaClipboardList } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";


const Stock: React.FC = (): React.ReactElement => {
  const dispatch = CustomTsDispatch();
  const { stock, error_stock } = Redux.useSelector(
    (state: { stockStore: stockStates }) => state.stockStore
  );
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(stock.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const itensToDisplay = stock.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  React.useEffect(() => {
    dispatch(getStock());
  }, [dispatch, error_stock]);

  return (
    <StyledStockContainer>
      
      
      <StyledBoxContainer>
        <input type="text" />
        <button>ADICIONAR</button>
      </StyledBoxContainer>

      
      <table>
        
        <thead>
          <th>Código</th>
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th>Descrição</th>
          <th></th>
        </thead>

        <tbody>
          {itensToDisplay.map((iten, index) => (
            <tr key={index}>
              <td>{iten.id}</td>
              <td>{iten.nome}</td>
              <td>{iten.quantidade}</td>
              <td>R$ {iten.preco}</td>
              <td><FaClipboardList/></td>
              <td><FaPencilAlt/></td>
            </tr>
          ))}
        </tbody>
      
      </table>
      {renderPageNumbers()}
    </StyledStockContainer>
  );
};

export default Stock;