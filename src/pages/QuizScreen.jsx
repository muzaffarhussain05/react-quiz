import { useApp } from "../context/AppContext";

import Timer from "../components/Timer";
import ResultScreen from "./ResultScreen";

export default function QuizScreen() {
  const { state, dispatch, data, totalQuestions, maxScore } = useApp();
  const { currentQuestion, selectedAnswer, score, showResult, isAnswered } =
    state;

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex) => {
    dispatch({
      type: "SELECT",
      payload: { questionIndex: currentQuestion, answerIndex },
    });
  };

  const handleNext = () => {
    dispatch({ type: "NEXT" });
  };

  const resetQuiz = () => {
    dispatch({ type: "RESET" });
  };

  const getButtonStyle = (optionIndex) => {
    if (!isAnswered) {
      return "bg-[#495057] hover:bg-transparent hover:border-[#495057] hover:border-2 text-white cursor-pointer transform hover:translate-x-2 transition-transform duration-300 ease-in-out";
    }

    const q = data[currentQuestion];
    const correctIndex = q?.correctAnswer ?? q?.correctOption;
    const isCorrect = optionIndex === correctIndex;
    const isSelected = optionIndex === selectedAnswer;

    if (isCorrect) {
      return "bg-teal-500 text-white transform translate-x-2 transition-transform duration-300 ease-in-out cursor-not-allowed";
    } else if (isSelected || (!isSelected && !isCorrect)) {
      return "bg-orange-400 text-slate-800 cursor-not-allowed";
    }

    return "bg-slate-600 text-white";
  };

  if (showResult) {
    return <ResultScreen
    score={score}
    total={maxScore}
    
    
  />;
  }

  const current = data[currentQuestion];

  return (
    <div className="min-h-screen text-white">
      <div className="w-full max-w-2xl mx-auto">
      
        <div className="mb-6">
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="text-slate-300">
            Question {currentQuestion + 1} / {totalQuestions}
          </div>
          <div className="text-slate-300">
            {score} / {maxScore}
          </div>
        </div>

     
        <div className="mb-3">
          <h1 className="text-2xl font-medium leading-relaxed">
            {current.question}
          </h1>
        </div>

        <div className="space-y-4 mb-3">
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full min-h-[60px] p-[14px] rounded-full text-left text-md font-medium transition-colors duration-200 flex items-center ${getButtonStyle(
                index
              )} ${isAnswered ? "cursor-default" : ""}`}
              disabled={isAnswered}
            >
              <span className="w-full">{option}</span>
            </button>
          ))}
        </div>

      
        <div className="flex justify-between items-center">
          <div className="px-4 py-2 rounded-full text-slate-300">
            <Timer
              initialTime={420}
              onTimeUp={() => dispatch({ type: "TIME_UP" })}
            />
          </div>
          {isAnswered && (
            <button
              onClick={handleNext}
              className="bg-slate-600 hover:bg-slate-500 text-white px-8 py-3 rounded-full transition-colors duration-200 text-lg font-medium"
            >
              {currentQuestion < totalQuestions - 1 ? "Next" : "Finish"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
