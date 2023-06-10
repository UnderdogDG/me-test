import styled from "styled-components";

export function MainContainer({ children }){
    return(
        <Main>
            { children }
        </Main>
    )
};

const Main = styled.main`
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    background: rgb(73,163,60);
    background: linear-gradient(45deg, rgba(73,163,60,1) 6%, rgba(151,200,63,1) 88%);
`;