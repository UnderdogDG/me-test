import styled from "styled-components";

function Card(){
    return(
        <CardContainer>

        </CardContainer>
    );
}

const CardContainer = styled.div`
    width: 30%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: ${ ({ theme })=> theme.color.bg_white };
`;

export default Card;