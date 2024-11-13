import React from "react";
import { StyledContainerSidebar
    , StyledBoxFaBars
    , StyledBoxFaUserCircle
    , StyledBoxInserir
    , StyledBoxRetirada
    , StyledBoxCaixa2
    , StyledBoxEstoque
    , StyledBoxCaixa3
    , StyledBoxRelatorio
    , StyledBoxCaixa4
    , StyledBoxConfig
    , StyledBoxCaixa5
    , StyledBoxLogOut} from "./styled-sidebar";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiInboxArchiveLine } from "react-icons/ri";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { VscSettingsGear } from "react-icons/vsc";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";




const SidebarComponent : React.FC = () : React.ReactElement => {
    const [showIcons, setShowIcons] = React.useState<boolean>(true);
    
    const logOut = () => {
        localStorage.removeItem("current-user");
      };

    console.log(showIcons);
    return <StyledContainerSidebar toggle = {showIcons}>
        <StyledBoxFaBars toggle = {showIcons}>
            <FaBars onClick={() => setShowIcons(!showIcons)}/>
        </StyledBoxFaBars>
        <StyledBoxFaUserCircle toggle = {showIcons}>
            <FaUserCircle />
        </StyledBoxFaUserCircle>
        <Link to ="/retirada">
            <StyledBoxInserir toggle = {showIcons}>
                <RiInboxUnarchiveLine/>
                <StyledBoxRetirada toggle = {showIcons}><p>Retirada</p></StyledBoxRetirada>
            </StyledBoxInserir>
        </Link>

        <Link to = "/estoque">
            <StyledBoxCaixa2 toggle = {showIcons}>
                <RiInboxArchiveLine />
                <StyledBoxEstoque toggle = {showIcons}><p>Estoque</p></StyledBoxEstoque>
            </StyledBoxCaixa2>
        </Link>
        <Link to = "#">
            <StyledBoxCaixa3 toggle = {showIcons}>
                <HiOutlineDocumentReport />
                <StyledBoxRelatorio toggle = {showIcons}><p>Relatório</p></StyledBoxRelatorio>
            </StyledBoxCaixa3>
        </Link>
        <Link to = "#">
            <StyledBoxCaixa4 toggle = {showIcons}>
                <VscSettingsGear />
                <StyledBoxConfig toggle = {showIcons}><p>Configurações</p></StyledBoxConfig>
            </StyledBoxCaixa4>
        </Link>
        <StyledBoxCaixa5 href="/" onClick={logOut} toggle = {showIcons}>
            <IoLogOutOutline />
            <StyledBoxLogOut toggle = {showIcons}><p>LogOut</p></StyledBoxLogOut>
        </StyledBoxCaixa5>
    </StyledContainerSidebar>
}
export default SidebarComponent;