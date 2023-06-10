import styled from "styled-components";

function NavContainer({ children }){
    return(
        <Nav>
            { children }
        </Nav>
    );
}

const Nav = styled.nav`
    width: 100%;
    padding: 20px 30px;
`;

export default NavContainer;