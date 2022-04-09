import { useUser } from '@auth0/nextjs-auth0';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <>
      <h1>Hello Next.js</h1>

      <p style={{ whiteSpace: 'break-spaces' }}>
        {JSON.stringify(user, null, 2)}
      </p>

      <a href="/api/auth/login">Login</a>
    </>
  );
};

export default Home;
