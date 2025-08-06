"use client"

import { useState } from "react"
import { data } from "../data/data"
import Timer from "../components/Timer"

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  const totalQuestions = data.length
  const maxScore = totalQuestions * 10
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  const handleAnswerSelect = (answerIndex) => {
    if (isAnswered) return

    setSelectedAnswer(answerIndex)
    setIsAnswered(true)

    if (answerIndex === data[currentQuestion].correctAnswer) {
      setScore(score + data[currentQuestion].points)
    }
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setIsAnswered(false)
  }

  const getButtonStyle = (optionIndex) => {
    if (!isAnswered) {
      return "bg-[#495057] hover:bg-transparent hover:border-[#495057] hover:border-2 text-white cursor-pointer transform hover:translate-x-2 transition-transform duration-300 ease-in-out"
    }

    const isCorrect = optionIndex === data[currentQuestion].correctAnswer
    const isSelected = optionIndex === selectedAnswer

    if (isCorrect) {
      return "bg-teal-500 text-white transform translate-x-2 transition-transform duration-300 ease-in-out cursor-not-allowed"
    } else if (isSelected || (!isSelected && !isCorrect)) {
      return "bg-orange-400 text-slate-800 cursor-not-allowed"
    }

    return "bg-slate-600 text-white"
  }

  if (showResult) {
    return (
      // Display the result screen via link to another component or page
      <></>
    )
  }

  return (
    <div className="min-h-screen text-white ">
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
          <h1 className="text-2xl font-medium leading-relaxed">{data[currentQuestion].question}</h1>
        </div>

        <div className="space-y-4 mb-3">
          {data[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full min-h-[60px] p-[14px] rounded-full text-left text-md font-medium transition-colors duration-200 flex items-center ${getButtonStyle(
                index,
              )} ${isAnswered ? "cursor-default" : ""}`}
              disabled={isAnswered}
            >
              <span className="w-full">{option}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center ">
          <div className=" px-4 py-2 rounded-full text-slate-300">
            <Timer initialTime={420} onTimeUp={() => setShowResult(true)} />
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
  )
}
