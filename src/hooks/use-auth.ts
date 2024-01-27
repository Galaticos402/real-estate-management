import { ILoginRequest, ILoginResponse } from "../models/auth.model"
import { SUCCESS_STATUS_CODE, TOKEN } from "../utils/constants"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseAuth = {
    login : (username: string, password: string) => Promise<boolean>,
    logout : () => void
}
export const useAuth = () : UseAuth => {
    const login = async(username: string, password: string) => {
        const request : ILoginRequest = {
            username: username,
            password: password
        }
        const response = await httpClient.post(API_PATH.LOGIN, request)
        if(response.status === SUCCESS_STATUS_CODE){
            const {token} = response.data as ILoginResponse
            localStorage.setItem(TOKEN, token)
            return true
        }
        return false
    }

    const logout = () => {
        localStorage.removeItem(TOKEN)
    }

    return {login, logout}
}

export default useAuth