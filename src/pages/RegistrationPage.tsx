import {FC} from 'react'
import {RegistrationForm} from '../components/RegistrationForm.tsx'
import {useRegistrationPage} from '../store/useRegistrationPage.ts'

interface Props {
	className?: string
}

export const RegistrationPage: FC<Props> = ({className}) => {
	const {isMember} = useRegistrationPage()
	return (
		<div className={`${className} grid grid-cols-3 grid-rows-1`}>
			<div className="flex flex-col justify-center items-center">
				<RegistrationForm/>
			</div>
			<div className="col-span-2 bg-blue-50 h-screen flex justify-center items-center">
				<img src={isMember ? '/sign-in.svg' : '/sign-up.svg'} alt="sign-in"/>
			</div>
		</div>
	)
}