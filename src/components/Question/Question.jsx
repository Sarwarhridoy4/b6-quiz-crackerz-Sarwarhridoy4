import React from 'react';

const Question = ({ questionall }) => {
    console.log(questionall);
    const { correctAnswer, options, question } = questionall;
    return (
        <div>
            <h2 className="mb-12 text-2xl font-bold leading-none text-center sm:text-2xl">{question}</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div className='flex items-center'>
				<h3 className="font-semibold">✅</h3>
                <p className="mt-1 text-gray-400">{options[0]}</p>
			</div>
			<div className='flex items-center'>
				<h3 className="font-semibold">✅</h3>
				<p className="mt-1 text-gray-400">{options[1]}</p>
			</div>
			<div className='flex items-center'>
				<h3 className="font-semibold">✅</h3>
				<p className="mt-1 text-gray-400">{options[2]} </p>
			</div>
			<div className='flex items-center'>
				<h3 className="font-semibold">✅</h3>
				<p className="mt-1 text-gray-400">{options[3]}</p>
			</div>
		</div>
        </div>
    );
};

export default Question;