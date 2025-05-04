import PropTypes from "prop-types";

const Question = ({ questionall }) => {
  const { id, correctAnswer, options, question } = questionall;

  return (
    <div className='px-4 py-6 sm:px-6 lg:px-12 xl:px-24'>
      {/* Render HTML inside the question safely */}
      <h2
        className='mb-8 text-2xl font-bold text-center sm:text-3xl text-amber-400'
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <div className='grid gap-6 sm:grid-cols-2'>
        {options.map((option, index) => (
          <label
            key={index}
            className='flex items-start gap-3 p-4 border rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition'
          >
            <input
              type='radio'
              name={id}
              value={option}
              className={`mt-1 radio ${
                correctAnswer ? "radio-primary" : "radio checked:bg-red-500"
              }`}
            />
            <p className='text-amber-600'>{option}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  questionall: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    correctAnswer: PropTypes.bool.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default Question;
