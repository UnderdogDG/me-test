import styled from "styled-components";

import SelectorBar from "../../components/SelectorBar/SelectorBar";
import SublistContainer from "../SublistContainer/SublistContainer";

function NavContainer(){

    return(
        <Nav>
            <NavWrapper>
                <SelectorBar />
                <hr></hr>
                <SublistContainer />
            </NavWrapper>
        </Nav>
    );
}

const Nav = styled.nav`
    width: 100%;
    height: 100%;
    padding: 20px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const NavWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    min-width: 300px;
    padding: 20px;
    border-radius: 40px;
    background-color: ${ ({ theme })=>theme.color.modal.bg };
    box-shadow: ${ ({ theme })=>theme.shadow };
`

export default NavContainer;