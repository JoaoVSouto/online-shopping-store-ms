import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Home;

export const getServerSideProps = withPageAuthRequired();
