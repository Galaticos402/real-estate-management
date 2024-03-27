export interface IProperty {
    propertyId : number,
    propertyName: string,
    brief: string,
    area: string,
    description: string,
    divisionId: number
}

export interface IPropertyAssignModel{
    propertyId: number,
    price: number,
    isSelected?: boolean
}