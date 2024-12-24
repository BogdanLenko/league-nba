import { FC } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { Layout } from './components/Layout.tsx'
import { RegistrationPage } from './pages'

export const App: FC = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<div className='font-xl'>Home</div>} />
				</Route>
				<Route path='registration' element={<RegistrationPage />} />
			</Routes>
		</>
	)
}
