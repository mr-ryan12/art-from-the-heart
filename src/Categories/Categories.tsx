import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './Categories.scss'

interface CategoryProps {
  getCategory: (text: string) => void;
}

const Categories: React.FC<CategoryProps> = ({getCategory}) => {
  const categories = ['photography', 'watercolor', 'painting', 'oil painting', 'sculpture', 'pencil', 'pastels', 'chalk']
  const allCategories = categories.map(category => {
    return (
      <CategoryCard key={category} category={category} acquireCategory={getCategory} /> //we need to pass down the function to here as a prop
    )
  })
  
  return (
    <section className="categories-container">
      {allCategories}
    </section>
  )
}

export default Categories