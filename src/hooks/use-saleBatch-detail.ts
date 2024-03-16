import { ISaleBatchDetail } from "../models/saleBatchDetail.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseSaleBatchDetail = {
    getSaleBatchDetailBySaleBatchId : (saleBatchId: number) => Promise<ISaleBatchDetail[]> 
}

export const useSaleBatchDetail = () : UseSaleBatchDetail => {
    const getSaleBatchDetailBySaleBatchId = async (saleBatchId: number) => {
        const res = await httpClient.get(`${API_PATH.SALE_BATCH_DETAIL}/findBySaleBatchId?saleBatchId=${saleBatchId}`)
        return res.data
    }
    return {
        getSaleBatchDetailBySaleBatchId
    }
}