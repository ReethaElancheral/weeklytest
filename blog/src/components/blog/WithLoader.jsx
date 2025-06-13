import  { useEffect, useState } from 'react';

const withLoader = (WrappedComponent, fetchDataFn) => (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataFn(props)
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [props]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <WrappedComponent {...props} data={data} />;
};

export default withLoader;