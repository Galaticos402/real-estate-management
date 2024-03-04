import { ISaleBatch } from "../models/saleBatch.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

export enum SaleBatchStatus {
    OPENING = "OPENING",
    UPCOMING = "UPCOMING"
}

type UseSaleBatch = {
    getAvailableSaleBatchesOfADivision : (divisionId: string) => Promise<ISaleBatch[]>
    getSaleBatchByStatus : (divisionId: string, status : SaleBatchStatus) => Promise<ISaleBatch[]> 
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
    return {
        getAvailableSaleBatchesOfADivision,
        getSaleBatchByStatus
    }
}