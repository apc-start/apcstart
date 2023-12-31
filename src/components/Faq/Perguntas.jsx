import "../Faq/Perguntas.css"
import Imagem from "../../assets/images/Faq-img/interrogacao1.png"
import Interrogacao2 from "/src/assets/images/Faq-img/interrogacao2.png"

import Menina from "../../assets/images/Faq-img/menina-interrogação.png"
import Logo from "../../assets/images/Faq-img/logointerrogacao.png"

import Ilustracao from "../../assets/images/Faq-img/FAQ.png"

function Perguntas (){
    return(
        <>
            <section id="Sessao-perguntas-frequentes">
                
                <div className="Titulo">

                    <img className="Interrogacao" src={Imagem} alt="" />

                    <h1>Perguntas Frequentes</h1>

                    <img className="Interrogacao2" src={Interrogacao2} alt="" />

                </div>

                <div className="Lado-direito">

                    <img className="Menina-duvida" src={Menina} alt="" />

                    <img className="Logo" src={Logo} alt="" />

                    <img className="Ilustracao" src={Ilustracao} alt="" />

                </div>


            </section>
        </>
    )
}
export default Perguntas 