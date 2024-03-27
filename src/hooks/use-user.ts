import { IUser } from "../models/user.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

export enum UserRole {
    CUSTOMER = "Customer",
    INVESTOR = "Investor",
    AGENCY = "Agency"
}

type UseUser = {
    getUsersByRole: (role: UserRole) => Promise<IUser[]>
}

export const useUser = () : UseUser => {
    const getUsersByRole = async (role: UserRole) => {
        const response = await httpClient.get(`${API_PATH.USER}?role=${role}`)
        return response.data
    }
    return {
        getUsersByRole
    }
}