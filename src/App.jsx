import './App.css'
import { HashRouter,Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import ProductsDetail from './pages/ProductsDetail'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import Purchases from './pages/Purchases'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const isLoading = useSelector( state => state.isLoading)

  return (
    <HashRouter>
      < NavBar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/detail/:id" element={< ProductsDetail />} />
        <Route path="/login" element={< Login />} />

        <Route element={<ProtectedRoutes/>}>
          <Route path="/purchases" element={< Purchases />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App