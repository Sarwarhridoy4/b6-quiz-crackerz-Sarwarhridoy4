import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizdata = useLoaderData().data;
    console.log(quizdata);
    return (
        <div>
            <div className="header flex items-center justify-center w-full h-10 bg-orange-500">
                <h2 className='text-blue-600 text-3xl font-semibold'>{quizdata.name} Qiuz</h2>
            </div>
            {/* UI for Quiz */}
            <div className="quiz-box mt-5">
                <div className="img-side">
                <img className='w-60 mx-auto' src={quizdata.logo} alt={quizdata.name} />
                </div>
                <div className="question">
                {
                        
                }
                </div>
            </div>
        </div>
    );
};

export default Quiz;