const Banner = () => {
  return (
    <div className='hero min-h-screen bg-gradient-to-br from-base-200 to-base-300 px-4'>
      <div className='hero-content flex-col-reverse lg:flex-row-reverse gap-10'>
        <img
          src='https://cdn.pixabay.com/photo/2018/03/21/05/29/question-mark-3245622_960_720.jpg'
          alt='Quiz Illustration'
          className='w-full max-w-md rounded-xl shadow-lg ring-1 ring-base-300'
        />
        <div className='text-center lg:text-left space-y-4'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-primary'>
            Quizzily Daily Quiz
          </h1>
          <p className='text-base md:text-lg text-base-content/80 leading-relaxed'>
            Quizzily offers a daily dose of developer-focused quizzes to help
            you sharpen your knowledge and stay up-to-date in your favorite
            topics. Dive in and challenge yourself!
          </p>
          <button className='btn btn-primary mt-4'>Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
