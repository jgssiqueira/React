import '../../estilos/estilos.css'
import Whatsapp from '../../imagens/Whatsapp.jpg'
import Email from '../../imagens/email.jpg'

export default function Contatos() {
    return (
        <div>
            <header>
                 <h2 className="display-4">Contatos</h2>
             </header>
             <hr />
            <div className="container_contatos row">
             <div className="zap col text-center">
                 <img src={Whatsapp} alt="Whatsapp-Icone" />
                 <p>(21) 98356-9032</p>
             </div>
             <div className="email col text-center">
                 <img src={Email} alt="Email-Icone" />
                 <p>contato@basketkings.com</p>
             </div>
         </div>
        </div>
    )
}