import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation

const RiceCeremonyQuizForJiya = () => {
  const navigate = useNavigate(); // React Router Hook

  const quiz = [
    {
      question: 'What is the name of the lovely baby whose rice ceremony we are celebrating today?',
      options: ['Jiya', 'Ritika', 'Som', 'Ananya'],
      answer: 'Jiya',
    },
    {
      question: 'At what age is Jiya having her rice ceremony?',
      options: ['3 months', '6 months', '1 year', '2 years'],
      answer: '6 months',
    },
    {
      question: 'What does Jiya’s rice ceremony symbolize?',
      options: [
        'Her first birthday',
        'Start of eating solid food',
        'Beginning school',
        'Naming ceremony',
      ],
      answer: 'Start of eating solid food',
    },
    {
      question: 'Who traditionally feeds Jiya first during the ceremony?',
      options: ['Maternal uncle', 'Father', 'Grandmother', 'Mother'],
      answer: 'Maternal uncle',
    },
    {
      question: 'Which item will Jiya pick to predict her future?',
      options: ['Book', 'Money', 'Food', 'All of the above'],
      answer: 'All of the above',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  const progressPercentage = ((currentQuestion + (showResult ? 1 : 0)) / quiz.length) * 100;

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-4 relative">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">🍚 Jiya's Rice Ceremony Quiz</h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-4 mb-6">
          <div
            className="bg-yellow-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Quiz Content */}
        {!showResult ? (
          <div>
            <h3 className="text-lg font-semibold mb-4">{quiz[currentQuestion].question}</h3>
            <div className="flex flex-col space-y-4 mb-6">
              {quiz[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedOption === option
                      ? 'bg-yellow-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-yellow-100'
                  } transition-all`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`px-6 py-2 rounded-full text-white font-semibold transition-all ${
                selectedOption
                  ? 'bg-yellow-500 hover:bg-yellow-600'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {currentQuestion + 1 === quiz.length ? 'Finish' : 'Next'}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-yellow-700 mb-4">🎉 Quiz Completed!</h3>
            <p className="text-lg mb-4">Your Score: {score} / {quiz.length}</p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setSelectedOption('');
                setShowResult(false);
              }}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-all"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>

      {/* Floating Back Button */}
      <Link to="/wedding-menu"
        // 👈 Route to your main page
        className="fixed bottom-6 right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all"
      >
        🔙 Back
      </Link>
    </div>
  );
};

export default RiceCeremonyQuizForJiya;
