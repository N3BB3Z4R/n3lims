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
export interface Action {
  type: string
  payload: SampleType
}
