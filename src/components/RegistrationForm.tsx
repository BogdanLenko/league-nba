import {FC, useMemo} from 'react'
import {Input} from './Input.tsx'
import {useRegistrationPage} from '../store/useRegistrationPage.ts'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Button} from './Button.tsx'

interface Props {
	className?: string
}
interface IForm {
	email: string
	password: string
	name: string
	confirmPassword: string
}

export const RegistrationForm: FC<Props> = () => {
	
	const {isMember, setIsMember} = useRegistrationPage()
	const {register, handleSubmit, watch, formState: {errors}} = useForm<IForm>({
		mode: 'onChange'
	})
	const emailOptions = useMemo(() => register('email', {
		required: 'this field is required.',
		pattern: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
			message: 'enter a valid email address'
		}
	}), [])
	const passOptions = useMemo(() => register('password', {
		required: 'this field is required.',
		minLength: {
			value: 8,
			message: 'password must be at least 8 characters long'
		},
		pattern: {
			value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			message: 'password should contain at least 1 letter and 1 number'
		}
	}), [])
	const nameOptions = useMemo(() => register('name', {
		required: 'this field is required.',
		pattern: {
			value: /^[a-zA-Z]+$/,
			message: 'name should contain only letters'
		}
	}), [])
	const confirmPasswordOptions = useMemo(() => register('confirmPassword', {
		required: 'this field is required.',
		validate: value => value === watch('password') || 'passwords do not match'
	}), [])
	const onSubmit: SubmitHandler<IForm> = data => console.log(data)
	const signUpForm = (
		<>
			<Input title={'name'} errMessage={errors.name?.message} options={nameOptions}/>
			<Input title={'email'} errMessage={errors.email?.message} options={emailOptions}/>
			<Input title={'password'} errMessage={errors.password?.message} options={passOptions}/>
			<Input title={'confirm password'} errMessage={errors.confirmPassword?.message} options={confirmPasswordOptions}/>
		</>
	)
	const signInForm = (
		<>
			<Input title={'email'} errMessage={errors.email?.message} options={emailOptions}/>
			<Input title={'password'} errMessage={errors.password?.message} options={passOptions}/>
		</>
	)
	return (
		<form className='flex justify-start flex-col' onSubmit={handleSubmit(onSubmit)}>
			<h1 className="text-4xl text-black mb-7 text-left mt-0 font-nunito">{isMember ? 'Sign In' : 'Sign Up'}</h1>
			<div className="flex-col flex gap-6 mb-4">
				{isMember ? signInForm : signUpForm}
			</div>
			<Button className={'mb-4'}>{isMember ? 'sign in' : 'sign up'}</Button>
			<button onClick={event => {
				event.preventDefault()
				setIsMember(!isMember)
			}} className='text-lg text-red-500'>
				{isMember ? 'sign up' : 'sign in'}
			</button>
		</form>
	)
}