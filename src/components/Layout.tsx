import { FC } from 'react'
import { Outlet } from 'react-router'
import { Header } from './Header.tsx'
import { SideBar } from './SideBar.tsx'

interface Props {
	className?: string
}

export const Layout: FC<Props> = ({ className }) => {
	return (
		<div className={`${className} flex`}>
			<Header />
			<SideBar />
			<div className='relative top-[80px] left-[144px] w-[calc(100vw-144px)]'>
				<Outlet/>
			</div>
		</div>
	)
}