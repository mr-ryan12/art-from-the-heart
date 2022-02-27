import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import { CategoriesProps } from '../interface'
import './Categories.scss'
import { motion } from "framer-motion"

const Categories: React.FC<CategoriesProps> = props => {
  const allCategories = props.categories.map(category => {
    return (
      <CategoryCard key={category} category={category} />
    )
  })
  
  return (
    <motion.section
      className="main-page-container"
      animate={{ opacity: [0 ,1] }}
      transition={{ duration: .4 }}
    >
      <section className="welcome-message">
        <h2 className="title">Welcome to Art From the Heart!</h2>
        <p>Test your skills by rating art and seeing how you compare to the community! Detailed information about an art piece is only revealed after you rate to avoid impacting your vote.</p>
        <p className="luck">Good luck!</p>
      </section>
      <section className="categories-container">
        {allCategories}
      </section>
    </motion.section>
  )
}

export default Categories