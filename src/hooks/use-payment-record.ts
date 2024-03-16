import { IPaymentRecord } from "../models/paymentRecord.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UsePaymentRecord = {
    getPaymentRecordsByContractId : (contractId: number) => Promise<IPaymentRecord[]> 
}

const usePaymentRecord = () : UsePaymentRecord => {
    const getPaymentRecordsByContractId = async (contractId: number) => {
        const res = await httpClient.get(`${API_PATH.PAYMENT_RECORD}?contractId=${contractId}`)
        return res.data
    } 
    return {
        getPaymentRecordsByContractId
    }
}

export default usePaymentRecord