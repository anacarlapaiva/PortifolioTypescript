import styled from "styled-components";

export const Container = styled.div`
    height: 10vh;
    width: 100%;    
    background-color: transparent;
    z-index:100;  
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 5%;
`;

export const Content = styled.ul`
   display: flex;
   text-decoration: none;
  width: 100%;
  justify-content: right; 
`;


export const Linha = styled.li`
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    cursor: pointer;

    &:hover{
        color: #a4c;
    }
`;

export const Logo = styled.img`
    max-width: 160px;
    width: 100%;
    margin-top: 10px;
`;

