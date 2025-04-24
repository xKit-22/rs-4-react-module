import {ChangeEvent, FormEvent, useState} from "react";
import {Input} from "../Input/Input.tsx";
import {ISignup} from './interface.ts'


export default function Signup({onSubmit}: (event: FormEvent<HTMLFormElement>, inputs: ISignup) => void) {
    const [inputs, setInputs] = useState<ISignup>({
        email: "",
        password: "",
        name: "",
        nickname: "",
        repeatPassword: "",
        sex: ""
    })
    const handleFormChange = (event: ChangeEvent<HTMLFormElement>) => {
        setInputs(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <form
            onChange={handleFormChange}
            onSubmit={() => onSubmit(event, inputs)}
        >
            <Input
                type="text"
                name="name"
                value={inputs.name}
                placeholder={'Имя'}
            />
            <br/>
            <Input
                type="text"
                name="nickname"
                value={inputs.nickname}
                placeholder={'Никнейм'}
            />
            <br/>
            <Input
                type="radio"
                name="sex"
                value={inputs.sex}
            />
            <br/>
            <Input
                type="email"
                name="email"
                value={inputs.email}
                placeholder={'Email'}
            />
            <br/>
            <Input
                type="password"
                name="password"
                value={inputs.password}
                placeholder={'Пароль'}
            />
            <br/>
            <Input
                type="password"
                name="repeatPassword"
                value={inputs.repeatPassword}
                placeholder={'Повторите пароль'}
            />
            <br/>
            <br/>
            <button type="submit">Войти</button>
        </form>
    )
}