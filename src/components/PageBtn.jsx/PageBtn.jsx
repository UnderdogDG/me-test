import styled from "styled-components";

function PageBtn({num, url}){
    return(
        <ButtonSquare>
            { num }
        </ButtonSquare>
    );
};

const ButtonSquare = styled.button`
    width: 60px;
    height: 60px;
    background-color: ${ ({ theme })=> theme.color.buttonPage.enabled.bg};
    color: ${ ({ theme })=> theme.color.buttonPage.enabled.fontColor};
    border: ${ ({ theme })=> theme.color.buttonPage.enabled.border };
    border-radius: 8px;
`;

export default PageBtn;