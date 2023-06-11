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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default NavContainer;