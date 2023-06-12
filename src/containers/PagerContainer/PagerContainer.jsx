import styled from "styled-components";

import PageBtn from "../../components/PageBtn.jsx/PageBtn";

function PagerContainer(){
    return(
        <Pager>
            <PagerWrapper>
                <PageBtn num={ 1 } url={"   "}>

                </PageBtn>
            </PagerWrapper>
        </Pager>
    );
};

const Pager = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PagerWrapper = styled.div`
    width: 100%;
    max-width: ${ ({ theme })=>theme.breakpoints.xxl };
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default PagerContainer;