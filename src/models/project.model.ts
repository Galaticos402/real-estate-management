import { IDivision } from "./division.model"
import { IInvestor } from "./user.model"

export interface IProject {
    projectId?: number,
    projectName: string,
    description: string,
    location: string,
    buildingContractor: string,
    area: string,
    scale: string,
    juridicalStatus: string
    introPageLink: string,
    projectStatus: string,
    createdDate: string,
    investorId: string
    investor: IInvestor
    divisions: IDivision[]
}
