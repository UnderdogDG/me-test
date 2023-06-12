import styled from "styled-components";

import { useContext } from "react";
import { AppContext } from "../../hooks/AppContext";

import Card from "../../components/Card/Card";

function ListContainer({ children }){

    const { state } = useContext( AppContext );

    return(
        <List>
            <ListWrapper>
                {
                    state.characters.map( (e, i) =>
                        <Card { ...e } key={i}/>
                    )
                }
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
    flex-wrap: wrap;
`;

export default ListContainer;