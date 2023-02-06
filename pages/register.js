import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import style from "../styles/Home.module.css"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import options from '../setting.json'
import FlashReport from '../components/FlashReport'




// const initialstate = {lugar:'',
//                       area:'',
//                       descripcionlugar:'',
//                       unidadminera:'',
//                       fecha:'',
//                       hora:'',
//                       tipoaccidente:'',
//                       empresa:'',
//                       gerencia:'',
//                       lesiones:'',
//                       danhos:'',
//                       consrealpersonal:'',
//                       consrealpatrimonial:'',
//                       conspotencialpersonal:'',
//                       conspotencialpatrimonial:'',
//                       descripcion:'',
//                       imagebefore:'',
//                       imageafter:'',
//                       acciones:'',
//                       elaboradopor:''
//                       }



// function Createitem(){

//     const [report, setreport] = useState(initialstate)

//     const controlcambios = (e) =>{
//         if(e.target.value !== ""){
//             const inputvalue=e.target.value
//             const inputname=e.target.name
    
//             setreport({
//                 ...report,
//                 [inputname]: inputvalue
//             })
//         }
        
//     }


//     const controlfecha = (date) =>{
//         const inputvalue=date
//         console.log(inputvalue);
//         const inputname='fecha'

//         setreport({
//             ...report,
//             [inputname]: inputvalue
//         })
//     }

//     console.log(report);

//     const enviodeformulario = async (e)=>{

//         if(report.map)



//         e.preventDefault()

//         console.log('iniciando');
//         const myFileOne = document.getElementById('filebefore').files[0]
//         const myFileTwo = document.getElementById('fileafter').files[0]
//         const newreport = new FormData()
//         newreport.append('reporte',JSON.stringify(report))
//         newreport.append('imagebefore',myFileOne)
//         newreport.append('imageafter',myFileTwo)

//         try{
//             console.log('haciendo fetch');
//             const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/flashreport`,{
//                 method: 'POST',
//                 body: newreport
//             })
//             const data = await res.json()
//             console.log(data)
//             setreport(initialstate)
//             console.log("Registro realizado")
//         }catch(error){
//             console.log('error');
//             console.log({error})
//         }
//         console.log('finalizando');
//     }


//     return(
//         <>
//         <Layout titlepage="registro">
//         <div className={style.Formstyle}>
//             <h1>Ingreso de Flash report</h1>
//                 <form>
//                     <div className={style.fourcomponent}>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Lugar</label>
//                             <select type='text' name='lugar' value={report.lugar} onChange={controlcambios}>
//                                 {
//                                     options.lugar.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                             <label className={style.labelreport}>Descripción adicional</label>
//                             <input type='text' name='descripcionlugar' value={report.descripcionlugar} onChange={controlcambios}></input>
//                         </div>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Área</label>
//                             <select type='text' name='area' value={report.area} onChange={controlcambios}>
//                                 {
//                                     options.area.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                             <label className={style.labelreport}>Unidad Minera</label>
//                             <select type='text' name='unidadminera' value={report.unidadminera} onChange={controlcambios}>
//                             {
//                                     options.unidadminera.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                         </div>

//                     </div>


//                     <div className={style.fourcomponent}>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Fecha</label>
//                             <DatePicker
//                                 calendarclassName="custom-calendar"
//                                 name='fecha'
//                                 selected= {report.fecha}
//                                 onChange={controlfecha}
//                                 withPortal
//                                 dateFormat="dd/MMM/yyyy"
//                                 fixedHeight
//                                 showMonthDropdown
//                                 showYearDropdown
//                                 dropdownMode="select">
//                             </DatePicker>
                            

                            
//                             <label className={style.labelreport}>Hora</label>
//                             <input type='text' name='hora' value={report.hora} onChange={controlcambios}></input>

                                                   
//                         </div>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Tipo de accidente</label>
//                             <select type='text' name='tipoaccidente' value={report.tipoaccidente} onChange={controlcambios}>
//                             {
//                                     options.tipoaccidente.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                         </div>
//                     </div>

//                     <div className={style.fourcomponent}>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Empresa involucrada</label>
//                             <select type='text' name='empresa' value={report.empresa} onChange={controlcambios}>
//                             {
//                                     options.Empresainvolucrada.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                         </div>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Gerencia responsable</label>
//                             <select type='text' name='gerencia' value={report.gerencia} onChange={controlcambios}>
//                             {
//                                     options.gerencia.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                         </div>
//                     </div>

//                    <div className={style.fourcomponent}>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Lesiones</label>
//                             <input type='text' name='lesiones' value={report.lesiones} onChange={controlcambios}></input>
//                         </div>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Daños</label>
//                             <input type='text' name='danhos' value={report.danhos} onChange={controlcambios}></input>
//                         </div>
//                    </div>


//                     <div className={style.fourcomponent}>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Consecuencia real personal</label>
//                             <select type='text' name='consrealpersonal' value={report.consrealpersonal} onChange={controlcambios}>
//                             {
//                                     options.consecuenciareal.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                             <label className={style.labelreport}>Consecuencia real patrimonial</label>
//                             <select type='text' name='consrealpatrimonial' value={report.consrealpatrimonial} onChange={controlcambios}>
//                             {
//                                     options.consecuenciareal.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                         </div>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Consecuencia potencial personal</label>
//                             <select type='text' name='conspotencialpersonal' value={report.conspotencialpersonal} onChange={controlcambios}>
//                             {
//                                     options.consecuenciapotencial.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                             <label className={style.labelreport}>Consecuencia potencial patrimonial</label>
//                             <select type='text' name='conspotencialpatrimonial' value={report.conspotencialpatrimonial} onChange={controlcambios}>
//                             {
//                                     options.consecuenciapotencial.map(option =>(
//                                         <option key={option.value} value={option.value}>{option.value}</option>
//                                     ))
//                                 }
//                             </select>
//                         </div>
//                     </div>

//                     <div className={style.onecomponent}>
//                         <label className={style.labelreport}>Descripción ¿Qué ocurrio?</label>
//                         <input className={style.onelabel} type='text' name='descripcion' value={report.descripcion} onChange={controlcambios}></input>
//                     </div>

//                     <div>
//                         <label className={style.labelreport}>Fotografias o diagramas</label>
//                         <div className={style.fourcomponent}>
//                             <div  className={style.twocomponent}>
//                                 <label className={style.labelreport}>Durante el evento</label>
//                                 <input type='file' name='imagebefore' id='filebefore' value={report.imagebefore} onChange={controlcambios}></input>
//                             </div>
//                             <div className={style.twocomponent}>
//                                 <label className={style.labelreport}>Despues del evento</label>
//                                 <input type='file' name='imageafter' id='fileafter' value={report.imageafter} onChange={controlcambios}></input>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={style.onecomponent}>
//                         <label className={style.labelreport}>Acciones inmediatas a tomar</label>
//                         <input type='text' name='acciones' value={report.acciones} onChange={controlcambios}></input>
//                     </div>

//                     <div className={style.fourcomponent}>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Flash report elaborado por</label>
//                             <input type='text' name='elaboradopor' value={report.elaboradopor} onChange={controlcambios}></input>
//                         </div>
//                         <div className={style.twocomponent}>
//                             <label className={style.labelreport}>Datos del supervisor 1</label>
//                             <label className={style.labelreport}>Datos del supervisor 2</label>
//                         </div>
//                     </div>

//                     <button onClick={enviodeformulario}>Enviar flash report</button>
//                 </form>
//         </div>
//         </Layout>
//         </>
//     )
// }

// export default Createitem

function Register(){
    return(

    
    <FlashReport></FlashReport>
    )
    
    }
    
    export default Register