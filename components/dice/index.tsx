import styled, { keyframes } from 'styled-components';

// Styled Component
const RotateKeyframes = keyframes`
  0%
  {
    transform: rotate( 0deg) scale(.8);
  }
  20%
  {
    transform: rotate( 180deg ) scale(1.2);
  }
  40%
  {
    transform: rotate( 225deg ) scale(.8);
  }
  60%
  {
    transform: rotate( 265deg ) scale(1.2);
  }
  80%
  {
    transform: rotate( 300deg ) scale(.8);
  }
  100%
  {
    transform: rotate( 360deg ) scale(.8);
  }
`;

const SVGStyled = styled.svg`
  animation: ${RotateKeyframes} 1s infinite;
`;

interface props {
  loading: boolean;
}

function DiceIcon({ loading }: props) {
  if (loading)
    return (
      <SVGStyled width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="#202733"
        />
      </SVGStyled>
    );

  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        fill="#202733"
      />
    </svg>
  );
}

export default DiceIcon;
