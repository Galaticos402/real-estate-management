import { IProperty } from "./property.model";

export interface IContract {
    contractId?: number,
    propertyId: number,
    listedPrice: number,
    duration: number,
    period: number,
    property?: IProperty
}