import styled from "styled-components";

import logo from '../../images/rym_logo.png';
import { useContext } from "react";
import { AppContext } from "../../hooks/AppContext";

function Header(){

    const { state, setState } = useContext( AppContext );

    const changeView = ()=>{
        setState(prev=>prev.changeViewToggle());
    }

    return(
        <HeaderContainer>
            <HeaderWrapper onClick={ ()=>changeView()}>
                <img src={ logo } alt="rick y morty"/>
            </HeaderWrapper>
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
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
        max-width: 300px;
        cursor: pointer;
    }
`;

export default Header;