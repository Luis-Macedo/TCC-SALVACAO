import React from 'react';
import '../../styles/login.css'
import Topo from '../topo/topo';
import Footer from '../footer/footer'

function Login() {

    return (
        <html>
            <Topo />
            <div className="loginContainer">
                <div>
                    <h1>Aqui fica o Login</h1>
                </div>
            </div>
            <Footer />
        </html>

    )
}

export default Login;