import { useEffect, useState } from 'react'
import productApi from './api/productApi'

function App() {
  const [productList, setProductList] = useState([])
  
  useEffect(() => {
    const getproductList = async () => {
      try {     
        const respone = await productApi.get(1)
        console.log(respone)        
      } catch (error) {
        console.log("error: ", error)
      }
    }

  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
