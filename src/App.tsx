import './App.css'
import Navbar from './component/layout/navbar/navbar'
import { GlobalStyles } from './GlobalStyles.style'
import Home from './page/Home'

function App() {

  return (
    <div>
      <GlobalStyles />
      <Navbar />
     <Home />
    </div>
  )
}

export default App
