import { ReactNode } from "react";

export interface ButtonType {
    children: ReactNode
    icon?: ReactNode
    iconPosition?: boolean
    filled?: boolean
    extraClass?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void
}

export interface CategoriesType {
    id: string,
    name: string,
    isActive: boolean
}

export interface ProductType {
    id?: string,
    img: string
    title: string
    typeId: number
    sizeId: number
    price: string
    savedCount: number
    categoryId: number
}