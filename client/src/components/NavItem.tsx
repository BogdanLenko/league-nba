import {FC} from 'react'
import {Link, useLocation} from 'react-router'

interface Props {
	className?: string
	title: string
	icon: {
		logo: string
		activeLogo: string
	}
	id: number
}

export const NavItem: FC<Props> = ({className, title, icon}) => {
	
	const location = useLocation()
	const isActive = location.pathname === `/${title}`
	
	return (
		<div className={`${className}`}>
			<Link to={`/${title}`} className="flex flex-col justify-center items-center">
				<img src={ isActive ? icon.activeLogo : icon.logo} alt={title} className="w-6 h-6"/>
				<p className={isActive ? 'text-red-500' : 'text-gray-400'}>{title}</p>
			</Link>
		</div>
	)
}