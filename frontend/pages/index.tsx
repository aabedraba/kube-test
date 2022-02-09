import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query Hello {
    hello
  }
`;

const Index = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (error) {
    return <div>An error happened!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.hello}</h1>
    </div>
  );
};

export default Index;
