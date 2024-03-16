import { IProject } from "../models/project.model"
import { SUCCESS_STATUS_CODE } from "../utils/constants"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseProject = {
    getAll: () => Promise<IProject[]>
    create: (model: IProject) => Promise<boolean>
    getById: (id: string) => Promise<IProject>
    findProjectsOfAnInvestor: () => Promise<IProject[]>
}

export const useProject = () : UseProject => {
    const getAll = async () : Promise<IProject[]> => {
        const response = await httpClient.get(API_PATH.PROJECT)
        return response.data
    }
    const create = async (model: IProject) : Promise<boolean> => {
        const response = await httpClient.post(API_PATH.PROJECT, model);
        if(response.status !== SUCCESS_STATUS_CODE){
            return false
        }
        return true
    }
    const getById = async (id: string) : Promise<IProject> => {
        const response = await httpClient.get(`${API_PATH.PROJECT}/${id}`)
        return response.data
    }
    const findProjectsOfAnInvestor = async () : Promise<IProject[]> => {
        const response = await httpClient.get(API_PATH.INVESTOR.PROJECT)
        return response.data
    }
    return {
        create,
        getAll,
        getById,
        findProjectsOfAnInvestor
    }
}

export default useProject