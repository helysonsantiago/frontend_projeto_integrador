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




const SidebarComponent : React.FC = () : React.ReactElement => {
    const [showIcons, setShowIcons] = React.useState<boolean>(true);
    console.log(showIcons);
    return <StyledContainerSidebar toggle = {showIcons}>
        <StyledBoxFaBars toggle = {showIcons}>
            <FaBars onClick={() => setShowIcons(!showIcons)}/>
        </StyledBoxFaBars>
        <StyledBoxFaUserCircle toggle = {showIcons}>
            <FaUserCircle />
        </StyledBoxFaUserCircle>
        <StyledBoxInserir toggle = {showIcons}>
            <RiInboxUnarchiveLine/>
            <StyledBoxRetirada toggle = {showIcons}><p>Retirada</p></StyledBoxRetirada>
        </StyledBoxInserir>
        <StyledBoxCaixa2 toggle = {showIcons}>
            <RiInboxArchiveLine />
            <StyledBoxEstoque toggle = {showIcons}><p>Estoque</p></StyledBoxEstoque>
        </StyledBoxCaixa2>
        <StyledBoxCaixa3 toggle = {showIcons}>
            <HiOutlineDocumentReport />
            <StyledBoxRelatorio toggle = {showIcons}><p>Relatório</p></StyledBoxRelatorio>
        </StyledBoxCaixa3>
        <StyledBoxCaixa4 toggle = {showIcons}>
            <VscSettingsGear />
            <StyledBoxConfig toggle = {showIcons}><p>Configurações</p></StyledBoxConfig>
        </StyledBoxCaixa4>
        <StyledBoxCaixa5 toggle = {showIcons}>
            <IoLogOutOutline />
            <StyledBoxLogOut toggle = {showIcons}><p>LogOut</p></StyledBoxLogOut>
        </StyledBoxCaixa5>
    </StyledContainerSidebar>
}
export default SidebarComponent;