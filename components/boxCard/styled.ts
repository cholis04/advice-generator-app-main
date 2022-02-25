import styled from 'styled-components';

export const BoxCardStyled = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 3rem 2rem;
  background-color: hsl(218, 20%, 24%);
  width: 90%;
  max-width: 540px;
  border-radius: 15px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
`;

export const IdTextStyled = styled.p`
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: hsl(150, 100%, 66%);
  font-size: 0.8em;
  font-weight: 800;
  letter-spacing: 5px;
`;

export const AdviceTextStyled = styled.h1`
  margin: 2rem auto;
  padding: 0 1.6rem;
  text-align: center;
  color: hsl(193, 38%, 86%);
  font-size: 28px;
  line-height: 2.4rem;
  font-weight: 800;

  @media only screen and (max-width: 680px) {
    padding: 0 0;
    font-size: 24px;
  }
`;

export const DividerWrapStyled = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonDiceGenerate = styled.button`
  position: absolute;
  left: 50%;
  bottom: -32px;
  transform: translateX(-50%);
  border: none;
  outline: none;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  cursor: pointer;
  background-color: hsl(150, 100%, 66%);
  transition: all 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 2px 2px 25px hsl(150, 100%, 66%),
      -2px -2px 25px hsl(150, 100%, 66%);
  }

  &:active {
    background-color: hsl(150, 50%, 50%);
  }
`;
