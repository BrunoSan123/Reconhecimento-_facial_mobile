import React,{useState} from 'react'
import './estilo.css'
import axios from 'axios'

function Cadastro(){
   

    const[select,setSelect]  =useState(null);

   let fileSelect =event =>{
       
        setSelect(event.target.files[0]);
    }

    let fileUpload = fileUp =>{
        const fd = new FormData();

        fd.append('image',select,select.name)
        console.log(fd)
        

        
        //axios.post()



    }
    return(

        <form  className="form">
            <input type="file" className="up" onChange={fileSelect}/>
            <button onClick={fileUpload}>Upload</button>
            <section>
                <input type="text" className="inp1" placeholder="Digite seu nome"/>
                <br/>
                <input type="text"className="inp1" placeholder="Digite seu email"/>
                <br/>
                <input type="number" className="inp1" placeholder="Digite seu cpf"/>
                <br/>
                <input type="number" className="inp1" placeholder="Digite seu RG"/>
                <br/>
                <label><p>Escolha seu perfil</p></label><br/>
                <select name="Perfil" id="perf" className="inp1" id="select">
                    <option value="User" className="inp1">Usuario Simples</option>
                    <option value="Admin" className="inp1">Usuario admin</option>
                </select><br/>
                <label><p>Escolha sua profissão</p></label>
                <br/>
                <select name="Escolha sua area" id="select" className="inp1" placeholder="escolha sua profissão">
                    <option value="Profissão" className="inp1">Cozinheiro</option>
                     <option value="progrramador" className="inp1">programador</option>
                     <option value="assistente" className="inp1">Assistente</option>
                     <option value="Administração" className="inp1">Administração</option>
                </select>

            </section>

            <input type="submit" value="cadastrar" className="btn"/>
        </form>

    );
}

export default Cadastro