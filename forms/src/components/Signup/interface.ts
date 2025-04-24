import {ISignin} from "../Signin/interface.ts";

export interface ISignup extends ISignin{
    name: string,
    nickname: string,
    sex: string,
    repeatPassword: string
}