import { useEffect, useState } from 'react'
import Producto from '../components/Producto'
import axios from 'axios'

const Catalogo = () => {
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios('https://dummyjson.com/products').then((res) => 
            setProductos(res.data.products)
            );        
    },[]);

  return (

    <div>
        <div className='my-10 py-6 bg-naranja'>
            <h1 className='text-5xl text-center uppercase text-white font-bold'>Catalogo</h1>
        </div>

        <div className='grid grid-cols-4 gap-10 p-10'>
         {productos.map((producto) => {
            return(
                <Producto 
                    producto = {producto}
                    key = {producto.id}
                />                    
            )
        })};
        </div>
    
    </div>

  )
}

export default Catalogo
    