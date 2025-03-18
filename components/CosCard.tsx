import { saveOrderProduct } from '@/store/productsSlice'
import { ProductType } from '@/types'
import ButtonUi from '@/ui/ButtonUi'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import React, { FC, useState } from 'react'

const CosCard: FC<{ item: ProductType }> = ({ item }) => {
    const [count, setCount] = useState<number>(0)
    const [typeId, setTypeId] = useState<0 | 1>(0)
    const [sizeId, setSizeId] = useState<0 | 1 | 2>(0)
    const orderList = useSelector((state: { orderList: ProductType[] }) => state.orderList)
    const dispatch = useDispatch()

    const handleOrderBtnClick = (obj: ProductType) => {
        const isThere = orderList.some(item => item.id === obj.id && item.sizeId === sizeId && item.typeId === typeId)
        setCount(count + 1)
        const newOrderCount = { ...obj, count: isThere ? count + 1 : 1, typeId, sizeId }
        setCount(count + 1)
        dispatch(saveOrderProduct(newOrderCount))
    }
    return (
        <div className='space-y-4 mt-10'>
            <Image className='w-[260px] mx-auto h-[260px]' src={item.img} alt={item.title} width={260} height={260} priority />
            <strong className='text-center block'>{item?.title}</strong>
            <div className='bg-[#F3F3F3] cardDiv p-[7px] space-y-2 rounded-[10px] overflow-hidden'>
                <Tabs defaultValue={"0"} className='bg-[#F3F3F3'>
                    <TabsList className='flex items-center  gap-2'>
                        <TabsTrigger className='typeTap w-[50%] py-[10px] bg-[#F3F3F3] duration-300 px-[20px] rounded-md' value={"0"}>тонкое</TabsTrigger>
                        <TabsTrigger className='typeTap w-[50%] py-[10px] bg-[#F3F3F3] p-[6px] duration-300 px-[20px] rounded-md' value={"1"}>традиционное</TabsTrigger>
                    </TabsList>
                </Tabs>
                <Tabs defaultValue={"0"} className='bg-[#F3F3F3'>
                    <TabsList className='flex items-center gap-2'>
                        <TabsTrigger className='typeTap py-[10px] bg-[#F3F3F3] p-[6px] duration-300 px-[20px] rounded-md' value={"0"}>26 см.</TabsTrigger>
                        <TabsTrigger className='typeTap py-[10px] bg-[#F3F3F3] duration-300 text-center px-[25px] rounded-md' value={"1"}>30 см.</TabsTrigger>
                        <TabsTrigger className='typeTap py-[10px] bg-[#F3F3F3] duration-300 px-[20px] rounded-md' value={"2"}>40 см.</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <div className='flex items-center justify-between'>
                <strong>от 395 ₽</strong>
                <ButtonUi onClick={() => handleOrderBtnClick(item)} filled={count > 0 ? false : true}>+ Добавить {count !== 0 && <span className='bg-[#FE5F1E] w-[20px] h-[20px] rounded-full text-white'>{count}</span>} </ButtonUi>
        </div>
        </div >
    )
}

export default CosCard