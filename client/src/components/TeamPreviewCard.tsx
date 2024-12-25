import {FC} from 'react'

interface Props {
	className?: string
	name: string
	teamLogo: string
	foundationalYear: number
}

export const TeamPreviewCard: FC<Props> = ({className, name, foundationalYear}) => {
	return (
		<div className={`${className} w-[100%] h-[100%]`}>
			<div className='w-96'>
				<img alt="team-logo" className="w-20 h-20"/>
			</div>
			<div className='bg-blue-200 p-7 text-white'>
				<h2>{name}</h2>
				<p>Year of foundation: {foundationalYear}</p>
			</div>
		</div>
	)
}