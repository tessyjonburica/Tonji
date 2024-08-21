import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import History from './components/History'
import TokenDetails from './components/TokenDetails'
import TreatComponent from './components/Treat'
import { Analytics } from "@vercel/analytics/react"

function App() {
 
  return (
    <>
    <Header />
    <Hero />
    <History/>
    <TokenDetails/>
    <TreatComponent/>
    <Footer/>
    <Analytics/>
    </>
  )
}

export default App
