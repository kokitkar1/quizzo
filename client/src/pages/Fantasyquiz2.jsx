import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Fantasyquiz2=()=> {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScoreOnSubmit, setShowScoreOnSubmit] = useState(false);
const quizzes=[
    {
        question: '1.What is the capital city of Brazil? ',
        options: [
          { id: 'A', text: ' Rio de Janeiro   ' },
          { id: 'B', text: ' Brasília' },
          { id: 'C', text: ' São Paulo' },
          { id: 'D', text: ' Buenos Aires' }
        ],
        correctAnswer:'B'
      },
      {
        question: '2. Which of the following is a landlocked country in South Asia?',
        options: [
          { id: 'A', text: ' India' },
          { id: 'B', text: ' Bangladesh' },
          { id: 'C', text: '  Nepal' },
          { id: 'D', text: ' Sri Lanka' }
        ],
        correctAnswer: 'C'
      },
      {
        question: '4. The Great Barrier Reef, known for its diverse marine life, is located off the coast of which country? ',
        options: [
          { id: 'A', text: '  Australia ' },
          { id: 'B', text: ' Brazil' },
          { id: 'C', text: '  Japan' },
          { id: 'D', text: ' South Africa' }
        ],
        correctAnswer: 'A'
      },
      {
        question: '4. The Himalayan mountain range is spread across several countries. Which of the following countries does NOT have a part of the Himalayas?',
        options: [
          { id: 'A', text: 'India  ' },
          { id: 'B', text: ' Nepal' },
          { id: 'C', text: ' China ' },
          { id: 'D', text: ' Indonesia' }
        ],
        correctAnswer: 'D'
      },
      {
        question: '5. The Equator passes through which of the following continents? ',
        options: [
          { id: 'A', text: 'a) North America  ' },
          { id: 'B', text: 'b) Europe' },
          { id: 'C', text: 'c) Africa' },
          { id: 'D', text: ' d) Australia' }
        ],
        correctAnswer: 'C'
      },
  ];
const currentQuiz = quizzes[questionIndex];
const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
const handleNextButtonClick = () => {
    if (selectedOption !== null) {
      if (questionIndex < quizzes.length - 1) {
        if (selectedOption === currentQuiz.correctAnswer) {
          setScore(score + 1);
          setCorrectAnswers([...correctAnswers, currentQuiz.correctAnswer]);
        } else {
          setCorrectAnswers([...correctAnswers, null]);
        }

        setQuestionIndex(questionIndex + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  const handleSubmitButtonClick = () => {
    setIsSubmitted(true);
    setShowScoreOnSubmit(true);
  };

  return (
    <div className='my-4 mx-5'>
      <p className='font-bold'>
        <FontAwesomeIcon icon={faBook} />&nbsp;&nbsp;200 &nbsp;&nbsp;Fantasy Quiz #156
      </p>
      <div className='my-4 mx-5'>
        <span className='text-blue-700 font-bold text-2xl'>{currentQuiz.question}</span>

        {currentQuiz.options.map((option) => (
          <div
            key={option.id}
            className={`p-4 ${selectedOption === option.id ? 'bg-red-100' : 'bg-gray-300'} rounded-lg w-96 text-xl my-4`}
          >
            <label htmlFor={`option${option.id}`}>
              <input
                type='radio'
                id={`option${option.id}`}
                name='option'
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionSelect(option.id)}
                className='mr-2'
              />
              {option.text}
            </label>
          </div>
        ))}
      </div>
      <div className='my-4 mx-5' style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {isSubmitted && showScoreOnSubmit ? (
          <div>
            <p>Your Score: {score} out of {quizzes.length}</p>
            <p>Correct Answers:</p>
            <ul>
              {quizzes.map((quiz, index) => (
                <li key={index}>
                  Question {index + 1}: {correctAnswers[index] === quiz.correctAnswer ? 'Correct' : 'Incorrect'}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            {isSubmitted ? (
              <p>Quiz submitted. Waiting for results...</p>
            ) : (
              questionIndex !== quizzes.length - 1 && (
                <button onClick={handleNextButtonClick} className='bg-green-500 text-white p-2 rounded-md'>
                  Next
                </button>
              )
            )}
            {!isSubmitted && questionIndex === quizzes.length - 1 && (
              <button onClick={handleSubmitButtonClick} className='bg-blue-500 text-white p-2 rounded-md ml-2'>
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fantasyquiz2;


// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';

// const Fantasyquiz2=()=> {
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [correctAnswers, setCorrectAnswers] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showScoreOnSubmit, setShowScoreOnSubmit] = useState(false);
// const quizzes=[
//     {
//         question: 'What is the chemical symbol for gold?',
//         options: [
//           { id: 'A', text: 'Go' },
//           { id: 'B', text: 'Au' },
//           { id: 'C', text: 'Ag' },
//           { id: 'D', text: 'Ge' }
//         ],
//         correctAnswer: 'B'
//       },
//       {
//         question: 'Which gas is most abundant in Earth\'s atmosphere?',
//         options: [
//           { id: 'A', text: 'Oxygen' },
//           { id: 'B', text: 'Nitrogen' },
//           { id: 'C', text: 'Carbon Dioxide' },
//           { id: 'D', text: 'Hydrogen' }
//         ],
//         correctAnswer: 'B'
//       },
//   ];
// const currentQuiz = quizzes[questionIndex];
// const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };
// const handleNextButtonClick = () => {
//     if (selectedOption !== null) {
//       if (questionIndex < quizzes.length - 1) {
//         if (selectedOption === currentQuiz.correctAnswer) {
//           setScore(score + 1);
//           setCorrectAnswers([...correctAnswers, currentQuiz.correctAnswer]);
//         } else {
//           setCorrectAnswers([...correctAnswers, null]);
//         }

//         setQuestionIndex(questionIndex + 1);
//         setSelectedOption(null);
//       } else {
//         setShowScore(true);
//       }
//     } else {
//       alert('Please select an option before proceeding.');
//     }
//   };

//   const handleSubmitButtonClick = () => {
//     setIsSubmitted(true);
//     setShowScoreOnSubmit(true);
//   };

//   return (
//     <div className='my-4 mx-5'>
//       <p className='font-bold'>
//         <FontAwesomeIcon icon={faBook} />&nbsp;&nbsp;200 &nbsp;&nbsp;Fantasy Quiz #156
//       </p>
//       <div className='my-4 mx-5'>
//         <span className='text-blue-700 font-bold text-2xl'>{currentQuiz.question}</span>

//         {currentQuiz.options.map((option) => (
//           <div
//             key={option.id}
//             className={`p-4 ${selectedOption === option.id ? 'bg-red-100' : 'bg-gray-300'} rounded-lg w-96 text-xl my-4`}
//           >
//             <label htmlFor={`option${option.id}`}>
//               <input
//                 type='radio'
//                 id={`option${option.id}`}
//                 name='option'
//                 value={option.id}
//                 checked={selectedOption === option.id}
//                 onChange={() => handleOptionSelect(option.id)}
//                 className='mr-2'
//               />
//               {option.text}
//             </label>
//           </div>
//         ))}
//       </div>
//       <div className='my-4 mx-5' style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         {isSubmitted && showScoreOnSubmit ? (
//           <div>
//             <p>Your Score: {score} out of {quizzes.length}</p>
//             <p>Correct Answers:</p>
//             <ul>
//               {quizzes.map((quiz, index) => (
//                 <li key={index}>
//                   Question {index + 1}: {correctAnswers[index] === quiz.correctAnswer ? 'Correct' : 'Incorrect'}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <div>
//             {isSubmitted ? (
//               <p>Quiz submitted. Waiting for results...</p>
//             ) : (
//               questionIndex !== quizzes.length - 1 && (
//                 <button onClick={handleNextButtonClick} className='bg-green-500 text-white p-2 rounded-md'>
//                   Next
//                 </button>
//               )
//             )}
//             {!isSubmitted && questionIndex === quizzes.length - 1 && (
//               <button onClick={handleSubmitButtonClick} className='bg-blue-500 text-white p-2 rounded-md ml-2'>
//                 Submit
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Fantasyquiz2;
