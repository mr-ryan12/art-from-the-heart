import React from 'react';
import './404.scss'
interface EProps {
  message: string
}

const ErrorHandling: React.FC<EProps> = ({message}) => {
  return (
    <section className="error">
      <img src="https://media2.giphy.com/media/rYEAkYihZsyWs/giphy.gif?cid=ecf05e47mxw0p2ev880va40mrexkbc8mm0gvmprvp8elek15&rid=giphy.gif&ct=g" alt="Bob Ross 404 error"/>
      <h1 className="error-message">{message}</h1>
    </section>
  )
}

export default ErrorHandling;