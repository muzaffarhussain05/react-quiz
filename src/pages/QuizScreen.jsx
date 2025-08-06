"use client"

import { useState } from "react"
import { data } from "../data/data"
import Timer from "../components/Timer"
import ProgressBar from "../components/ProgressBar"

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  const totalQuestions = data.length
  const maxScore = totalQuestions * 10
  const progress = ((currentQuestion + 0) / totalQuestions) * 100

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
    <div className="min-h-screen text-white flex justify-center px-2 sm:px-4 mt-4 sm:mt-6">
      <div className="w-full max-w-2xl sm:min-w-[600px] mx-auto">
        <ProgressBar progress={progress} />
        
        <div className="flex justify-between items-center mb-4 sm:mb-5">
          <div className="text-slate-300 text-sm sm:text-base">
            Question {currentQuestion + 1} / {totalQuestions}
          </div>
          <div className="text-slate-300 text-sm sm:text-base">
            {score} / {maxScore}
          </div>
        </div>
        
        <div className="mb-6 sm:mb-8 min-h-[60px] sm:min-h-[80px] flex items-center">
          <h1 className="text-xl sm:text-2xl font-medium leading-relaxed w-full">
            {data[currentQuestion].question}
          </h1>
        </div>
        
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-3">
          {data[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full min-h-[50px] sm:min-h-[60px] p-3 sm:p-[14px] rounded-full text-left text-lg sm:text-xl font-medium transition-colors duration-200 flex items-center ${getButtonStyle(
                index,
              )} ${isAnswered ? "cursor-default" : ""}`}
              disabled={isAnswered}
            >
              <span className="w-full">{option}</span>
            </button>
          ))}
        </div>
        
        <div className="flex justify-between items-center flex-col sm:flex-row gap-4 sm:gap-0">
          <div className="px-2 sm:px-4 py-2 rounded-full text-slate-300 text-sm sm:text-base">
            <Timer initialTime={420} onTimeUp={() => setShowResult(true)} />
          </div>
          {isAnswered && (
            <button
              onClick={handleNext}
              className="bg-slate-600 hover:bg-slate-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors duration-200 text-base sm:text-lg font-medium w-full sm:w-auto"
            >
              {currentQuestion < totalQuestions - 1 ? "Next" : "Finish"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
