import React from "react";
import { Link, useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const userAnswers = location.state?.userAnswers;

  const totalQuestions = userAnswers.length;
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  const score = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="resultPage">
      <div className="resultPage__data">
        <h2>Результаты теста</h2>
        <p>Количество правильных ответов: {correctAnswers}</p>
        <p>
          Количество неправильных ответов: {totalQuestions - correctAnswers}
        </p>
        <p>Баллы: {score.toFixed(2)}%</p>
        <Link to="/question/1">
          <button className="MyBtn">Пройти тест заново</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
