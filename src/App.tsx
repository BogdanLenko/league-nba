import './App.css'
import {FC} from 'react'
import {RegistrationPage} from './pages'
import {Route, Routes} from 'react-router'
import {Layout} from './components/Layout.tsx'

export const App: FC = () =>  {

  return (
    <>
      <Routes>
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/" element={
          <Layout>
            <Route path={'/'}/>
          </Layout>
        }/>
      </Routes>
    </>
  )
}
