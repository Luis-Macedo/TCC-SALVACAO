import estilo from '../styles/components/Footer.module.css';

export function Footer(){
    return(
        <div className={estilo.containerFooter}>
            <div className={estilo.navFooter}>
                <ul className={estilo.ulFooter}>
                    <li className={estilo.liFooter}>Quem somos nós?</li>
                    <li className={estilo.liFooter}>Endereço</li>
                    <li className={estilo.liFooter}>E-mail para contato</li>
                </ul>
            </div>
        </div>
    )
}