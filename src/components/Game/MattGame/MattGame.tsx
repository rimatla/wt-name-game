import React, { Component } from 'react'
import { handleFilterNames, handleSlice, handleShuffle } from '../../../helpers/Helpers'
import { EmployeeTypes } from '../../../models/EmployeeTypes'
import { EmployeeList } from '../EmployeeGame/EmployeeList'
import { EmployeeQuestion } from '../EmployeeGame/EmployeeQuestion'
import { PlayAgainButton } from '../PlayAgainButton/PlayAgainButton'
import '../EmployeeGame/EmployeeGame.css'

/************************************  
Class Component Pattern
*************************************/

interface MattProps {
  people: []
  playAgain: React.MouseEventHandler<HTMLButtonElement>
}

export default class MattGame extends Component<MattProps> {
  public render() {
    const { people, playAgain } = this.props

    const filterMatt = handleFilterNames(people, 'Matt', 'firstName') // filter every Name which begins with 'Matt'
    const fiveMatts = handleSlice(handleShuffle(filterMatt), 0, 5) // shuffle and get five people at a time
    const oneMatt = handleSlice(handleShuffle(fiveMatts), 2, 3) // shuffle and get one person at a time

    // get first and last name and convert the returned array into a string
    const mattQuestion = oneMatt
      .map(({ firstName, lastName }: EmployeeTypes) => `${firstName} ${lastName}`)
      .toString()

    const mattAnswers = fiveMatts.map(
      ({ id, firstName, lastName, headshot: { url } }: EmployeeTypes) => {
        const fullName = `${firstName} ${lastName}`
        const match = fullName === mattQuestion

        return <EmployeeList key={id} fullName={fullName} match={match} employeeImg={url} />
      }
    )
    return (
      <main className="employee-game-container">
        <EmployeeQuestion question={mattQuestion} />
        <ul>{mattAnswers}</ul>
        <PlayAgainButton playAgain={playAgain} />
      </main>
    )
  }
}
