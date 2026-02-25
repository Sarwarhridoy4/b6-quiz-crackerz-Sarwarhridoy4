import { useLoaderData } from "react-router";
import Item from "../Item/Item";

const Topic = () => {
  const topics = useLoaderData().data;

  return (
    <div className='relative overflow-hidden bg-base-200/60 page-aurora px-4 py-10 sm:px-6 lg:px-12 min-h-screen'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {topics.map((topic) => (
          <div
            key={topic.id}
            className='rounded-2xl bg-base-100 p-5 shadow-md ring-1 ring-base-300/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl'
          >
            <Item item={topic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
