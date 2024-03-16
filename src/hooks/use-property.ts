import { IProperty } from "../models/property.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseProperty = {
    getPropertiesBySaleBatchId: (saleBatchId: string) => Promise<IProperty[]>
    getPropertiesByDivisionId: (divisionId: string) => Promise<IProperty[]>
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
    return {
        getPropertiesBySaleBatchId,
        getPropertiesByDivisionId
    }
}