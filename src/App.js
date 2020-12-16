import React, {useState, useEffect} from 'react'
import { Products, Navbar } from './components'
import { commerce } from './lib/commerce';


const App = () => {
  const [products, setProducts ] = useState([])

  const fetchProducts = async () => {
    // console.log(commerce.products.list());
    const { data } = await commerce.products.list();
    setProducts(data)
    console.log('Hello')
  }

  useEffect(() => {
    fetchProducts();
  }, [])



  console.log(products);

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}

export default App
