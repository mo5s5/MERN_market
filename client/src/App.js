
import './App.scss';
import TopBar from './components/topBar/TopBar.js';
// import data from './data.js';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ContactsPage from './pages/contacts/ContactsPage';
import ProductsPage from './pages/products/ProductsPage';
// import NavBar from './components/topBar/navBar/NavBar';
import DeliveryPage from './pages/delivery/DeliveryPage';
import CartPage from './pages/cart/CartPage';
import SalesPage from './pages/salesPage/SalesPage';
import axios from 'axios';

function App() {

  // console.log(window.location);

  // const { categories } = data;

  const [categories, setCategories] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState();



  // const dbData=getCategories;
  // console.log(dbData)
  //  const { categories } = dbData;




  /*** es sax texapoexeci useEffecti mej vor warning chberi EsLint@ mek el vor infinite zapros chuxarki
  
    // const dbData = [];
    // const getCategories = () => {
    //   axios.get('/api')
    //     .then((response) => {
    //       setCategories(response.data);
    //       console.log('data has been received');
    //       return dbData;
    //     }).catch((error) => {
    //       alert(error)
    //     })
    // }
    
    ******/

  useEffect(() => {
    const dbData = [];
    const getCategories = () => {
      axios.get('/api')
        .then((response) => {
          setCategories(response.data);
          console.log('data has been received');
          return dbData;
        }).catch((error) => {
          alert(error)
        })
    }
    getCategories();
  }, []);
  // console.log(dbData);

  const onChooseCategory = (category) => {
    setProducts(category.products)
  }

  const onAddToCart = (product) => {
    const exsist = cartItems.find(x => x.id === product.id);
    if (exsist) {
      setCartItems(
        cartItems.map(x => x.id === product.id ? { ...exsist, qty: exsist.qty + 1 } : x)
      );

    } else {
      setCartItems(
        [...cartItems, { ...product, qty: 1 }]
      )
    }
    console.log(product.count);
  }

  const onSubstract = (product) => {
    const exsist = cartItems.find(x => x.id === product.id);
    if (exsist.qty <= 1) {
      setCartItems(
        cartItems.filter(x => x.id !== product.id)
      );
    }
    else {
      setCartItems(
        cartItems.map(x => x.id === product.id ? { ...exsist, qty: exsist.qty - 1 } : x)
      )
    }
  }


  const onRemoveFromCart = (cartItems, item) => {
    setCartItems(
      cartItems.filter(x => x.id !== item.id)
    )
  }

  return (
    <div className='App'>
      <TopBar cartItems={cartItems} />

      <Routes>
        {/* <Route path='/' element={<HomePage onAdd={onAdd} categories={categories} />}></Route> */}
        <Route path='/' element={
          <HomePage
            categories={categories}
            onChooseCategory={onChooseCategory}
          />}></Route>
        <Route path='/delivery' element={<DeliveryPage />} ></Route>
        <Route path='/contacts' element={<ContactsPage />}></Route>
        <Route path='/basket'
          element={
            <CartPage
              cartItems={cartItems}
              onAddToCart={onAddToCart}
              onSubstract={onSubstract}
              onRemoveFromCart={onRemoveFromCart}
            />
          }>
        </Route>

        <Route path='/products'
          element={
            <ProductsPage
              onChooseCategory={onChooseCategory}
              onAddToCart={onAddToCart}
              categories={categories}
              products={products}
            />}>
        </Route>

        <Route path='/sale' element={<SalesPage />}></Route>
        {/* <Route path='/products' element={<ProductsPage onAddToCart={onAddToCart} categories={categories} products={categories[0].products} />}></Route> */}
      </Routes>
      {/* <Main onAdd={onAdd} categories={categories}></Main> */}
    </div>
  );
}

export default App;
