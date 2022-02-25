import React from 'react';
import styled from 'styled-components';

// Styles
const FooterStyled = styled.footer`
  padding: 4rem 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`;

const AttributionDiv = styled.div`
  font-size: 11px;
  text-align: center;
  color: white;
`;

const LinkAttribute = styled.a`
  color: #c7c7f7;
`;

function Footer() {
  return (
    <FooterStyled>
      <AttributionDiv>
        Challenge by{' '}
        <LinkAttribute
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </LinkAttribute>
        . Coded by{' '}
        <LinkAttribute
          href="https://github.com/cholis04"
          target="_blank"
          rel="noreferrer"
        >
          cholis04
        </LinkAttribute>
        .
      </AttributionDiv>
    </FooterStyled>
  );
}

export default Footer;
