export interface ILoginRequest{
    email: string,
    password: string
}
export interface ILoginResponse{
    token: string,
    role: ROLE
}

export enum ROLE{
    CUSTOMER = "Customer",
    INVESTOR = "Investor"
}