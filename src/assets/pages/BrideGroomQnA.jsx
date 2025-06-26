import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BrideGroomQnA = () => {
  const quiz = [
    {
      question: 'Where did Som & Ritika first meet?',
      options: ['At college fest', 'At a wedding', 'On a trip', 'At work'],
      answer: 'At college fest',
    },
    {
      question: 'What is Ritika’s favorite color?',
      options: ['Blue', 'Lavender', 'Green', 'Red'],
      answer: 'Lavender',
    },
    {
      question: 'Who said "I love you" first?',
      options: ['Som', 'Ritika', 'Both at same time', 'Friend guessed'],
      answer: 'Som',
    },
    {
      question: 'What is the couple’s favorite song?',
      options: ['Perfect - Ed Sheeran', 'Shape of You', 'Dil Diyan Gallan', 'Love Story'],
      answer: 'Perfect - Ed Sheeran',
    },
    {
      question: 'Which city is their honeymoon destination?',
      options: ['Bali', 'Paris', 'Goa', 'Shimla'],
      answer: 'Bali',
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
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">💍 Wedding Quiz: How Well Do You Know Som & Ritika?</h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-4 mb-6">
          <div
            className="bg-pink-700 h-4 rounded-full transition-all duration-500"
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
                      ? 'bg-pink-700 text-white'
                      : 'bg-white text-gray-700 hover:bg-pink-100'
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
                  ? 'bg-pink-700 hover:bg-pink-800'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {currentQuestion + 1 === quiz.length ? 'Finish' : 'Next'}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-pink-700 mb-4">🎉 Quiz Completed!</h3>
            <p className="text-lg mb-4">Your Score: {score} / {quiz.length}</p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setSelectedOption('');
                setShowResult(false);
              }}
              className="bg-pink-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-800 transition-all"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
      <Link to="/wedding-menu"
        // 👈 Route to your main page
        className="fixed bottom-6 right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all"
      >
        🔙 Back
      </Link>
    </div>
  );
};

    export default BrideGroomQnA;
