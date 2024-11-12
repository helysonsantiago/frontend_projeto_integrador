import React from "react";
import { StyledContainerSidebar, StyledBoxFaBars, StyledBoxFaUserCircle, StyledBoxInserir, StyledBoxRetirada} from "./styled-sidebar";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiInboxArchiveLine } from "react-icons/ri";



const SidebarComponent : React.FC = () : React.ReactElement => {
    const [showIcons, setShowIcons] = React.useState<boolean>(false);
    return <StyledContainerSidebar>
        <StyledBoxFaBars>
            <FaBars/>
        </StyledBoxFaBars>
        <StyledBoxFaUserCircle>
            <FaUserCircle />
        </StyledBoxFaUserCircle>
        <StyledBoxInserir>
            <RiInboxArchiveLine />
            <StyledBoxRetirada>Retirada</StyledBoxRetirada>
        </StyledBoxInserir>
    </StyledContainerSidebar>
}
export default SidebarComponent;