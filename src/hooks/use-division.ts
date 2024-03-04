import { IDivision } from "../models/division.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseDivision = {
    getDivisionByProjectId : (projectId: number) => Promise<IDivision[]>
    getById : (divisionId: string) => Promise<IDivision>
}

export const useDivision = () : UseDivision => {
    const getDivisionByProjectId = async (projectId: number) => {
        const response = await httpClient.get(`${API_PATH.DIVISION}?projectId=${projectId}`)
        return response.data
    }
    const getById = async (divisionId: string) => {
        const response = await httpClient.get(`${API_PATH.DIVISION}/${divisionId}`)
        return response.data
    }
    return {
        getDivisionByProjectId,
        getById
    }
}