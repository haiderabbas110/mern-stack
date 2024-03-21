// Component
import { useFetch } from '../hook/useFetch'

const DataFetch = () => {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map((user,i) => (
        <li key={i}>{user.title}</li>
      ))}
    </ul>
  );
};

export default DataFetch;