import {
  buildOptimizedUrl,
  buildResponsiveSrcSet,
} from "../../utils/imageHelpers";

const HERO_IMAGE =
  "https://cdn.pixabay.com/photo/2018/03/21/05/29/question-mark-3245622_960_720.jpg";

const Banner = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute inset-0 hero-aurora' />
      <div className='absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl' />
      <div className='absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl' />

      <div className='hero min-h-[82vh] px-4 sm:px-6 lg:px-12'>
        <div className='hero-content flex-col-reverse lg:flex-row-reverse gap-12 max-w-6xl'>
          <div className='relative fade-up fade-up-delay-2'>
            <div className='absolute -inset-4 rounded-3xl bg-primary/10 blur-xl' />
            <img
              src={buildOptimizedUrl(HERO_IMAGE, 960)}
              srcSet={buildResponsiveSrcSet(HERO_IMAGE, [480, 720, 960, 1440])}
              sizes='(min-width: 1024px) 480px, 90vw'
              alt='Quiz Illustration'
              width='960'
              height='720'
              loading='eager'
              decoding='async'
              fetchpriority='high'
              className='relative w-full max-w-md rounded-3xl shadow-2xl ring-1 ring-base-300/60'
            />
          </div>

          <div className='text-center lg:text-left space-y-6'>
            <span className='inline-flex items-center gap-2 rounded-full bg-base-100/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm ring-1 ring-base-300/60 fade-up'>
              New daily challenges
            </span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-base-content fade-up fade-up-delay-1'>
              Master tech skills with focused, fun quizzes
            </h1>
            <p className='text-base md:text-lg text-base-content/80 leading-relaxed fade-up fade-up-delay-2'>
              Quizzily delivers curated, bite-sized quizzes for developers who
              want to grow fast. Track progress, explore topics, and keep your
              edge sharp.
            </p>
            <div className='flex flex-wrap justify-center lg:justify-start gap-4 fade-up fade-up-delay-3'>
              <button className='btn btn-primary'>Start Quiz</button>
              <button className='btn btn-ghost'>Browse Topics</button>
            </div>
            <div className='grid grid-cols-3 gap-4 pt-4 text-center lg:text-left fade-up fade-up-delay-3'>
              <div className='rounded-2xl bg-base-100/70 p-3 ring-1 ring-base-300/60'>
                <p className='text-lg font-bold text-primary'>50+</p>
                <p className='text-xs text-base-content/70'>Quiz packs</p>
              </div>
              <div className='rounded-2xl bg-base-100/70 p-3 ring-1 ring-base-300/60'>
                <p className='text-lg font-bold text-primary'>10 min</p>
                <p className='text-xs text-base-content/70'>Daily practice</p>
              </div>
              <div className='rounded-2xl bg-base-100/70 p-3 ring-1 ring-base-300/60'>
                <p className='text-lg font-bold text-primary'>24/7</p>
                <p className='text-xs text-base-content/70'>Any device</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
