import { Button } from '@/components/ui/button'
import { ButtonType } from '@/types'
import React, { FC } from 'react'

const ButtonUi: FC<ButtonType> = ({children,onClick, filled, icon, iconPosition, extraClass}) => {
  return (
    <Button onClick={onClick} className={`${extraClass} hover:scale-3d duration-300 hover:opacity-80   border-transparent border-[2px] ${filled ? "bg-[#FE5F1E] hover:bg-[#FE5F1E] text-white" : "border-[#FE5F1E] hover:bg-white bg-white text-[#FE5F1E]"}`}>
        {iconPosition && icon} 
        {children}
        {!iconPosition && icon}
    </Button>
  )
}

export default ButtonUi