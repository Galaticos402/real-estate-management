export interface IDivision {
    divisionId? : number
    divisionName: string,
    divisionStatus: string
    description: string,
    projectId: number
}

export interface IDivisionCreationModel{
    divisionName: string,
    divisionStatus: string
    description: string,
    agencyId?: string,
    projectId?: string
}