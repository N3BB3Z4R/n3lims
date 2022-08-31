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
