import React from 'react';
import styled from 'styled-components';

const DesktopDiv = styled.img`
  display: block;

  object-fit: cover;
  object-position: center;

  @media only screen and (max-width: 680px) {
    display: none;
  }
`;
const MobileDiv = styled.img`
  display: none;

  object-fit: cover;
  object-position: center;

  @media only screen and (max-width: 680px) {
    display: block;
  }
`;

function Divider() {
  return (
    <>
      <DesktopDiv src="./pattern-divider-desktop.svg" alt="" />
      <MobileDiv src="./pattern-divider-mobile.svg" alt="" />
    </>
  );
}

export default Divider;
