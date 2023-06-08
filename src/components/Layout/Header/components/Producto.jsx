import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

import { Button, CardActionArea } from '@mui/material';

const Producto = ({producto}) => {

    const {id, title, price, brand} = producto;
    const imagen = producto.images[0];

  return (
    <div className='w-80'>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <div className='center'>
                    <img
                        src={imagen}
                        alt={title}
                        className='h-44 mx-auto my-2'
                    />
                </div>
                <CardContent>
                    <p className='text-center font-semibold text-xl'>
                        {title}
                    </p>
                </CardContent>
            </CardActionArea>
            <div className='flex flex-col bg-naranja'>
                <div className='flex flex-row justify-around my-4 text-lg font-semibold'>
                    <div>
                        U$ {price}
                    </div>
                    <div>
                        {brand}
                    </div>
                </div>
                
                <Link to={`/detail/${id}`}>
                    <Button className=''>
                        Ver Producto
                    </Button>
                </Link>
                
            </div>
        </Card>
    </div>
 ) 
}


export default Producto
