import Link from "next/link";
import style from "../styles/Home.module.css"

export default function Menu() {
    return(
        <nav className={style.navbar}>
            <div className={style.navbaroption}>
                <Link className={style.linkoption} href="register">Registro de reporte</Link>
                <Link className={style.linkoption} href="review">Revision de reporte</Link>
                <Link className={style.linkoption} href="dashboard">Dashboard</Link>
            </div>
            <div className={style.loginoption}>
                <Link className={style.linkoption} href="login">Login</Link>
            </div>    
        </nav>
    )
}
