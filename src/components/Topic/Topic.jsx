import { useLoaderData } from "react-router";
import Item from "../Item/Item";

const Topic = () => {
  const topics = useLoaderData().data;

  return (
    <div className='px-4 py-8 sm:px-6 lg:px-12'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {topics.map((topic) => (
          <div
            key={topic.id}
            className='transform rounded-lg border p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md'
          >
            <Item item={topic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
