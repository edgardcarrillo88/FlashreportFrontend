import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import styles from "../styles/Home.module.css"
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image'
import LogoMinsur from './Image/Minsur.png'



const initialstateusers = {DNI:"", contrasena:""}



function login(){

    const [datosusuario,setdatosusuario] = useState(initialstateusers)

    const controldecambiosusuarios = (e) =>{
        const targetuser = e.target
        setdatosusuario({...datosusuario,[targetuser.name]:targetuser.value})
        
    }

    const router = useRouter()

    const iniciosesion = async (e) =>{
        e.preventDefault()
        


        if(datosusuario.DNI !=="" && datosusuario.contrasena !==""){
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`,{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(datosusuario)
                })

                const data = await res.json()
    
                if (data.guia==1){
                    console.log("usuario no encontrado")
                    setdatosusuario(initialstateusers)
                }if(data.guia==2){
                    console.log("inicio de sesión exitoso")
                    setdatosusuario(initialstateusers)

                router.push('/register')
                    
                }else{
                    console.log("contraseña incorrecta")
                    setdatosusuario(initialstateusers)
                }
               
            } catch (error) {
                console.log(error)
            }
        }
    }


//    const navigate = useNavigate();

    return(
        <>
            <Layout titlepage="Login">
            </Layout>
            <main className={styles.MainLogin}>
                <div className={styles.FormLogin}>
                    <div>
                        <h3>Inicia sesión</h3>
                        <Image src={LogoMinsur} width={100} height={100} alt="Logo"/>
                    </div>
                    <div>
                        <form className={styles.FormLoginComponents}>
                            <input name="DNI" value={datosusuario.DNI} onChange={controldecambiosusuarios} type="text" placeholder="DNI"></input>
                            <input name="contrasena" value={datosusuario.contrasena} onChange={controldecambiosusuarios} type="password" placeholder="Contraseña"></input>
                            <button onClick={iniciosesion}>Enviar</button>
                            <p>Aún no tienes una cuenta <Link href="signup">Create una cuenta!</Link></p>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
    }
    
    export default login

