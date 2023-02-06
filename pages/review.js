import { useEffect,useState } from "react"
import Layout from "../components/layout"
import style from '../styles/Home.module.css'
import { useRouter } from 'next/router';

function review(){

    const [productlist, setproducts] = useState([])
    
    const actualizarlistadegaleria = ()=>{
        console.log("Renderizando")
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/flashreport`)
        .then((res) =>res.json())
        .then(({data})=>{
              setproducts(data)
          })
      }

      useEffect(() => {
        actualizarlistadegaleria()
      }, [])


     
        const router = useRouter()
      
        const handleClick = () => {
          router.push('/detailregister')
        }
       

    return(
        <>
            <Layout>
            </Layout>
            
            <div>
                <h1>Revisión de reportes</h1>
            </div>

            <div className={style.gallerymain}>
            {productlist.map(({descripcionlugar, hora, lesiones, unidadminera, danhos, descripcion, _id}) =>(
                
                <div className={style.itemcontent}  key={_id}>
                    <span>Lugar del evento: {descripcionlugar}</span>

                    {/* <div>   
                    <img src={`data: image/png; base64,${btoa(String.fromCharCode(...new Uint8Array(image?.data?.data)))}`} width="150" height="150"/>
                    </div> */}

                    <div className={style.itemdetail}>
                        <span>Hora: {hora}</span>
                    </div>

                    <div className={style.itemdetail}>
                        <span>Lesiones: {lesiones}</span>
                    </div>

                    <div className={style.itemdetail}>
                        <span>Unidad Minera: {unidadminera}</span>
                    </div>

                    <button onClick={handleClick}>investigar</button>
                </div>
                ))
                }
            </div>

            




        </>
    )
    }
    
    export default review