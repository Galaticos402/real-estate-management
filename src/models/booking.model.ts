import { ISaleBatch } from "./saleBatch.model";

export interface IBooking {
    saleBatchId: number,
    isPaid: boolean,
    saleBatch? : ISaleBatch
}
