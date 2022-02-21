import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './Categories.scss'

const Categories: React.FC = () => {
  const categories = ['photography', 'watercolor', 'painting', 'oil painting', 'sculpture', 'pencil', 'pastels', 'chalk']
  const allCategories = categories.map(category => {
    return (
      <CategoryCard key={category} category={category} />
    )
  })
  
  return (
    <section className="main-page-container">
      <section className="welcome-message">
        <h2>Welcome to Art From the Heart!</h2>
        <p>Test your skills by rating art and seeing how you compare to the community!</p>
        <p>Detailed information about an art piece is only revealed after you rate to avoid impacting your vote.</p>
        <p>Good luck!</p>
      </section>
      <section className="categories-container">
        {allCategories}
      </section>
    </section>
  )
}

export default Categories