import styled from "styled-components";

import { useContext } from "react";
import { AppContext } from "../../hooks/AppContext";

function SearchBar(){

    const { state, setState } = useContext( AppContext );

    const getData = async()=>{
        let res = await state.getData();
        setState(prev=>prev.setCharacters(res).changeToList(true));
    }

    return(
        <SearchContainer>
            <SearchWrapper>
                <SearchButton className="active" onClick={ ()=>getData() }>
                    All
                </SearchButton>
            </SearchWrapper>
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    width: 100%;
    max-width: ${ ({ theme })=>theme.breakpoints.xxl };
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
`;

const SearchInput = styled.input`
    width: 90%;
    height: 100%;
    padding: 8px;
    flex-grow: 1;
    border: 1px solid gray;
    border-right: none;
    border-radius: 8px 0 0 8px;
`;

const SearchButton = styled.button`
    width: 30%;
    min-width: 200px;
    max-width: 200px;
    padding: 15px;
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 120px;
    transform: scale(1.0);
    transition: transform 0.3s ease-out;
    box-shadow: ${ ({ theme })=>theme.shadow };
    border: ${ ({ theme })=> theme.color.buttonMulti.enabled.border };
    background-color: ${ ({ theme })=> theme.color.buttonMulti.enabled.bg};
    color: ${ ({ theme })=> theme.color.buttonMulti.enabled.fontColor };
    font-size: 20px;

    &.active{
        border: ${ ({ theme })=> theme.color.buttonMulti.active.border };
        background-color: ${ ({ theme })=>theme.color.secondary};
        color: ${ ({ theme })=> theme.color.buttonMulti.active.fontColor }
    }

    &:hover{
        transform: scale(1.05);
    }
`;

export default SearchBar;