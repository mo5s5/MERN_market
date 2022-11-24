import React from 'react'
import Main from '../../components/main/Main'


export default function HomePage(props) {
  // const { categories, onAdd } = props;

  const { categories, onChooseCategory } = props;


  // const { categories } = data;
  // const [cartItems, setCartItems] = useState("");
  // const onAdd = (category) => {
  //     // const exsist=cartItems.find(x=>x.id===product.id);

  //     setCartItems(category.price);

  //   }
  return (
    <div className='homePage'>
      {/* <Main onAdd={onAdd} categories={categories} /> */}
      <Main
        onChooseCategory={onChooseCategory}
        categories={categories}
      />
    </div>
  )
}


