import { AxiosResponse } from "axios"
import { IDivision, IDivisionCreationModel } from "../models/division.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseDivision = {
    getDivisionByProjectId : (projectId: number) => Promise<IDivision[]>
    getById : (divisionId: string) => Promise<IDivision>
    create: (model: IDivisionCreationModel) => Promise<AxiosResponse<IDivision>>
    getDivisionByRole : () => Promise<IDivision[]>
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
    const create = async ( model: IDivisionCreationModel) => {
        const response = await httpClient.post(`${API_PATH.DIVISION}`, model)
        return response;
    }
    const getDivisionByRole = async () => {
        const response = await httpClient.get(`${API_PATH.DIVISION}/role`)
        return response.data
    }
    return {
        getDivisionByProjectId,
        getById,
        create,
        getDivisionByRole
    }
}