import { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import Item from "../Item/Item";

const Home = () => {
  const topics = useLoaderData().data;
  const [searchText, setSearchText] = useState("");
  const filteredTopics = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) return topics;
    return topics.filter((topic) => topic.name.toLowerCase().includes(query));
  }, [topics, searchText]);

  return (
    <div className='relative overflow-hidden bg-base-200/60 page-aurora'>
      <Banner />

      <section className='py-14 px-4 sm:px-6 lg:px-16'>
        <div className='max-w-6xl mx-auto space-y-10'>
          <div className='text-center space-y-3 fade-up'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60'>
              Why Quizzily
            </p>
            <h2 className='text-3xl sm:text-4xl font-bold text-base-content'>
              A smarter way to practice every day
            </h2>
            <p className='text-base text-base-content/70 max-w-2xl mx-auto'>
              Professional, focused, and designed for momentum. Build confidence
              by practicing just a few minutes a day.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                title: "Curated Tracks",
                body: "Hand-picked quiz paths for frontend, backend, and full-stack growth.",
              },
              {
                title: "Progress Focused",
                body: "See what you know, what you missed, and what to tackle next.",
              },
              {
                title: "Daily Momentum",
                body: "Short, high-impact sessions that fit any schedule.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className='rounded-2xl border border-base-300/60 bg-base-100/70 p-6 shadow-lg fade-up'
              >
                <h3 className='text-lg font-semibold text-base-content mb-2'>
                  {feature.title}
                </h3>
                <p className='text-sm text-base-content/70'>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='pb-20 px-4 sm:px-6 lg:px-16'>
        <div className='max-w-6xl mx-auto space-y-8'>
          <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 fade-up'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60'>
                Quiz Topics
              </p>
              <h2 className='text-3xl sm:text-4xl font-bold text-base-content'>
                Choose a topic and start now
              </h2>
            </div>
            <p className='text-sm text-base-content/70 max-w-md'>
              Pick a category and dive into a focused quiz designed to build
              real developer confidence.
            </p>
          </div>

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

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className='card-sheen rounded-2xl p-5 shadow-xl ring-1 ring-base-300/50 transition duration-300 hover:-translate-y-1 hover:shadow-2xl'
              >
                <Item item={topic} />
              </div>
            ))}
          </div>

          {!filteredTopics.length && (
            <div className='rounded-2xl bg-base-100/80 p-8 text-center shadow-md ring-1 ring-base-300/60'>
              <p className='text-base-content/70'>No topics match your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
