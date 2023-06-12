import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../hooks/AppContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectorBar from "../../components/SelectorBar/SelectorBar";
import SearchSublist from "../SearchSublist/SearchSublist";

function SublistContainer(){

    const { state } = useContext( AppContext );

    return(
        state.sublist
        ? (
            <SingleContainer>
                <SearchSublist />
            </SingleContainer>
        )
        :(
            <SingleContainer>
                <SearchBar />
            </SingleContainer>
        )
    );
};

const SingleContainer = styled.div`
    width: 100%;
`;

export default SublistContainer;