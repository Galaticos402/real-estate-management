import { ISaleBatchDetail } from "./saleBatchDetail.model"

export interface ISaleBatch {
    saleBatchId: number,
    saleBatchName: string,
    startDate: string,
    endDate: string,
    bankAccount: string,
    bankName: string,
    bookingFee: number,
    receiverName: string,
    premiumStartDate: string
    saleBatchDetails: ISaleBatchDetail[]
}

export interface ISaleBatchCreationModel {
    saleBatchName: string,
    startDate: Date,
    endDate: Date,
    bankAccount: string,
    bankName: string,
    bookingFee: number,
    receiverName: string,
    premiumStartDate: Date
}