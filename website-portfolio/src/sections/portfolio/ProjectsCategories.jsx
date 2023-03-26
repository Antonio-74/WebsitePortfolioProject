import React, { useState } from 'react';
import CategoryButton from './CategoryButton';

function ProjectsCategories({categories, onFilterProjects}) {
  const [activeCategory, setActiveCategory] = useState('all'); 

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  }

  return (
    <div className='portfolio__categories'>
        {categories.map(category => (
            <CategoryButton 
                key={category} 
                category={category} 
                className={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'}`} 
                onChangeCategory={() => changeCategoryHandler(category)}
            />
        ))}
    </div>
  )
}

export default ProjectsCategories