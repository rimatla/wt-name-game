import React from 'react'
import './Error.css'

export const Error: React.SFC<{}> = () => (
  <p className="error">
    Oh No!
    <span
      className="emoji"
      role="img"
      aria-label="crying face"
      style={{ display: 'inline-block', padding: '5px' }}
    >
      😢
    </span>
    We're working to fix this soon{' '}
    <span
      className="emoji"
      role="img"
      aria-label="man firefighter"
      style={{ display: 'inline-block', padding: '5px' }}
    >
      👨‍🚒
    </span>
    <span
      className="emoji"
      role="img"
      aria-label="hammer and wrench"
      style={{ display: 'inline-block', padding: '5px' }}
    >
      🛠
    </span>
  </p>
)
