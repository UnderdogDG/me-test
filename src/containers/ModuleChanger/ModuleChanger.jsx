import styled from "styled-components";
import NavContainer from "../NavContainer/NavContainer";
import ListContainer from "../ListContainer/ListContainer";
import { useContext } from "react";
import { AppContext } from "../../hooks/AppContext";

function ModuleChanger(){

    const { state } = useContext( AppContext );

    return(
        <View>
            <ViewPage>
                <Page className={ state.isList ? 'prev' : 'active' }>
                    <NavContainer />
                </Page>
                <Page className={ state.isList ? 'active' : 'next' }>
                    <ListContainer />
                </Page>
            </ViewPage>
        </View>
    );
};

const View = styled.article`
    width: 100vw;
    flex-grow: 1;
`;

const ViewPage = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Page = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: left 0.5s ease-in;

    &.prev{
        left: -100%;
    }

    &.active{
        left: 0;
    }

    &.next{
        left: 100%;
    }
`;

export default ModuleChanger;