import { ProductsType } from '@/types'
import ButtonUi from '@/ui/ButtonUi'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import Image from 'next/image'
import React, { FC, useState } from 'react'

const CosCard: FC<{ item: ProductsType }> = ({ item }) => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className='space-y-4 mt-10'>
            <Image className='w-[260px] mx-auto h-[260px]' src={item.img} alt={item.title} width={260} height={260} priority />
            <strong className='text-center block'>{item?.title}</strong>
            <div className='bg-[#F3F3F3] cardDiv p-[7px] rounded-[10px] overflow-hidden'>
                <Tabs className='bg-[#F3F3F3'>
                    <TabsList className='flex items-center  gap-2'>
                        <TabsTrigger className='typeTap w-[50%] py-[10px] bg-[#F3F3F3] duration-300 px-[20px] rounded-md' value={"тонкое"}>тонкое</TabsTrigger>
                        <TabsTrigger className='typeTap w-[50%] py-[10px] bg-[#F3F3F3] p-[6px] duration-300 px-[20px] rounded-md' value={"традиционное"}>традиционное</TabsTrigger>
                    </TabsList>
                </Tabs>
                <Tabs className='bg-[#F3F3F3'>
                    <TabsList className='flex items-center gap-2'>
                        <TabsTrigger className='typeTap py-[10px] bg-[#F3F3F3] p-[6px] duration-300 px-[20px] rounded-md' value={"26 см."}>26 см.</TabsTrigger>
                        <TabsTrigger className='typeTap py-[10px] bg-[#F3F3F3] duration-300 px-[20px] rounded-md' value={"30 см."}>30 см.</TabsTrigger>
                        <TabsTrigger className='typeTap py-[10px] bg-[#F3F3F3] duration-300 px-[20px] rounded-md' value={"40 см."}>40 см.</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <div className='flex items-center justify-between'>
                <strong>от 395 ₽</strong>
                <ButtonUi onClick={()=>setCount(count+1)} extraClass='rounded-[30px]' filled={count > 0 ? false : true}>+ Добавить {count !== 0 && <span className='bg-[#FE5F1E] w-[20px] h-[20px] rounded-full text-white'>{count}</span>} </ButtonUi>
            </div>
        </div>
    )
}

export default CosCard