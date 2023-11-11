import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Fantasyquiz=()=> {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScoreOnSubmit, setShowScoreOnSubmit] = useState(false);
const quizzes=[
    {
      question: '1. Which of the following sentences is an example of a simile?',
      options: [
        { id: 'A', text: 'The flowers danced in the breeze.' },
        { id: 'B', text: 'The stars blinked like diamonds in the sky. ' },
        { id: 'C', text: 'The river flowed gently downstream. ' },
        { id: 'D', text: 'The old tree stood tall and strong.' }
      ],
      correctAnswer: 'B'
    },
    {
      question: '2. Identify the correct usage of the apostrophe in the sentence: "The cat belonging to Sarah is fluffy."',
      options: [
        { id: 'A', text: "Sarahs' cat is fluffy."},
        { id: 'B', text: ' Sarahs cat is fluffy.' },
        { id: 'C', text: "Sarah's cat is fluffy."  },
        { id: 'D', text: "Sarah cat's is fluffy." }
      ],
      correctAnswer: 'C'
    },
    {
      question: '3.Choose the synonym for the word "pensive."',
      options: [
        { id: 'A', text: 'New York '},
        { id: 'B', text: 'Happy' },
        { id: 'C', text: 'Thoughtful ' },
        { id: 'D', text: 'Energetic' }
      ],
      correctAnswer: 'B'
    },
    {
      question: '4.What is the correct order of the following sentence? "The adventurous hikers climbed up the steep mountain."',
      options: [
        { id: 'A', text: ' Climbed up the steep mountain the adventurous hikers.  ' },
        { id: 'B', text: ' Up the steep mountain climbed the adventurous hikers.' },
        { id: 'C', text: ' The mountain up climbed adventurous the hikers steep.' },
        { id: 'D', text: ' The adventurous hikers climbed up the steep mountain.' }
      ],
      correctAnswer: 'D'
    },
    {
      question: '5.Identify the type of figurative language used in the following sentence:"The wind whispered through the trees."',
      options: [
        { id: 'A', text: ' Simile '},
        { id: 'B', text: ' Metaphor'  },
        { id: 'C', text: ' Personification' },
        { id: 'D', text: '  Hyperbole' }
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
      <div className='my-4 mx-5' style={{ display:'flex', justifyContent:'flex-end' }}>
        {isSubmitted && showScoreOnSubmit ? (
          <div>
            <p>Your Score: {score} out of {quizzes.length}</p>
            <p>Correct Answers:</p>
            <ul>
              {quizzes.map((quiz, index)=> (
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

export default Fantasyquiz;






// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';

// const Fantasyquiz=()=> {
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [correctAnswers, setCorrectAnswers] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showScoreOnSubmit, setShowScoreOnSubmit] = useState(false);
// const quizzes=[
//     {
//       question: 'PREDICT THE TOP LOSER (for tomorrow) across these indices',
//       options: [
//         { id: 'A', text: 'NIFTY50 ₹17,356,-0.31%' },
//         { id: 'B', text: 'NIFTYNEXT50 ₹56,226,-3.31%' },
//         { id: 'C', text: 'NIFTYBANK ₹17,356,+2.12%' },
//         { id: 'D', text: 'NIFTY50 ₹17,546,-0.71%' }
//       ],
//       correctAnswer: 'B'
//     },
//     {
//       question: 'What is the capital of France?',
//       options: [
//         { id: 'A', text: 'New York' },
//         { id: 'B', text: 'Berlin' },
//         { id: 'C', text: 'Paris' },
//         { id: 'D', text: 'London' }
//       ],
//       correctAnswer: 'C'
//     },
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

// export default Fantasyquiz;
