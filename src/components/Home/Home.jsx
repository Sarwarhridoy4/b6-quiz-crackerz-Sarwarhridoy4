import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import Item from "../Item/Item";

const Home = () => {
  const topics = useLoaderData().data;

  return (
    <div>
      <Banner />

      <div className='py-12 px-4 sm:px-6 lg:px-16'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-10 text-primary'>
          Welcome to Quiz World
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {topics.map((topic) => (
            <div
              key={topic.id}
              className='bg-base-100 rounded-xl p-5 shadow-md border border-base-200 hover:shadow-xl hover:scale-[1.02] transition duration-300'
            >
              <Item item={topic} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
