import React from 'react'
import './CategoryCard.scss'
import {Link} from 'react-router-dom'

interface Props {
  category: string;
}

const CategoryCard: React.FC<Props> = props => {
  return (
    <Link className='category-card' to={`/${props.category}`} >
      <section >
        <p>{props.category}</p>
      </section>
    </Link>
  )
}

export default CategoryCard