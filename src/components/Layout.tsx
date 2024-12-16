import {FC, PropsWithChildren} from 'react'
import {Header} from './Header.tsx'
import {SideBar} from './SideBar.tsx'

interface Props extends PropsWithChildren{
	className?: string
}

export const Layout: FC<Props> = ({className, children}) => {
	return (
		<div className={`${className}`}>
			<Header/>
			<SideBar/>
			<div className="relative top-[80px] left-[144px] w-[calc(100vw-144px)]">
				{children}
			</div>
		</div>
	)
}