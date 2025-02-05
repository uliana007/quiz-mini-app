import React, { useState, useEffect } from "react";
import basketIcon from "./assets/png/football-goal.png";
import coinIcon from "./assets/png/icon-money.png";
const Result = ({ score, hasWon, coins, setCoins, restartQuiz }) => {
  const [coinsFalling, setCoinsFalling] = useState(false);
  const [showCoin, setShowCoin] = useState(false);
  const [hasFallen, setHasFallen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (hasWon && !hasFallen) {
      setShowCoin(true); // Покажем монету
      setTimeout(() => {
        setCoinsFalling(true); // Имитация падения монеты
        setTimeout(() => {
          setCoins(prevCoins => prevCoins + 1); // Добавление монеты только один раз
          setHasFallen(true); // Устанавливаем флаг, чтобы не добавлять монеты повторно
        }, 2000); // Задержка перед добавлением монеты
      }, 500); // Задержка перед началом падения монеты
    }

    setShowMessage(true); // Показываем сообщение с анимацией
  }, [hasWon, hasFallen, setCoins]);

  return (
    <div className="quiz-container">
      <div className="coin-basket">
        <img src={basketIcon} alt="basket" className="basket-icon" />
        <span className="coin-count">{coins}</span>
      </div>
      <div className="quiz-card">
        <h1 className="result-text">Ваш результат: {score} из 5</h1>

        {/* Сообщение о выигрыше/проигрыше */}
        <div className={`result-message ${showMessage ? "show-message" : ""}`}>
          {hasWon ? "Вы выиграли!" : "Вы проиграли."}
        </div>

        {hasWon && showCoin && !hasFallen && (
          <div className="coin-container">
            <img src={coinIcon} alt="coin" className="coin-animation" />
          </div>
        )}

        <div className="restart-button-container">
          <button className="restart-button" onClick={restartQuiz}>
            Повторить
          </button>
        </div>
      </div>
    </div>
  );
};


export default Result;
