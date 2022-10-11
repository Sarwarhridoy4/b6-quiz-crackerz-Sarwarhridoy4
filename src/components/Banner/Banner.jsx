import React from "react";

const Banner = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <img src='https://cdn.pixabay.com/photo/2018/03/21/05/29/question-mark-3245622_960_720.jpg' alt=""
            className='w-full rounded-lg shadow-2xl'
          />
          <div>
            <h1 className='text-5xl font-bold'>Quizzily Daily Quiz</h1>
            <p className='py-6'>
              Quizzily has arrage a quiz for the developer to polish up their knowledge on daily basis by accomplising some quiz on desire topics. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
