import { props } from 'cypress/types/bluebird'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ErrorHandlingProps } from '../interface'
import './404.scss'

const ErrorHandling: React.FC<ErrorHandlingProps> = ({ message, darkMode }) => {
  return (
    <section className="error">
      <img className="error-pic" src="https://media2.giphy.com/media/rYEAkYihZsyWs/giphy.gif?cid=ecf05e47mxw0p2ev880va40mrexkbc8mm0gvmprvp8elek15&rid=giphy.gif&ct=g" alt="Bob Ross 404 error"/>
      <h1 className="error-message">{message}</h1>
      <NavLink to="/" className={"return-to-main" + darkMode}>Back To Main Page</NavLink>
    </section>
  )
}

export default ErrorHandling;