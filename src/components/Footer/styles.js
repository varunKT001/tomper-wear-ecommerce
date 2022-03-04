import styled from 'styled-components';

const Wrapper = styled.footer`
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-grey-7);
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .footerLinks a{
    text-decoration: none;
    color: var(--clr-grey-7);
    padding:0.8rem;
  }
  .footerSocialLinks, .footerLinks{
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:center;
  }
  .footerSocialLinks{
    margin-top:1.5rem;
  }
  .footerLinks{
    margin-bottom:1.5rem;
    margin-top:1rem;
  }
  hr{
    height:1rem;
    color: white;
    width:95%;
  }
  svg{
    height:2.4rem;
    width:2.4rem;
    margin:0.7rem;
    background-color:white;
    border-radius:10px;
  }

  @media (min-width: 776px) {
    flex-direction: column;
  }
`;

export default Wrapper;
