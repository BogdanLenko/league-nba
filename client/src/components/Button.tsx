import {FC, PropsWithChildren} from 'react'

interface Props extends PropsWithChildren{
	className?: string
}
export const Button: FC<Props> = ({className, children}) => {
	return (
			<button className={`${className} font-roboto bg-red-600 text-white p-2 rounded-lg w-80 hover:bg-red-400`}>{children}</button>
	)
}