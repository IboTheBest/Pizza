"use client"
import CosCard from '@/components/CosCard'
import { Context } from '@/context/context'
import getRequest from '@/service/getRequest'
import { ProductType } from '@/types'
import React, { useContext } from 'react'

const Pizzas = () => {
  const {categoryId} = useContext(Context) 
  const { data: products, isLoading } = getRequest(`/products`, "product", categoryId);
  
  return (
    <div className=' p-[83px]'>
        <h2 className='text-[32px] leading-[100%] font-black'>Все пиццы</h2>
       <div className='flex flex-wrap justify-between'>
       {isLoading ? "loading..." : products.map((item:ProductType)=><CosCard key={item.id} item={item}/>)}
       </div>
    </div>
  )
}

export default Pizzas