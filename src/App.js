import './App.scss'
import { NavBar } from './components/nav-bar/nav-bar'
import { Header } from './components/header/header'
import { AboutUs } from './components/about-us/about-us'
import { Footer } from './components/footer/footer'
import { PastClients } from './components/clients/clients'
import { ContactForm } from './components/get-in-touch/contact-form'

function App() {
  return (
    <div className="razr-consulting">
      <NavBar />
      <Header />
      <AboutUs />
      <PastClients />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
