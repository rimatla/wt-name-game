import React from 'react'
import { handleShuffle, handleSlice } from '../../../helpers/Helpers'
import { EmployeeTypes } from '../../../models/EmployeeTypes'
import { EmployeeQuestion } from './EmployeeQuestion'
import { EmployeeList } from './EmployeeList'
import { PlayAgainButton } from '../PlayAgainButton/PlayAgainButton'

import '../Game.css'
import './EmployeeGame.css'

/************************************ 
Functional Component Pattern
************************************/

interface EmployeeGameProps {
  people: []
  playAgain: React.MouseEventHandler<HTMLButtonElement>
}

export const EmployeeGame: React.SFC<EmployeeGameProps> = ({ people, playAgain }) => {
  const fivePeople = handleSlice(handleShuffle(people), 0, 5) // shuffle and get five people at a time
  const onePerson = handleSlice(handleShuffle(fivePeople), 2, 3) // shuffle and get one person at a time

  // get first and last name and convert the returned array into a string
  const question = onePerson
    .map(({ firstName, lastName }: EmployeeTypes) => `${firstName} ${lastName}`)
    .toString()

  const answers = fivePeople.map(
    ({ id, firstName, lastName, headshot: { url } }: EmployeeTypes) => {
      const fullName = `${firstName} ${lastName}`
      const match = fullName === question

      return <EmployeeList key={id} fullName={fullName} match={match} employeeImg={url} />
    }
  )

  return (
    <>
      <main className="employee-game-container">
        <EmployeeQuestion question={question} />
        <ul>{answers}</ul>
        <PlayAgainButton playAgain={playAgain} />
      </main>
    </>
  )
}
