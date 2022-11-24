import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './categorySmall.scss';


export default function CategorySmall(props) {

  const { categories, onChooseCategory } = props

  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 120) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let categoryClasses = [''];
  if (scrolled) {
    categoryClasses.push('category-scrolled');
  }
  return (
    <div className={categoryClasses.join(" ")}>
      <p className='categorySmall-title'>Категории</p>
      {categories.map((category) => (
        <Link className='category' to={'/products'} key={category.id}>
          <div
            className='categorySmall'
            key={category.id}
            onClick={() => onChooseCategory(category)}
          > {'>'} {category.name}</div>
        </Link>
      ))}
    </div>
  )
}
