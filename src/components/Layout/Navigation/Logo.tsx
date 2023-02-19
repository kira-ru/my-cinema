import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@assets/image/logo.png'

export const Logo: FC = () => {
    return (
        <Link href="/" className='flex items-center gap-3 mb-6'>
            <Image src={logo} alt="logo" />
            <span className='text-2xl'>My cinema</span>
        </Link>
    )
}
