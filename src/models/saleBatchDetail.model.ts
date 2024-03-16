import { IProperty } from "./property.model";

export interface ISaleBatchDetail {
    saleBatchDetailId: number,
    saleBatchId: number,
    propertyId: number,
    price: number,
    property: IProperty
}