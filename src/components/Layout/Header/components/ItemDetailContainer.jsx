import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea } from '@mui/material';

const ItemDetailContainer = ({producto}) => {

    const {title, price, brand, description} = producto;
    //console.log(producto.images)
    const imagen = producto?.images?.[0];

  return (
    <div className='w-auto my-10 px-40'>
        <Card>
            <CardActionArea>
                <div className='w-full flex justify-center'>
                    <img
                        src={imagen} 
                        alt={title}
                        className='h-86 w-auto my-8 '
                    />
                </div>
                <CardContent className='flex flex-col items-center'>
                    <h2 className='text-center font-semibold text-2xl'>
                        {title}
                    </h2>
                    <p>
                        {description}
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
                
            </div>
        </Card>
    </div>
  )}

export default ItemDetailContainer
