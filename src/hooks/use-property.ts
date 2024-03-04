import { IProperty } from "../models/property.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseProperty = {
    getPropertiesBySaleBatchId: (saleBatchId: string) => Promise<IProperty[]>
}

export const useProperty = () : UseProperty => {
    const getPropertiesBySaleBatchId = async (saleBatchId: string) => {
        const response = await httpClient.get(`${API_PATH.PROPERTY}/findBySaleBatch?saleBatchId=${saleBatchId}`)
        return response.data
    }
    return {
        getPropertiesBySaleBatchId
    }
}