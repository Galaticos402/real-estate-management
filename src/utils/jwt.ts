import { jwtDecode } from "jwt-decode"

export const decode = (token: string) : JwtData => {
    const decode = jwtDecode(token) as JwtResponse

    return {
        role: decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    }
}

export interface JwtData {
    role: string
}

interface JwtResponse {
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string
}