import { NextPage } from 'next';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const query = gql`
  query {
    books {
      title
    }
  }
`;
const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const { data } = useQuery(query);
  console.log('dat', data);
  return <h1>Hello world! - user agent: {userAgent}</h1>;
};

export default withApollo(Home);
