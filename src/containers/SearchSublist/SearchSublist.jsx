import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../hooks/AppContext";

function SearchSublist(){

    const { state, setState } = useContext( AppContext );

    const getNext = ()=>{
        const getData = async()=>{
            let res = await state.manager.getNext();
            if(res){
                setState(prev=>prev.setSublist(res.results));
            }
        }

        getData();
    }

    const getPrev = ()=>{
        const getData = async()=>{
            let res = await state.manager.getPrev();
            if(res){
                setState(prev=>prev.setSublist(res.results));
            }
        }

        getData();

    }

    const getData = (e)=>{
        let chars = (e.residents || e.characters).map(el => el.match(/\/\d{1,}$/g)[0]).map(el => el.match(/\d{1,}$/g)[0]).join(',');
        const getData = async()=>{
            let res = await state.manager.getGroup(chars);
            console.log(res);
            setState(prev=>prev.setCharacters(res).changeToList(true));
        }

        getData();

    }

    useEffect(()=>{

        async function getSublist(){
            let res = await state.manager.getSublist()
            setState(prev=>prev.setSublist(res.results));
        }

        getSublist();
    }, [state.manager])

    return(
        <SublistContainer>
            <SublistBody>
                {
                    state.sublist.map( (e, i)=>
                        <SublistItem key={ i } onClick={ ()=>getData(e) }>
                            { e.name }
                        </SublistItem>
                    )
                }

            </SublistBody>
            <SublistFooter>
                <ListButton onClick={ ()=>getPrev()  }/>
                <ListButton onClick={ ()=>getNext()  }/>
            </SublistFooter>
        </SublistContainer>
    );
};

const SublistContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SublistBody = styled.ul`
    width: 100%;
    min-height: 300px;
    padding: 20px;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const SublistItem = styled.li`
    width: 100%;
    padding: 10px;
    background-color: white;
    border-radius: 4px;
    margin: 2px 0;
    cursor: pointer;

    &:hover{
        background-color: #F5F5F5;
    }
`;

const SublistFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const ListButton = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid white;
    margin: 10px;
    position: relative;
    transform: scale(1);
    transition: transform 0.3s ease-out;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
    }

    &:first-child{
        &::before{
            display: block;
            content: "";
            width: 20px;
            height: 20px;
            border-top: 4px solid white;
            border-left: 4px solid white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-30%, -50%) rotate(-45deg);
        }
    }

    &:last-child{
        &::before{
            display: block;
            content: "";
            width: 20px;
            height: 20px;
            border-top: 4px solid white;
            border-left: 4px solid white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-60%, -50%) rotate(135deg);
        }
    }
`;

export default SearchSublist;