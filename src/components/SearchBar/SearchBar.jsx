import styled from "styled-components";

function SearchBar(){
    return(
        <SearchContainer>
            <SearchWrapper>
                <SearchInput />
                <SearchButton />
            </SearchWrapper>
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    width: 100%;
    max-width: ${ ({ theme })=>theme.breakpoints.xxl };
    padding: 10px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchWrapper = styled.div`
    width: 100%;
    height: 40px;
    max-width: 400px;
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
    width: 10%;
    height: 100%;
    max-width: 120px;
    min-width: 80px;
    border: 1px solid gray;
    border-radius: 0 8px 8px 0;
`;

export default SearchBar;