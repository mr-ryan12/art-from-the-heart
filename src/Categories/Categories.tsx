import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './Categories.scss'

interface CategoryProps {
  getCategory: (text: string) => void;
  imageId: string
}

const Categories: React.FC<CategoryProps> = ({getCategory, imageId}) => {
  const categories = ['photography', 'watercolor', 'painting', 'oil painting', 'sculpture', 'pencil', 'pastels', 'chalk']
  const allCategories = categories.map(category => {
    return (
      <CategoryCard key={category} category={category} acquireCategory={getCategory} artImageId={imageId} /> //we need to pass down the function to here as a prop
    )
  })
  
  return (
    <section className="categories-container">
      {allCategories}
    </section>
  )
}

export default Categories