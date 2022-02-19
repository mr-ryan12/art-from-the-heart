import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './Categories.scss'

const Categories = () => {
  const categories = ['photography', 'watercolor', 'painting', 'oil painting', 'sculpture', 'pencil', 'pastels', 'chalk']
  const allCategories = categories.map(category => {
    return (
      <CategoryCard key={category} category={category}/>
    )
  })
  
  return (
    <section className="categories-container">
      {allCategories}
    </section>
  )
}

export default Categories