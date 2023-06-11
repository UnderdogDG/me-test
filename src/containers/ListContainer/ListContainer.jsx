import styled from "styled-components";

function ListContainer({ children }){
    return(
        <List>
            <ListWrapper>
                { children }
            </ListWrapper>
        </List>
    );
};

const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const ListWrapper = styled.ul`
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    align-items: stretch;
`;

export default ListContainer;