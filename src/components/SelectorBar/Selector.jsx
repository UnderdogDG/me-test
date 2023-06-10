import styled from "styled-components";

function SelectorBar(){
    return(
        <SelectorContainer>
            <SelectorWrapper>
                <SelectorItem>
                    Item
                </SelectorItem>

            </SelectorWrapper>
        </SelectorContainer>
    );
};

const SelectorContainer = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const SelectorWrapper = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

`;

const SelectorItem = styled.li`
    width: 30%;
    max-width: 200px;
    padding: 15px;
`;

export default SelectorBar;