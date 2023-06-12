import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../hooks/AppContext";
import { URL } from "../../utils/Vars";

function SelectorBar(){

    const { state, setState } = useContext( AppContext );

    const updateRequester = (type)=>{
        if(type !== state.name){
            setState(prev => prev.setRequester(type));
        }
    }

    return(
        <SelectorContainer>
            <SelectorWrapper>
                <SelectorItem className={ state.name === URL.CATEGORY.CHAR ? 'active' : '' } onClick={ ()=>updateRequester(URL.CATEGORY.CHAR) }>
                    Character
                </SelectorItem>
                <SelectorItem className={ state.name === URL.CATEGORY.LOC ? 'active' : '' } onClick={ ()=>updateRequester(URL.CATEGORY.LOC) }>
                    Location
                </SelectorItem>
                <SelectorItem className={ state.name === URL.CATEGORY.EP ? 'active' : '' } onClick={ ()=>updateRequester(URL.CATEGORY.EP) }>
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
`;

const SelectorWrapper = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
`;

const SelectorItem = styled.li`
    width: calc(28% - 40px);
    min-width: 160px;
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
        background-color: ${ ({ theme })=>theme.color.buttonMulti.active.bg };
        color: ${ ({ theme })=> theme.color.buttonMulti.active.fontColor }
    }

    &:hover{
        transform: scale(1.05);

        &.active{
            transform: scale(1.0);
            cursor: default;
        }
    }
`;

export default SelectorBar;