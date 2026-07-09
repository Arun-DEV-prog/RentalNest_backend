import type Stripe from "stripe";
declare const createPaymentCheckout: (userId: string, rentalId: string) => Promise<{
    checkoutUrl: string | null;
    sessionId: string;
    paymentId: string;
    rentalId: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
}>;
declare const verifyPayment: (sessionId: string) => Promise<Stripe.Checkout.Session>;
declare const getUserPayments: (userId: string, filters?: Record<string, unknown>) => Promise<{
    data: ({
        rental: {
            properties: {
                id: string;
                title: string;
                dexcription: string | null;
                rent: import("@prisma/client-runtime-utils").Decimal;
                bedrooms: import("@prisma/client-runtime-utils").Decimal | null;
                bathrooms: import("@prisma/client-runtime-utils").Decimal | null;
                size_sqft: import("@prisma/client-runtime-utils").Decimal;
                floor: import("@prisma/client-runtime-utils").Decimal;
                availability: boolean;
                available_from: string;
                address: string;
                division: string | null;
                images: string | null;
                propertiesId: string | null;
                userId: string;
                categoriesId: number;
            };
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            status: import("../../../generated/prisma/enums").rentalStatus;
            created_at: Date;
            updated_at: Date;
            userId: string;
            properties_id: string;
            move_in_date: string;
            lease_duration: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").paymentStatus;
        created_at: Date;
        updated_at: Date;
        userId: string;
        rentalId: string;
        stripePaymentIntentId: string | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        paymentMethod: string | null;
        transactionId: string | null;
    })[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        pages: number;
    };
}>;
declare const getPaymentById: (userId: string, paymentId: string) => Promise<{
    rental: {
        properties: {
            id: string;
            title: string;
            dexcription: string | null;
            rent: import("@prisma/client-runtime-utils").Decimal;
            bedrooms: import("@prisma/client-runtime-utils").Decimal | null;
            bathrooms: import("@prisma/client-runtime-utils").Decimal | null;
            size_sqft: import("@prisma/client-runtime-utils").Decimal;
            floor: import("@prisma/client-runtime-utils").Decimal;
            availability: boolean;
            available_from: string;
            address: string;
            division: string | null;
            images: string | null;
            propertiesId: string | null;
            userId: string;
            categoriesId: number;
        };
        user: {
            id: string;
            email: string;
            name: string;
            phone: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").rentalStatus;
        created_at: Date;
        updated_at: Date;
        userId: string;
        properties_id: string;
        move_in_date: string;
        lease_duration: string;
    };
} & {
    id: string;
    status: import("../../../generated/prisma/enums").paymentStatus;
    created_at: Date;
    updated_at: Date;
    userId: string;
    rentalId: string;
    stripePaymentIntentId: string | null;
    amount: import("@prisma/client-runtime-utils").Decimal;
    currency: string;
    paymentMethod: string | null;
    transactionId: string | null;
}>;
export declare const paymentService: {
    createPaymentCheckout: typeof createPaymentCheckout;
    verifyPayment: typeof verifyPayment;
    getUserPayments: typeof getUserPayments;
    getPaymentById: typeof getPaymentById;
};
export {};
//# sourceMappingURL=payments.service.d.ts.map