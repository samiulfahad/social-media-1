import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './place/pages/NewPlace'
import Page404 from './shared/components/page404'
import Home from './shared/Home'
import Places from './user/pages/Places'
import Header from './shared/components/Header'

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/place/new' element={<NewPlace />} />
        <Route path='/user/:userId/places' element={<Places />} />
        <Route path='*' element={<Page404 />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
