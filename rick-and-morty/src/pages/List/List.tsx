import {Link} from "react-router-dom";
import css from './list.module.scss'
import {IData} from "../../types/interfaces.ts";

export default function List({data}: {data: IData[]}) {
    return (
        <ul>
            {data.map((el: IData) => (
                <li className={css.li} key={el.id}><Link to={`${el.id}`}>{el.name}</Link></li>
            ))}
        </ul>
    )
}