import { BasketIcon } from '@/assets/icons'
import ButtonUi from '@/ui/ButtonUi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='p-[30px] flex items-center justify-between'>
        <Link href={"/"}>
            <Image className='w-[216px] h-[46px]' alt='img logo' src={"/icon.svg"} width={216} height={46} priority/>
        </Link>
        <ButtonUi extraClass='!rounded-[30px]' filled={true}>
          <strong>520 ₽</strong>
          <div className='p-[13px] flex gap-1  border-l-[1px] border-[#FFFFFF40]'>
            <BasketIcon/>
            <span>0</span>
          </div>
        </ButtonUi>
    </header>
  )
}

export default Header