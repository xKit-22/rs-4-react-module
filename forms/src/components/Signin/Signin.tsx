import {Input} from "../Input/Input.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {ISignin} from './interface.ts'


export default function Signin({onSubmit}: (event: FormEvent<HTMLFormElement>, inputs: ISignin) => void) {
    const [inputs, setInputs] = useState<ISignin>({
        email: '',
        password: ''
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
                type="email"
                name="email"
                value={inputs.email}
                placeholder={'Email'}
                label={'Email'}
                description={'Email'}
                error={'error'}
                disabled
            />
            <br/>
            <Input
                type="password"
                name="password"
                value={inputs.password}
                placeholder={'Пароль'}
                label={'Пароль'}
                description={'Пароль'}
                withAsterisk
            />
            <br/>
            <br/>
            <button type="submit">Войти</button>
        </form>
    )
}