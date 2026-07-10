export interface ICreatePaymentRequest {
  rentalId: string;
}

export interface IConfirmPaymentRequest {
  sessionId?: string;
  session_id?: string;
}

export interface IPaymentFilter {
  page?: string;
  limit?: string;
  status?: string;
}
