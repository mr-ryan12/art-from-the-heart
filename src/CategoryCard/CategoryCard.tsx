import React from 'react'
import './CategoryCard.scss'

interface Props {
  category: string;
}

const CategoryCard: React.FC<Props> = props => {
  return (
    <section className="category-card">
      <img src="https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg" alt="painting of people at a park on a sunny day" />
      <p>{props.category}</p>
    </section>
  )
}

export default CategoryCard