export declare const usersRole: {
    readonly tenant: "tenant";
    readonly landlord: "landlord";
    readonly admin: "admin";
};
export type usersRole = (typeof usersRole)[keyof typeof usersRole];
export declare const userStatus: {
    readonly active: "active";
    readonly banned: "banned";
};
export type userStatus = (typeof userStatus)[keyof typeof userStatus];
export declare const rentalStatus: {
    readonly pending: "pending";
    readonly approved: "approved";
    readonly rejected: "rejected";
    readonly active_completed: "active_completed";
};
export type rentalStatus = (typeof rentalStatus)[keyof typeof rentalStatus];
export declare const paymentStatus: {
    readonly pending: "pending";
    readonly processing: "processing";
    readonly completed: "completed";
    readonly failed: "failed";
    readonly cancelled: "cancelled";
};
export type paymentStatus = (typeof paymentStatus)[keyof typeof paymentStatus];
//# sourceMappingURL=enums.d.ts.map