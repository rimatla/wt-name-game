import React from 'react'
import './Loading.css'

interface LoadingProps {
  loading: string
}

export const Loading: React.SFC<LoadingProps> = ({ loading }) => (
  <p className="loading">{loading}</p>
)
