import React from 'react'
import {Link} from 'react-router-dom'
import './estilo.css'

const Painel =() =>{

      return(

          

       <div>

           <h1>Painel de Administração</h1>

           <div className="cadastro">
           <i class="far fa-user  fa-customize" ></i>
           <Link to="/cadastro" className="link">
           <h3>Cadastro</h3>
           </Link>
           
             
           </div>
           <div className="cadastro2">
           <i class="fas fa-camera-retro fa-customize"></i>
           <h3>Detecção</h3>
             
           </div>
           <div className="cadastro3">
           <i class="fas fa-temperature-high fa-customize"></i>
           <h3>Temperatura</h3>
           </div>

           
           
       </div>

      );
    
    
}


export default Painel;

