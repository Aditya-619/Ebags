import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import Footer from './Components/Footer'
import Header from './Components/Header'
import store from './utils/store'
import './App.css'

function App() {

  return (
    <Provider store={store} >
      <Header />
      <Outlet />
      <Footer/>
    </Provider>
  )
}

export default App
