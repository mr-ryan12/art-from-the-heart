import React from 'react'
import './CategoryCard.scss'
import { Link } from 'react-router-dom'
import { CategoryCardProps } from '../interface'

const CategoryCard: React.FC<CategoryCardProps> = props => {
  return (
    <Link className={'category-card' + props.darkMode} to={`/${props.category}`} >
      <section>
        <p>{props.category}</p>
      </section>
    </Link>
  )
}

export default CategoryCard