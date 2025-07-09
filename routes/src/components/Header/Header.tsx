import {Link} from "react-router-dom";
import css from './header.module.scss'


export default function Header() {
    return (
        <div className={css.links}>
            <div><Link to={"/characters"}>Персонажи</Link></div>
            <div><Link to={"/episodes"}>Локации</Link></div>
            <div><Link to={"/locations"}>Эпизоды</Link></div>
        </div>
    )
}