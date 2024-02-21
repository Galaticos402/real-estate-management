export interface IUser{
    userId?: number,
    userName: string,
    phoneNumber: string,
    address: string,
    email: string,
    role: string
}

export interface IInvestor extends IUser{
    
}