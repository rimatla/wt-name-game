import React from 'react'
import './PlayAgainButton.css'

interface PlayAgainButtontProps {
  playAgain: React.MouseEventHandler<HTMLButtonElement>
}

export const PlayAgainButton: React.SFC<PlayAgainButtontProps> = ({ playAgain }) => (
  <button className="play-again" onClick={playAgain}>
    Play Again
  </button>
)
