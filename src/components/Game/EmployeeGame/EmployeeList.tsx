import React, { Component, useState } from 'react'
import posed from 'react-pose'

/************************************ 
React Hooks Pattern
************************************/

// React Pose Animation Library
const Employee = posed.span({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { ease: 'easeIn', duration: 300 },
    },
  },
})

interface EmployeeListProps {
  fullName: string
  match: boolean
  employeeImg: string
}

export const EmployeeList = ({ fullName, match, employeeImg }: EmployeeListProps) => {
  const [show, setShow] = useState<boolean>(false)

  function handleShow() {
    setShow(true)
  }

  function handleBgColor() {
    // check if we are showing the answer and apply the correct color based on right or wrong condition
    if (show) {
      return match ? 'right' : 'wrong'
    }
    return ''
  }

  function handleEmoji() {
    // check if we are showing the answer and apply the appropriate emoji based on right or wrong condition
    if (show) {
      return match ? (
        <span
          className="emoji"
          role="img"
          aria-label="party popper and smiling face with sunglasses"
        >
          🎉😎
        </span>
      ) : (
        <span className="emoji" role="img" aria-label="slightly frowning face">
          🙁
        </span>
      )
    }
    return ''
  }

  return (
    <li onClick={handleShow} className={`${handleBgColor()}`}>
      <img
        src={`${employeeImg ? employeeImg : 'http://pngimg.com/uploads/mario/mario_PNG53.png'}`}
        alt="employee image"
      />
      <Employee
        pose={show ? 'visible' : 'hidden'}
        className={`${show ? 'show' : 'hide'} ${match ? 'overlay-right' : 'overlay-wrong'}`}
      >
        <span className="employee-name">{fullName}</span>
        {handleEmoji()}
      </Employee>
    </li>
  )
}
