import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

import ItemDetailContainer from '../components/Layout/Header/components/ItemDetailContainer'


const DetailPage = () => {
   
    const {id} = useParams();
    
    const [producto, setProducto] = useState({});

    useEffect(() => {
        axios(`https://dummyjson.com/products/${id}`).then((res) => 
            setProducto(res.data)
            );        
    },[]);

  return (
    <div>
      {producto && 
        <ItemDetailContainer 
            producto = {producto}
        />}
    </div>
  )
}

export default DetailPage
