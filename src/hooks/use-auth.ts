import { ILoginRequest, ILoginResponse, ROLE } from "../models/auth.model"
import { SUCCESS_STATUS_CODE, TOKEN } from "../utils/constants"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseAuth = {
    login : (username: string, password: string) => Promise<ILoginResponse|undefined>,
    logout : () => void
}
export const useAuth = () : UseAuth => {
    const login = async(username: string, password: string)  => {
        // Mock account customer
        if(username==='abc' && password === 'abc'){
            return {
                role: ROLE.CUSTOMER,
                token: ''
            } as ILoginResponse
        }

        const request : ILoginRequest = {
            username: username,
            password: password
        }
        const response = await httpClient.post(API_PATH.LOGIN, request)
        if(response.status === SUCCESS_STATUS_CODE){
            return response.data as ILoginResponse
        }
        return undefined
    }

    const logout = () => {
        localStorage.removeItem(TOKEN)
    }

    return {login, logout}
}

export default useAuth