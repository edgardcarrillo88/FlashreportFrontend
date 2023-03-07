import Layout from "../components/layout"
import React, { useState } from "react"
import styles from "../styles/Home.module.css"
import {useNavigate} from "react-router-dom"
import Link from "next/link";
import Image from 'next/image'
import LogoMinsur from './Image/Minsur.png'

const initialstateusers = {correo:"",usuario:"", contrasena:"", nombre:""}


function register(){

const [datosusuario,setDatosusuario] = useState(initialstateusers)

const controldecambiosusuarios = (e) =>{
    const targetuser = e.target
    const inputvalueuser =targetuser.value
    const inputnameuser =targetuser.name

    console.log(`${inputnameuser} ${inputvalueuser}`)

    setDatosusuario({...datosusuario,[targetuser.name]:targetuser.value})

}

console.log(datosusuario)

const enviodeformulariouser = async (e) =>{
    e.preventDefault()
    if(datosusuario.correo !=="" && datosusuario.DNI !=="" && datosusuario.contrasena !==""){

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/register`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(datosusuario)
            })

            const data = await res.json()
            // alert(data.message)

            console.log({data})

            // if (!data.guia==1){
            //     console.log("usuario no encontrado")
            //     setDatosusuario(initialstateusers)
            // }if(!data.guia==2){
            //     console.log("inicio de sesion exitoso")
            //     setDatosusuario(initialstateusers)
            // }else{
            //     console.log("contraseña incorrecta")
            //     setDatosusuario(initialstateusers)
            // }

        } catch (error) {
            console.log(error)
        }

    }
}




return(
    <>
        <Layout titlepage="register">
        <main className={styles.MainLogin}>
            <div className={styles.FormLogin}>
                <div>
                    <h3>Registrate</h3>
                    <Image src={LogoMinsur} width={100} height={100}/>
                </div>
                <div>
                    <form className={styles.FormLoginComponents}>
                        <input name="nombre" value={datosusuario.nombre} onChange={controldecambiosusuarios} type="text" placeholder="nombre"></input>
                        <input name="correo" value={datosusuario.correo} onChange={controldecambiosusuarios} type="text" placeholder="correo"></input>
                        <input name="empresa" value={datosusuario.empresa} onChange={controldecambiosusuarios} type="text" placeholder="empresa"></input>
                        <input name="DNI" value={datosusuario.DNI} onChange={controldecambiosusuarios} type="text" placeholder="DNI"></input>
                        <input name="contrasena" value={datosusuario.contrasena} onChange={controldecambiosusuarios} type="password" placeholder="Contraseña"></input>
                        <button onClick={enviodeformulariouser}>Enviar</button>
                        <p>Ya tienes cuenta? <Link href="login">Inicia sesión</Link></p>
                    </form>
                </div>
            </div>
        </main>
        </Layout>
        
    </>
)
}


//esta mierda no entiendo que hace
export default register