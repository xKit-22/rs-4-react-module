export interface IUser {
    id: number,
    firstName: string,
    lastName: string
}
export interface IResponseData {
    limit: number,
    skip: number,
    total: number,
    users?: IUser[]
}