import { IContract } from "../models/contract.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseContract = {
    buildContract : (contract : IContract) => Promise<void>
    getContractsOfACustomer : () => Promise<IContract[]>
}

export const useContract = () : UseContract => {
    const buildContract = async (contract: IContract) => {
        const res = await httpClient.post(API_PATH.CONTRACT, contract)
        return res.data;
    }
    const getContractsOfACustomer = async () => {
        const res = await httpClient.get(API_PATH.CONTRACT)
        return res.data
    }
    return {
        buildContract,
        getContractsOfACustomer
    }
}
