import React from 'react'
import './EmployeeGame.css'

interface EmployeeQuestionProps {
  question: string
}

export const EmployeeQuestion: React.SFC<EmployeeQuestionProps> = ({ question }) => (
  <p className="question">
    Who is <span className="question-color">{question}</span>?
  </p>
)
