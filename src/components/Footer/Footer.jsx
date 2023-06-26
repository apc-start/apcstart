import facebook from "../../assets/images/footer-img/facebook.png"
import github from "../../assets/images/footer-img/github.png"
import instagram from "../../assets/images/footer-img/instagram.png"
import linkedin from "../../assets/images/footer-img/linkedin.png"

import "../Footer/Footer.css"

function Footer(){
    return(
        <>
        <footer id="Footer-principal">
            <div className="Links">
                <ul>
                    <li><h3>Transparencia</h3></li>
                    <li><a href="#">Politica de Privacidade</a></li>
                    <li><a href="#">Politica de Segurança</a></li>
                </ul>
            </div>

            <div className="Links">
                <ul>
                    <li><h3>Ouvidoria</h3></li>
                    <li><a href="#">ouvidoria@apc.com.br</a></li>
                </ul>
            </div>
            
            <div className="Links">
                <ul>
                    <li><h3>Fale com a gente</h3></li>
                    <li><a href="#">(xx)xxxxx-xxxx</a></li>
                    <li><a href="#">suporte@apc.com.br</a></li>
                </ul>
            </div>

            <div className="Redes">
                <a href="#"><img src={facebook} alt="Logo do Facebook" /></a>
                <a href="#"><img src={github} alt="Logo do GitHub" /></a>
                <a href="#"><img src={instagram} alt="Logo do Instagram" /></a>
                <a href="#"><img src={linkedin} alt="Logo do Linkedin" /></a>
                
            </div>
        </footer>
        </>
        
    )
}

export default Footer