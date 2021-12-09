import styled from "styled-components";

export const Container = styled.div`
width: 90%;
`;


export const LabelForm = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 1rem;
width: 100%;
color: #a4c;
`;

export const InputForm = styled.input`
border: 1px solid #a4c;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.2s;
margin-bottom: 1.8rem;
background-color: transparent;

&:focus,
:hover {
  outline: none;
  border-color: #a4c;
  background: white;
  box-shadow: 0 0 0 3px pink;
}
`;
