import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '../../Routes'
import { Error } from '../Error/Error'
import { Loading } from '../Loading/Loading'
import { Navigation } from '../Navigation/Navigation'
import './Game.css'

interface GameState {
  people: object[] | any
  loading: boolean | string
  error: null
}

export default class Game extends Component<{}, GameState> {
  public state = {
    error: null,
    loading: true,
    people: [],
  }
  public async componentDidMount() {
    const url = 'https://willowtreeapps.com/api/v1.0/profiles/'
    try {
      const res = await fetch(url)
      const data = await res.json()
      this.setState({ people: data, loading: false })
    } catch (error) {
      this.setState({ error, loading: false })
      // tslint:disable-next-line: no-console
      console.error(error)
    }
  }

  public handlePlayAgain = () => {
    const { people, loading } = this.state
    this.setState({ people, loading: false })
  }

  public render() {
    const { loading, error } = this.state
    if (loading) {
      return <Loading loading="Loading..." />
    }
    if (!error) {
      return (
        <BrowserRouter>
          <div className="Game">
            <Navigation />
            <Routes state={this.state} playAgain={this.handlePlayAgain} />
          </div>
        </BrowserRouter>
      )
    }
    return <Error />
  }
}
