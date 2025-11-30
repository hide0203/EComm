import React from 'react'
import MovingBall from './MovingBall.js'

export default function App() {
  return React.createElement(
    'div',
    { className: 'page' },
    React.createElement('h1', null, 'Moving Ball Animation'),
    React.createElement(MovingBall, null)
  )
}
