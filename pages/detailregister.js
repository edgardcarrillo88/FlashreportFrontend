import { useState } from "react"
import Layout from "../components/layout"

function DetailRegister(){


    const [listreport, Setlistreport] = useState([])           

    const renderreport = () =>{
        console.log('renderizando');
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/flashreport${_id}`)
        .then((res)=>res.json())
        .then(({data})=>{
            Setlistreport(data)
        })

    useEffect(() => {
        renderreport()
        }, [])


    }


    return(
        <>
            <Layout>
            </Layout>
            
            <div>
                <h1>{listreport.unidadminera}</h1>
            </div>
        </>
    )
    }
    
    export default DetailRegister