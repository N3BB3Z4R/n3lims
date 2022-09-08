export interface SampleType {
  SampleID: number
  Type: string
  Temperature: number
  FreezerID: number
  OnLoan: boolean
  QRCode: string
  BoxID: number
  ShelvingID: number
  Description: string
  ParticipantID: number
  TakingDate: string
  BoxSlotID: number
  Amount: number
  ProjectID: number
}

export interface ProjectsProps {
  workflowId: number
  title: string
  description: string
  ownedId: number
  createdAt: string
  endedAt: string
  projectType: string
}

export type SampleProps = {
  id: number
  ProjectId: string
  createdAt: number
  updatedAt: number
  type: string
  quantity: string
  temperature: number
  amount: number
  FreezerId: string
  ShelvingId: number
  BoxId: string
  SlotId: number
  OnLoan: boolean
  LoanedTo: string
  LoanedAt: string
  QRCode: string
  Description: string
  boxesId: number
  boxesId: number
  participantsId: number
}

export type SamplePropsOld = {
  SampleID: number
  Type: string
  Temperature: number
  FreezerID: number
  OnLoan: boolean
  QRCode: string
  BoxID: number
  ShelvingID: number
  Description: string
  ParticipantID: number
  TakingDate: string
  BoxSlotID: number
  Amount: number
  ProjectID: number
}

export interface Action {
  type: string
  payload: SampleType
}

export enum MainMenuDataEnum {
  Dashboard = 'Dashboard',
  Projects = 'Projects',
  SampleUnit = 'Sample Unit',
}
