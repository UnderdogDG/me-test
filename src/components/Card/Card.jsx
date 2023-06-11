import styled from "styled-components";

function Card(){
    return(
        <CardContainer>
            <CardWrapper>
                <ImageContainer>
                    <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="Toxic Rick"/>
                </ImageContainer>
                <InfoContainer>
                    <div className="title-container">
                        <h2>Toxic Rick</h2>
                    </div>

                </InfoContainer>

            </CardWrapper>
        </CardContainer>
    );
}

const CardContainer = styled.li`
    width: 30%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const CardWrapper = styled.div`
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    background-color: ${ ({ theme })=> theme.color.bg_white };
    box-shadow: 2px 2px 16px #1b5e20;
`;


const ImageContainer = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    border-radius: 50%;
    overflow: hidden;

    img{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const InfoContainer = styled.div`
    .title-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 5px;

        h2{
            color: ${ ({theme})=>theme.color.secondary };
            text-align: center;
            margin: 0;
        }
    }
`;

export default Card;