import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const questionsData = [
  {
    question: "Сколько будет 2 + 2?",
    options: ["4", "123", "555", "666"],
    correctAnswer: 0,
  },
  {
    question: "Слово из трех букв",
    options: ["КОТ", "СОБАКА", "СОЛНЦЕ", "БЕРЕЗА"],
    correctAnswer: 0,
  },
  {
    question: "100+100?",
    options: ["2", "200", "1", "3"],
    correctAnswer: 1,
  },
  {
    question: "Столица Японии?",
    options: ["Москва", "Берлин", "Киев", "Токио"],
    correctAnswer: 3,
  },
  {
    question: "Луна это?",
    options: ["?", "?", "Луна", "?"],
    correctAnswer: 2,
  },
];

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionIndex = id ? id - 1 : 0;
  const question = questionsData[questionIndex];
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState(
    Array(questionsData.length).fill(null)
  );

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[questionIndex] =
        selectedOption === question.correctAnswer;
      setUserAnswers(updatedUserAnswers);

      if (questionIndex < questionsData.length - 1) {
        setSelectedOption(null);
        navigate(`/question/${+id + 1}`);
      } else {
        navigate("/results", { state: { userAnswers: updatedUserAnswers } });
      }
    }
  };

  return (
    <div className="questionPage">
      <div className="questionPage__wrapper">
        <h2>
          Вопрос {id} из {questionsData.length}
        </h2>
        <p>{question.question}</p>
        <div className="questionPage__options">
          {question.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="answer"
                checked={selectedOption === index}
                onChange={() => handleOptionSelect(index)}
              />
              {option}
            </label>
          ))}
        </div>

        {questionIndex + 1 === questionsData.length ? (
          <button className="MyBtn" onClick={handleNextClick}>
            Закончить и показать результаты
          </button>
        ) : (
          <button className="MyBtn" onClick={handleNextClick}>
            Далее
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
