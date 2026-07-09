declare const createPaymentCheckout: (userId: string, rentalId: string) => Promise<{
    checkoutUrl: any;
    sessionId: any;
    paymentId: any;
    rentalId: string;
    amount: any;
}>;
declare const verifyPayment: (sessionId: string) => Promise<any>;
declare const getUserPayments: (userId: string, filters?: Record<string, unknown>) => Promise<{
    data: any;
    pagination: {
        total: any;
        page: number;
        limit: number;
        pages: number;
    };
}>;
declare const getPaymentById: (userId: string, paymentId: string) => Promise<any>;
export declare const paymentService: {
    createPaymentCheckout: typeof createPaymentCheckout;
    verifyPayment: typeof verifyPayment;
    getUserPayments: typeof getUserPayments;
    getPaymentById: typeof getPaymentById;
};
export {};
//# sourceMappingURL=payments.service.d.ts.map