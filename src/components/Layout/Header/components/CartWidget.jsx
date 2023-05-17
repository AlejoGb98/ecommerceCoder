import shop from '../../../../img/shop.png'


const CartWidget = () => {
  return (
    <div className='flex'>
        <img className='w-10 mx-4 cursor-pointer' src={shop} alt="" />
        <div className='relative right-5 bottom-2 text-azul text-xl font-semibold'> 0 </div>
    </div>
  )
}

export default CartWidget
