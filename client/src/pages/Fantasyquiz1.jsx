import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
const Fantasyquiz1=()=> {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScoreOnSubmit, setShowScoreOnSubmit] = useState(false);
const quizzes=[
    {
      question: '1. What is the value of π (pi) to two decimal places?',
        options:[
          { id: 'A', text: ' 3.14 ' },
          { id: 'B', text: ' 3.16' },
          { id: 'C', text: '  3.18' },
          { id: 'D', text: ' 3.20'}
        ],
        correctAnswer: 'A'
      },
      {
        question: ' 2. Solve for x: 4x - 7 = 25 ',
        options: [
          { id: 'A', text: ' 6' },
          { id: 'B', text: ' 8' },
          { id: 'C', text: ' 9' },
          { id: 'D', text: ' 10' }
        ],
        correctAnswer: 'B'
      },
      {
        question3: ' 3. If a rectangle has a length of 12 units and a width of 5 units, what is its area? ',
        options: [
          { id: 'A', text: ' 60 square units  ' },
          { id: 'B', text: '  48 square units' },
          { id: 'C', text: ' 30 square units' },
          { id: 'D', text: ' 17 square units' }
        ],
        correctAnswer: 'A'
      },
      {
        question4: '4. What is the value of 5² + 3 × 4 ÷ 2?',
        options: [
          { id: 'A', text: ' 18   ' },
          { id: 'B', text: ' 17' },
          { id: 'C', text: ' 14' },
          { id: 'D', text: ' 13' }
        ],
        correctAnswer: 'C'
      },
      {
        question5: '5. If the sum of three consecutive integers is 72, what is the smallest of these integers? ',
        options: [
          { id: 'A', text: '23  ' },
          { id: 'B', text: ' 24 ' },
          { id: 'C', text: ' 25' },
          { id: 'D', text: ' 26' }
        ],
        correctAnswer: 'B'
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

export default Fantasyquiz1;



// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';
// const Fantasyquiz1=()=> {
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [correctAnswers, setCorrectAnswers] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showScoreOnSubmit, setShowScoreOnSubmit] = useState(false);
// const quizzes=[
//     {
//         question: 'What is the largest planet in our solar system?',
//         options:[
//           { id: 'A', text: 'Mars' },
//           { id: 'B', text: 'Earth' },
//           { id: 'C', text: 'Jupiter' },
//           { id: 'D', text: 'Venus' }
//         ],
//         correctAnswer: 'C'
//       },
//       {
//         question: 'Who wrote the play "Romeo and Juliet"?',
//         options: [
//           { id: 'A', text: 'Charles Dickens' },
//           { id: 'B', text: 'William Shakespeare' },
//           { id: 'C', text: 'Jane Austen' },
//           { id: 'D', text: 'Leo Tolstoy' }
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

// export default Fantasyquiz1;
