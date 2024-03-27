import { AxiosResponse } from "axios"
import { ISaleBatch, ISaleBatchCreationModel } from "../models/saleBatch.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"
import { IPropertyAssignModel } from "../models/property.model"

export enum SaleBatchStatus {
    OPENING = "OPENING",
    UPCOMING = "UPCOMING"
}

type UseSaleBatch = {
    getAvailableSaleBatchesOfADivision : (divisionId: string) => Promise<ISaleBatch[]>
    getSaleBatchByStatus : (divisionId: string, status : SaleBatchStatus) => Promise<ISaleBatch[]> 
    create: (saleBatch: ISaleBatchCreationModel) => Promise<AxiosResponse<ISaleBatch>>
    assignProperties : (saleBatchId: number, models: IPropertyAssignModel[]) => Promise<AxiosResponse>
}

export const useSaleBatch = () : UseSaleBatch => {
    const getAvailableSaleBatchesOfADivision = async (divisionId: string) => {
        const response = await httpClient.get(`${API_PATH.SALE_BATCH}/getAvailableSaleBatch?divisionId=${divisionId}`)
        return response.data
    }
    const getSaleBatchByStatus = async (divisionId: string, status : SaleBatchStatus) => {
        const response = await httpClient.get(`${API_PATH.SALE_BATCH}/getAvailableSaleBatch?divisionId=${divisionId}&status=${status}`)
        return response.data
    }
    const create = async (saleBatch: ISaleBatchCreationModel) => {
        const response = await httpClient.post(API_PATH.SALE_BATCH, saleBatch)
        return response
    }
    const assignProperties = async (saleBatchId: number, models: IPropertyAssignModel[]) => {
        const response = await httpClient.post(`${API_PATH.SALE_BATCH}/assignProperty?saleBatchId=${saleBatchId}`, models)
        return response
    }
    return {
        getAvailableSaleBatchesOfADivision,
        getSaleBatchByStatus,
        create,
        assignProperties
    }
}