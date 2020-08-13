import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
  return (
    <div>
      <Link to="/">Go to home</Link>
      <span>This is about page</span>
    </div>
  )
}
