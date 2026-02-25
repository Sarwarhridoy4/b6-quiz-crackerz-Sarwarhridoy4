import PropTypes from "prop-types";

const Question = ({ questionall, selectedAnswer, onSelectAnswer }) => {
  const { id, correctAnswer, options, question } = questionall;

  return (
    <div className='space-y-6'>
      {/* Render HTML inside the question safely */}
      <h2
        className='text-xl sm:text-2xl font-bold text-base-content'
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <div className='grid gap-4 sm:grid-cols-2'>
        {options.map((option, index) => (
          <label
            key={index}
            className='flex items-start gap-3 rounded-2xl border border-base-300/60 bg-base-100/70 p-4 shadow-sm cursor-pointer transition hover:-translate-y-0.5 hover:shadow-md'
          >
            <input
              type='radio'
              name={id}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelectAnswer(id, option)}
              className='mt-1 radio radio-primary'
            />
            <p className='text-base text-base-content/80'>{option}</p>
          </label>
        ))}
      </div>

      {selectedAnswer ? (
        <p className='text-sm text-base-content/60'>
          Selected: <span className='font-medium'>{selectedAnswer}</span>
        </p>
      ) : (
        <p className='text-sm text-warning'>No answer selected yet.</p>
      )}
    </div>
  );
};

Question.propTypes = {
  questionall: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    correctAnswer: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
};

export default Question;
