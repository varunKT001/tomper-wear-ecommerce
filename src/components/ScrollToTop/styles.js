import styled from 'styled-components';
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 94%;
   bottom: 60px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #ffb347;
   transition: color 0.5s, font-size 0.5s, opacity 0.5s ;
   :hover{
      color:#ff7518;
      font-size: 3.4rem;
      opacity:2;
   }
`
