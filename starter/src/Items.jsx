import SingleItem from './SingleItem';
import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';
import { useFetchTask } from './RefactorData';

const Items = () => {
  const { data, isLoading, isError } = useFetchTask();
  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: '1rem ' }}>That was Error on Data...</p>;
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
