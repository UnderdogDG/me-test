import styled from "styled-components";

function Header(){
    return(
        <HeaderContainer>

        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: ${ ({ theme })=>theme.breakpoints.xxl };
`;

export default Header;