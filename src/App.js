import { useEffect, useState } from 'react'
import productApi from './api/postsApi'
import ListUser from './Users/ListUser'

function App() {
  const [postList, setPostList] = useState([])
  
  useEffect(() => {
    const getproductList = async () => {
      try {     
        const respone = await productApi.getAll()
        //console.log(respone)   
        setPostList(respone.data)
      } catch (error) {
        console.log("error: ", error)
      }
    }

    getproductList()

  }, [])

  return (
    <div className="App">
      <ListUser />
    </div>
  );
}

export default App;
