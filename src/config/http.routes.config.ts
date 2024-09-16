import { environment } from "../../environment/environment"

export const httpRoutes = {
  forgotPassword: `${environment.baseAppUrl}/admin/forgot-password`,
  resetPassword: `${environment.baseAppUrl}/admin/reset-password`,
  changePassword: `${environment.baseAppUrl}/change-password`,
  login: `${environment.baseAppUrl}/login`,
  getDownloadClientData: `${environment.baseAppUrl}/getDownloadClientData`,
  getClientData: `${environment.baseAppUrl}/getClientData`,
  individualClientDetails: `${environment.baseAppUrl}/individualClientDetails`,
  allIndividualClients: `${environment.baseAppUrl}/allIndividualClients`,
  allCorporateClients: `${environment.baseAppUrl}/allCorporateClients`,
  getViewClientData: `${environment.baseAppUrl}/getViewClientData`,
  individualNSDlNewAccount: `${environment.baseAppUrl}/individualNSDlNewAccount`,
  downloadReport: `${environment.baseAppUrl}/downloadReport`,
  batchFileCreation: `${environment.baseAppUrl}/batchFileCreation`,
  upload: `${environment.baseAppUrl}/upload`,
  downloadzip: `${environment.baseAppUrl}/downloadzip`,
  clientDetails: `${environment.baseAppUrl}/clientDetails`,
} 