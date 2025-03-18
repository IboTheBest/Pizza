"use client"
import { SortIcon } from '@/assets/icons'
import { Context } from '@/context/context'
import getRequest from '@/service/getRequest'
import { CategoriesType } from '@/types'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import React, { useContext, useState } from 'react'
const CategoriesCos = () => {

    const { data: categories, isLoading } = getRequest("/categories", "category")
    const [popUp, setPopUp] = useState<string>("")
    const { categoryId, setCategoryId } = useContext(Context) ?? {}

    function handleCategoryClick(id: any) {
        if (id == "1") {
            setCategoryId?.(null)
        }else{
            setCategoryId?.(id)
        }
    }
    console.log(categoryId);
    

    return (
        <div className='flex items-center justify-between p-[67px]'>
            <Tabs defaultValue={"Все"} >
                <TabsList className='flex items-center gap-2'>
                    {categories.map((item: CategoriesType) => (
                        <TabsTrigger key={item.id} onClick={() => handleCategoryClick(item.id)} className='tabs py-[10px] bg-[#F9F9F9] duration-300 px-[20px] rounded-[30px]' value={item.name}>
                            {item.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
            <div>


                <Popover>
                    <PopoverTrigger className="flex items-center gap-1">
                        <SortIcon />Сортировка по:<span className='text-[#FE5F1E] underline-dashed'>{popUp ? popUp : "..."}</span>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white border shadow-md rounded-md">
                        <div className="flex flex-col">
                            <button onClick={() => setPopUp("Популярности")} className='hover:bg-[#FE5F1E0D] text-start text-black hover:text-[#FE5F1E] py-[10px] px-[13px]'>Популярности</button>
                            <button onClick={() => setPopUp("По цене")} className='hover:bg-[#FE5F1E0D] text-start text-black hover:text-[#FE5F1E] py-[10px] px-[13px]'>По цене</button>
                            <button onClick={() => setPopUp("По алфавиту ")} className='hover:bg-[#FE5F1E0D] text-start text-black hover:text-[#FE5F1E] py-[10px] px-[13px]'>По алфавиту</button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>

    )
}

export default CategoriesCos