import styled from "styled-components";

export const Container = styled.div``;

export const Bt = styled.button`
    width: 90px;
    height: 30px;
    border-radius: 5px;
    background-color: #a4c;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: #a4f;
        color: #ddd;
        transform: scale(1.1);
        transition: all 0.5s;
        
    }
`;
