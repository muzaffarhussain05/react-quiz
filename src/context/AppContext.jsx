import {  createContext, useContext } from "react";
import {  useReducer } from "react";
import { data } from "../data/data";


const AppContext = createContext(undefined);
const initialState = {
  currentQuestion: 0,
  selectedAnswer: null,
  score: 0,
  showResult: false,
  isAnswered: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT": {
      if (state.isAnswered) return state;

      const { questionIndex, answerIndex } = action.payload;
      const q = data[questionIndex];
      const correctIndex = q?.correctAnswer ?? q?.correctOption;
      const points = q?.points ?? 10;
      const earned = answerIndex === correctIndex ? points : 0;

      return {
        ...state,
        selectedAnswer: answerIndex,
        isAnswered: true,
        score: state.score + earned,
      };
    }

    case "NEXT": {
      const nextIndex = state.currentQuestion + 1;
      if (nextIndex >= data.length) {
        return {
          ...state,
          showResult: true,
        };
      }
      return {
        ...state,
        currentQuestion: nextIndex,
        selectedAnswer: null,
        isAnswered: false,
      };
    }

    case "TIME_UP":
      return { ...state, showResult: true };

    case "RESET":
      return { ...initialState };

    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const totalQuestions = data.length;
  const maxScore = data.reduce((s, q) => s + (q.points ?? 10), 0);

  return (
    <AppContext.Provider
      value={{ state, dispatch, data, totalQuestions, maxScore }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

