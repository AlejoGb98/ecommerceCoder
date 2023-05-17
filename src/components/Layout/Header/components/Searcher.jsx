import search from '../../../../img/search.png'


const Searcher = () => {
  return (
    <div>
        <form action="" className='rounded-3xl bg-grey flex items-center'>

            <label htmlFor="searcher"></label>
            <input className='py-2 px-6 mx-4 w-96 rounded-3xl text-xl bg-grey focus:outline-none'  placeholder='Buscar un producto' id='searcher' type="text"/>
        
            <div className=''>
                <img className='w-8 mx-4' src={search} alt="" />
            </div>
        </form>
    </div>
    

  )
}

export default Searcher
