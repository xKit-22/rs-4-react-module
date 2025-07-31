import {useAuth} from "../../context/AuthProvider.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import './login.css'
import {FormEvent} from "react";

export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()

    const from = location.state?.form || '/'

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const userName = formData.get('username')?.toString() ?? ''

        auth?.signIn(userName, () => {
            if (!userName.trim()) {
                alert('Поле не заполнено');
                return;
            }

            navigate(from, {
                replace: true
            })
        })
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className="login-form">
                <input type="text" name="username" placeholder="username"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}