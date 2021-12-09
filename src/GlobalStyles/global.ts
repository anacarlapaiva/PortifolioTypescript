import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #8f54a0;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #ffffff;
}

body{
    font-size: 1rem;
    color: #333;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f4f0ff;
}

h2{
    font-size: 1.7rem;   
    position: relative;

    &::after{
    content: '';
    display: block;
    background: #de8aff;
    height: 1rem;
    width: 1rem;
    border-radius: 0.2rem;
    position: absolute;
    bottom: 5px;
    left: -3px;
    z-index: -1;
    
    }
}

p{
    line-height: 1.7rem;
}
`;