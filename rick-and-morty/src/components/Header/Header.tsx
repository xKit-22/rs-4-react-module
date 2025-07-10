import {Link, useNavigate} from "react-router-dom";
import css from './header.module.scss'
import {useAuth} from "../../context/AuthProvider.tsx";


export default function Header() {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleSignOut = () => {
        auth?.signOut(() => {
            navigate('/login')
        })
    }

    return (
        <div className={css.links}>
            <div><Link to={"/characters"}>Персонажи</Link></div>
            <div><Link to={"/locations"}>Локации</Link></div>
            <div><Link to={"/episodes"}>Эпизоды</Link></div>
            <button className={css.exit_button} onClick={handleSignOut}>Выйти</button>
        </div>
    )
}