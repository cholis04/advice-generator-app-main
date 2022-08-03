import Head from 'next/head';

import type { NextPage } from 'next';

import BoxCard from '../containers/boxCard';

// Functional Component
const Home: NextPage = () => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
      </Head>
      {/* Head */}
      <BoxCard />
    </>
  );
};

export default Home;
