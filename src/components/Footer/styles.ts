import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Lista = styled.ul`
 display: flex;
  text-decoration: none;
  width: 80%;
  justify-content:space-around; 
`;

export const Linha = styled.li`
    display: flex;
`;

export const Rodape = styled.footer`
    text-align: center;
    font-size: 14px;
    background-color: #ccc;
    height: 18vh;
    padding: 2.5rem;  
`;

export const Logo = styled.img`
    max-width: 160px;
    width: 100%;
    margin-top: -15px;
`;


