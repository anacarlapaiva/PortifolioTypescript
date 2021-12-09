import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 10rem;
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Row = styled.div`    
    display: grid;
    grid-template: "img img";
    grid-gap: 2rem;

    img{
        width: 100%;
        height: 370px;
    }
`;
