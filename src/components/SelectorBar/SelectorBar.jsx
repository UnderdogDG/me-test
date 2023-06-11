import styled from "styled-components";

function SelectorBar(){
    return(
        <SelectorContainer>
            <SelectorWrapper>
                <SelectorItem>
                    Character
                </SelectorItem>
                <SelectorItem>
                    Location
                </SelectorItem>
                <SelectorItem className="active">
                    Episode
                </SelectorItem>

            </SelectorWrapper>
        </SelectorContainer>
    );
};

const SelectorContainer = styled.div`
    width: 100%;
    max-width: ${({ theme })=>theme.breakpoints.xxl};
    padding: 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
`;

const SelectorWrapper = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: stretch;
`;

const SelectorItem = styled.li`
    width: 30%;
    max-width: 200px;
    padding: 15px;
    margin: 0 10px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;

    &.active{
        border: 2px solid #40C4FF;
        border-radius: 8px;
    }
`;

export default SelectorBar;