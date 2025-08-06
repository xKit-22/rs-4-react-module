import {IData} from "../../types/interfaces.ts";
import {useParams} from "react-router-dom";
import css from './details.module.scss'
import {ErrorBoundary} from "../../helpers/ErrorBoundary.tsx";

export default function Details({data}: { data: IData[] }) {

    const {id} = useParams<{ id: string }>()
    return (
        <ErrorBoundary>
            <div className={css.container}>
                <div>
                    {Object.entries(data.find((el => el.id === Number(id))) ?? {}).map(([key, value]) => {
                        if (key === "image") {
                            return <img key={key} src={String(value)} alt={'img'}/>;
                        } else if (key === "created") {
                            return <p key={key}>{`${key}: ${new Date(String(value)).toLocaleString()}`}</p>;
                        } else {
                            return <p key={key}>{`${key}: ${value}`}</p>;
                        }
                    })}
                </div>
            </div>
        </ErrorBoundary>
    )
}