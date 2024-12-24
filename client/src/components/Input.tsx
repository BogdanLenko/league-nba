import {FC} from 'react'

type Props = {
	className?: string
	title?: string
	errMessage?: string
	options?: any
};
export const Input: FC<Props> = ({className, title, errMessage, options}) => {
	return (
		<div className={`${className} flex flex-col gap-1`}>
			<h2 className='text-gray-400 text-left'>{title}</h2>
			<input type='text' className='border-none p-2 rounded-lg w-80 bg-gray-100' {...options}/>
			<b className='text-red-500 font-thin text-xs text-left'>{errMessage}</b>
		</div>
	)
}