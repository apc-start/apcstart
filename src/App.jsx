import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/Home'
import SobreNos from "./pages/SobreNos/SobreNos"
import Area from "./pages/AreaPsicopedagogia/Area"
import Trilha from "./pages/TrilhaConhecimento/Trilha"
import AreaDeEnsino from "./pages/VideoAula/VideoAula"
import VideoAula from "./components/AreaEnsino-Components/VideoAulaComponent"
import Atividade from "./components/AreaEnsino-Components/Atividade"
import './App.css'

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/SobreNos" element={ <SobreNos/> } />
          <Route path="/Area" element={ <Area/> } />
          <Route path="/Trilha" element={ <Trilha/> } />
          <Route path="/AreaDeEnsino" element={ <AreaDeEnsino/> } />
          <Route path="/VideoAula" element={ <VideoAula/> } />
          <Route path="/Atividade" element={ <Atividade/> } />
        </Routes>
      </Router>
     
     
    </>
  )
}