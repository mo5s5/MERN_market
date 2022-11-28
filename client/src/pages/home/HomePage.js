import React from 'react'
import Main from '../../components/main/Main'


export default function HomePage(props) {
  const { categories, onChooseCategory } = props;
  return (
    <div className='homePage'>
      <Main
        onChooseCategory={onChooseCategory}
        categories={categories}
      />
    </div>
  )
}


