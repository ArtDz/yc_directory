import {FC, PropsWithChildren} from 'react'
import Navbar from '@/components/Navbar'

const Layout:FC<PropsWithChildren> = ({children}) => {
    return (
        <main className='font-work-sans'>
            <Navbar/>

            {children}
        </main>
    )
}

export default Layout
