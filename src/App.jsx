import Header from './Components/Header.jsx'
import Section4 from './Components/Section2.jsx'
import Pratos from './Components/Pratos.jsx'
import Footer from './Components/Footer.jsx'
import Section1 from './Components/Section1.jsx'
import Formulario from './Components/Formulario.jsx'
import ComboRoute from './combos/ComboRoute.jsx'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Section1 />
          <Section4 />
          <Pratos />
          <Formulario />
        </>} />

        <Route path="/combos" element={<ComboRoute />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
