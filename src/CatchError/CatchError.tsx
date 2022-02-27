import React from 'react'
import { NavLink } from 'react-router-dom'

interface CEProps {
  error: string;
}

const CatchError: React.FC<CEProps> = ({error}) => {
  return (
    <section className="error">
      <img src="https://media2.giphy.com/media/vZqughbxxFLi/giphy.gif?cid=790b7611504c10151e5f7e94c35a9b41dccc3ffff218c974&rid=giphy.gif&ct=g" alt="Bob Ross server error"/>
      <h1 className="error-message">Page not found. Let's just paint a happy little "{error}"" message right here!</h1>
      <NavLink to="/">
      <button>Back To Main Page</button>
      </NavLink>
    </section>
  )
}


export default CatchError;