import { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import Item from "../Item/Item";

const Topic = () => {
  const topics = useLoaderData().data;
  const [searchText, setSearchText] = useState("");
  const filteredTopics = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) return topics;

    return topics.filter((topic) => topic.name.toLowerCase().includes(query));
  }, [topics, searchText]);

  return (
    <div className='relative overflow-hidden bg-base-200/60 page-aurora px-4 py-10 sm:px-6 lg:px-12 min-h-screen'>
      <div className='max-w-6xl mx-auto space-y-6'>
        <div className='rounded-2xl bg-base-100/80 p-4 sm:p-5 shadow-lg ring-1 ring-base-300/60'>
          <label className='input input-bordered flex items-center gap-2 rounded-full bg-base-100/90'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5.5 5.5 0 1 1 1.06-1.06l3.754 3.754a.75.75 0 1 1-1.06 1.06l-3.754-3.754Z'
                clipRule='evenodd'
              />
            </svg>
            <input
              type='text'
              className='grow'
              placeholder='Search topic...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className='rounded-2xl bg-base-100 p-5 shadow-md ring-1 ring-base-300/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <Item item={topic} />
            </div>
          ))}
        </div>

        {!filteredTopics.length && (
          <div
            className='rounded-2xl bg-base-100/80 p-8 text-center shadow-md ring-1 ring-base-300/60'
          >
            <p className='text-base-content/70'>No topics match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topic;
