import {FC} from 'react'

interface Props {
	className?: string
}

export const Header: FC<Props> = ({className}) => {
	return (
		<header className={`${className} font-nunito text-[15px] bg-white w-screen h-20 shadow-2xl rounded-lg px-14 flex justify-between items-center fixed z-10`}>
			<img src="/logo.svg" alt="logo"/>
			<div className='flex items-center gap-2'>
				<h2>John Smith</h2>
				<img src="/profile.svg" alt="profile"/>
			</div>
		</header>
	)
}