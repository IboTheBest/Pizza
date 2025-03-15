"use client"
import CosCard from '@/components/CosCard'
import getRequest from '@/service/getRequest'
import { ProductsType } from '@/types'
import React from 'react'

const Pizzas = () => {
  const {data:products,isLoading} = getRequest("/products", "product")
  return (
    <div className=' p-[83px]'>
        <h2 className='text-[32px] leading-[100%] font-black'>Все пиццы</h2>
       <div className='flex flex-wrap justify-between'>
       {isLoading ? "loading..." : products.map((item:ProductsType)=><CosCard key={item.id} item={item}/>)}
       </div>
    </div>
  )
}

export default Pizzas