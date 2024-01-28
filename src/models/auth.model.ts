export interface ILoginRequest{
    username: string,
    password: string
}
export interface ILoginResponse{
    token: string,
    role: ROLE
}

export enum ROLE{
    CUSTOMER = "Customer"
}