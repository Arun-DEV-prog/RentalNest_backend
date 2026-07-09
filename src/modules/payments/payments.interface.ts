export interface ICreatePaymentRequest {
  rentalId: string;
}

export interface IConfirmPaymentRequest {
  sessionId: string;
}

export interface IPaymentFilter {
  page?: string;
  limit?: string;
  status?: string;
}
