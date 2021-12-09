import styled from "styled-components";

export const Banner = styled.img`
    height: 100vh;
    background-position: center center;
    background-size: cover;
    width: 100%;
    position: relative;
`;

export const Container = styled.div`
    width: 100%;
    position: relative;
`;

export const ContainerContent = styled.div`
    position: absolute;
    top: 20%;
    left: 25%;
    margin: 0 auto;
    max-width: 45rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
    font-size: 2rem;
    
    &::after{
    content: '';
    display: block;
    background: #de8aff;
    height: 0.4rem;
    width: 3.5rem;
    border-radius: 0.2rem;
   
}
`;

export const Subtitle = styled.p`
    font-size: 1rem;
`;



