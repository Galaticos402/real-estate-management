import { AxiosResponse } from "axios"
import { IProperty } from "../models/property.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseProperty = {
    getPropertiesBySaleBatchId: (saleBatchId: string) => Promise<IProperty[]>
    getPropertiesByDivisionId: (divisionId: string) => Promise<IProperty[]>
    bulkCreate: (divisionId: string, formData: FormData) => Promise<AxiosResponse<IProperty[]>>  
}

export const useProperty = () : UseProperty => {
    const getPropertiesBySaleBatchId = async (saleBatchId: string) => {
        const response = await httpClient.get(`${API_PATH.PROPERTY}/findBySaleBatch?saleBatchId=${saleBatchId}`)
        return response.data
    }
    const getPropertiesByDivisionId = async (divisionId: string) => {
        const response = await httpClient.get(`${API_PATH.PROPERTY}/findByDivision?divisionId=${divisionId}`)
        return response.data
    }
    const bulkCreate = async (divisionId: string, formData: FormData) => {
        const response = await httpClient.post(`${API_PATH.PROPERTY}/bulkCreate/${divisionId}`, formData)
        return response
    }
    return {
        getPropertiesBySaleBatchId,
        getPropertiesByDivisionId,
        bulkCreate
    }
}