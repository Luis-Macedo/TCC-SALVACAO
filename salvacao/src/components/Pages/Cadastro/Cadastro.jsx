import React from 'react';
import './style/Cadastro.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { history } from '../../App/history';
import api from '../../../services/api';

const Cadastro = () => {

    const validations = Yup.object().shape({
        nome: Yup.string().required(),
        email: Yup.string().email().required(),
        senha: Yup.string().min(4).required(),
        endereco: Yup.string(),
        cidade: Yup.string(),
        estado: Yup.string().max(2),
        telefone: Yup.string()
    })

    const handleFormSubmit = values =>{

        api.post("/user/create", values).then(res => {
            const { data } = res
            console.log(data)
            if(data){
                alert("Cadastro Efetuado com sucesso")
                history.push('/login')
                window.location.reload()
            }
        })
        .catch(err => alert(`Cadastro não pôde ser efetuado: Email já cadastrado ${err}`));
    }

    return(
        <div className="containerCad">
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={{}}
                validationSchema={validations}
            >
                <Form className='teste'>
                    <div className="inputs2">
                        <div className="name2">
                            <label htmlFor="nome">Nome completo:</label>
                            <Field
                                className="input2"
                                placeholder="Digite seu nome"
                                name="nome"
                                required
                            />
                        </div>
                        
                        <div className="email2">
                            <label htmlFor="email">Seu email:</label>
                            <Field
                                className="input2"
                                placeholder="Digite seu email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="passwd2">
                            <label htmlFor="senha">Digite sua senha:</label>
                            <Field
                                className="input2"
                                placeholder="Digite sua senha"
                                name="senha"
                                type="password"
                                required
                            />
                        </div>

                        <div className="endereco">
                            <label htmlFor="endereco">Seu endereço:</label>
                            <Field
                                className="input2"
                                placeholder="Digite seu endereço"
                                name="endereco"
                                required
                            />
                        </div>

                        <div className="cidade">
                            <label htmlFor="cidade">Digite a sua cidade:</label>
                            <Field
                                className="input2"
                                placeholder="Digite sua cidade"
                                name="cidade"
                                required
                            />
                        </div>

                        <div className="estado">
                            <label htmlFor="estado">Escolha seu Estado:</label>

                            <Field as="select" className="input2" name="estado">

                                <option value="AM">AM</option>

                                <option value="SP">SP</option>

                                <option value="RJ">RJ</option>

                            </Field>

                        </div>

                        <div className="telefone">
                            <label htmlFor="telefone">Digite seu telefone:</label>
                            <Field
                                className="input2"
                                placeholder="Digite seu telefone"
                                name="telefone"
                                required
                            />
                        </div>
                    </div>

                    <div className="botao2">
                        <div className="linkcad2">
                            <button type="submit" className="cadastro-login2"> Cadastrar </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Cadastro;