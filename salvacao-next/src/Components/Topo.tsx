import estilo from '../styles/components/Topo.module.css';

export function Topo(){

    return (
        
        <div className={estilo.containerTopo}>
            <div className={estilo.navTopo}>
                <ul className={estilo.ulTopo}>
                    
                    <li className={estilo.liTopo}> 
                        <button className={estilo.botaoLinks}>
                            Login
                        </button>
                    </li>
                    <li className={estilo.liTopo}>
                        <button className={estilo.botaoLinks}>
                            Cadastrar-se
                        </button>
                    </li>
                    <div className={estilo.imgTopo}>
                        <li className={estilo.liTopo}>
                            <button className={estilo.botaoLogo}>
                                <img className={estilo.logo} src="Images/Logo.png" alt=""/>
                            </button>
                        </li>
                    </div>
                   
                    <li className={estilo.liTopo}>
                        <button className={estilo.botaoLinks}>
                            Mapa
                        </button>
                    </li>
                    <li className={estilo.liTopo}>
                        <button className={estilo.botaoLinks}>
                            Teste
                        </button>
                    </li>
                </ul>
            </div>
        </div>  
    );
}

