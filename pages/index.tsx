import Head from 'next/head';

import type { NextPage } from 'next';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
  color: blue;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
      </Head>
      <main>
        <Title>Hello World</Title>
      </main>
    </>
  );
};

export default Home;
