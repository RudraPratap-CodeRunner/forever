import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-gray-700 cursor-pointer'>
        <div className='overflow-hidden hover:scale-[1.05] transition ease-in-out'>
            <img  src={image[0]} alt="" />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="font-medium text-sm">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem