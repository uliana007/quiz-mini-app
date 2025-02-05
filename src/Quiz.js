import React, { useState, useEffect } from "react";
import Result from "./Result";
import questions from "./data";  
import basketIcon from "./assets/png/football-goal.png";

const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasWon, setHasWon] = useState(false);
  const [coins, setCoins] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [levelSelected, setLevelSelected] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);

  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuizQuestions(shuffled);
  }, []);
  const handleAnswer = (answer) => {
    if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(answer);
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(((currentQuestionIndex + 1) / quizQuestions.length) * 100);
    } else {
      setIsFinished(true);
      if (score >= 1) {
        setHasWon(true);
      }
    }
  };
  

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const selectLevel = (level) => {
    setSelectedLevel(level);
    setLevelSelected(true);
  };

  const restartQuiz = () => {
    setIsFinished(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setProgress(0);
    setSelectedAnswer(null);
    setHasWon(false);
    setLevelSelected(false);
    setQuizStarted(false);
  };
  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <div className="welcome-card">
          <h1>Добро пожаловать в викторину!</h1>
          <button className="start-button" onClick={startQuiz}>
            Начать викторину
          </button>
        </div>
      </div>
    );
  }

  if (!levelSelected) {
    return (
      <div className="quiz-container">
        <div className="level-selection-card">
          <h2>Выберите уровень</h2>
          <button className="level-button" onClick={() => selectLevel('easy')}>
            Легкий
          </button>
          <button className="level-button" onClick={() => selectLevel('medium')}>
            Средний
          </button>
          <button className="level-button" onClick={() => selectLevel('hard')}>
            Сложный
          </button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return <Result score={score} hasWon={hasWon} coins={coins} setCoins={setCoins} restartQuiz={restartQuiz} />;
  }

  if (quizQuestions.length === 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="coin-basket">
        <img src={basketIcon} alt="basket" className="basket-icon" />
        <span className="coin-count">{coins}</span>
      </div>

      <div className="quiz-card">
        <h2 className="quiz-question">{quizQuestions[currentQuestionIndex].question}</h2>
        <div>
          {quizQuestions[currentQuestionIndex].answers.map((answer, index) => (
            <button
              key={index}
              className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Quiz;
