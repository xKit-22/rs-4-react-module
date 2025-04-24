import './App.css'
import {FormEvent, useState} from "react";
import Signin from "./components/Signin/Signin.tsx";
import Signup from "./components/Signup/Signup.tsx";
import {ISignup} from "./components/Signup/interface.ts";
import {ISignin} from "./components/Signin/interface.ts";

function App() {
    const [componentState, setComponentState] = useState<string>("")
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>, inputs: ISignup | ISignin) => {
        event.preventDefault()
        console.log('inputs', inputs)
    }
    if (componentState === "Signin") {
        return <Signin onSubmit={handleFormSubmit}/>
    }
    if (componentState === "Signup") {
        return <Signup onSubmit={handleFormSubmit}/>
    }
    return (
        <>
            <button onClick={() => setComponentState("Signin")}>Войти</button>
            <button onClick={() => setComponentState("Signup")}>Зарегистироваться</button>
        </>
    )
}

export default App
