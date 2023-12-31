import "../Trilha-Components/Nivel1.css"

import Agenda from "../../assets/images/Trilha-img/Agenda.png"
import bolavermelha from "../../assets/images/Trilha-img/bola-vermelha.png"
import bolaverde from "../../assets/images/Trilha-img/bola-verde.png"
import bolaazul from "../../assets/images/Trilha-img/bola-azul.png"
import bolaroxa from "../../assets/images/Trilha-img/bola-roxa.png"
import bolaamarela from "../../assets/images/Trilha-img/bola-amarela.png"
import cervoheroi from  "../../assets/images/Trilha-img/cervo-superheroi.png"

function Nivel1(){
    return(
        <>
        <section id="Nivel1sec">
            <div className="Guia1">
                <div className="Guia1Info">
                    <div className="Guia1Textos">
                        <h2>N<span className="Roxo">I</span><span className="Amarelot">V</span><span className="Verde">E</span><span className="Vermelho">L</span> <span className="Laranja">1</span></h2>
                        <p>APRENDENDO O ALFABETO</p>
                    </div>
                    
                    <div className="GuiaLink">
                        <img src={Agenda} alt="Imagem de uma agenda" />
                        <a href="">GUIA</a>
                    </div>
                </div>
            </div>

            <div className="Trilha1">
                <div className="trilha1img">
                    <img src={cervoheroi} alt="Imagem de um desenho de um cervo" />
                </div>

                <div className="bolastrilha1">
                    <a href="/VideoAula"><img src={bolaazul} alt="bola azul"  id="bolaazul1"/></a>
                    <a href=""><img src={bolaroxa} alt="bola roxa" id="bolaroxa1"/></a>
                    <a href=""><img src={bolaamarela} alt="bola amarela" id="bolaamarela1"/></a>
                    <a href=""><img src={bolaverde} alt="bola verde" id="bolaverde1"/></a>
                    <a href=""><img src={bolavermelha} alt="bola vermelha" id="bolavermelha1"/></a>
                </div>

            </div>
            
        </section>
        </>
    )
}

export default Nivel1