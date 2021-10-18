import React from "react";
import "./Cadastro.css";
import imagem from "./logo512.png";
export default function Cadastro() {
    function mensagem() {
        var campo=document.getElementsByTagName("input");
        var tudo=campo[0].value!=""&&campo[1].value!=""&&campo[2].value!=""&&campo[3].value!=""?
        alert("Você será direcionado para nossa página principal"):
        alert("Usuário e/ou Senha estão inválidos");
    }
    return (
        <div>
            <div className="conteudo">
                <div>
                    <form action="" name="formulario">
                        <h1 className="txtCadastro">Cadastro</h1>
                        <p className="txtCadastro">Preencha todos os campos para começar</p>

                        <input type="text" name="nome" placeholder="Nome"></input>
                        <input type="text" name="sobrenome" placeholder="Sobrenome"></input>
                        <input type="email" name="email" placeholder="E-mail"></input>
                        <input type="password" name="senha" placeholder="Password"></input>
                        <button className="botao" onClick={() =>mensagem()}>Concluir cadastro</button>
                    </form>
                </div>
                <div className="img">
                    <img src={imagem}></img>
                    <h1>APP REACT</h1>
                </div>
            </div>

        </div>
    );
}