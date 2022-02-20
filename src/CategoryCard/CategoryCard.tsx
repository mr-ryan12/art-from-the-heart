import React from 'react'
import './CategoryCard.scss'
import {Link} from 'react-router-dom'

interface Props {
  acquireCategory: (text: string) => void
  category: string;
  artImageId: string
}

const CategoryCard: React.FC<Props> = props => {
  return (
    <Link onClick={() => props.acquireCategory(props.category)} className='category-card' to={`/${props.category}`} >
      <section >
        <p>{props.category}</p>
      </section>
    </Link>
  )
}

export default CategoryCard