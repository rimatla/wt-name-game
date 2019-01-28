import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { EmployeeGame } from './components/Game/EmployeeGame/EmployeeGame'
import MattGame from './components/Game/MattGame/MattGame'

interface RoutesProps {
  state: object[] | any
  playAgain: React.MouseEventHandler<HTMLButtonElement>
}

export const Routes: React.SFC<RoutesProps> = ({ state, playAgain }) => (
  // key={...} induce react to re-mount the component on every matching routing event
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route
      path="/play-game"
      render={() => <EmployeeGame {...state} key={Math.random()} playAgain={playAgain} />}
    />
    <Route
      path="/play-matt"
      render={() => <MattGame {...state} key={Math.random()} playAgain={playAgain} />}
    />
    <Redirect to="/" />
  </Switch>
)
