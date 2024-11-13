import React from "react";
import * as Redux from "react-redux";
import {
  StyledStockContainer,
  StyledBoxStock,
  StyledTitleEstoque,
} from "../stock/styled-stock";
import { CustomTsDispatch } from "../../hooks/dispatch";
import { getStock } from "../../slices/StockSlice";
import { stockModel, stockStates } from "../../types/stock/stockType";
import { FaClipboardList } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import ShowDescriptionModal from "../../modals/ShowDescription";
const Stock: React.FC = (): React.ReactElement => {
  const dispatch = CustomTsDispatch();
  const { stock, error_stock } = Redux.useSelector(
    (state: { stockStore: stockStates }) => state.stockStore
  );
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [toggle, setToggle] = React.useState<boolean>(true);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<stockModel | null>(null);

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  React.useEffect(() => {
    if (inputValue.trim() === "") {
      setToggle(true);
    } else if (inputValue.trim() !== "") {
      setToggle(false);
    }
  }, [inputValue]);

  React.useEffect(() => {
    dispatch(getStock());
  }, [dispatch, error_stock]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledStockContainer>
      <StyledTitleEstoque>
        <h1>Estoque</h1>
      </StyledTitleEstoque>

      <StyledBoxStock toggle={toggle}>
        <span>
          <input type="text" value={inputValue} onChange={handleChange} />
          <CiSearch />
          <p>Nº Código...</p>
        </span>
        <button>ADICIONAR</button>
      </StyledBoxStock>

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
          {itensToDisplay.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>R$ {item.preco}</td>
              <td>
                <FaClipboardList
                  onClick={() => {
                    setShowModal(!showModal);
                    setItem(item);
                  }}
                />
              </td>
              <td>
                <FaPencilAlt />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderPageNumbers()}
      {showModal ? (
        <ShowDescriptionModal showModal={handleModal} item={item} />
      ) : null}
    </StyledStockContainer>
  );
};

export default Stock;
