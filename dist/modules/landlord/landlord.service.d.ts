import type { ILandlord, IUpdatedLandlord } from "./landlord.interface";
export declare const landlordService: {
    createLandlordIntoDB: (payload: ILandlord, userId: string) => Promise<any>;
    updateProperties: (landLordId: string, payload: IUpdatedLandlord, propertiesId: string, isOwner: boolean) => Promise<any>;
    deletePropertiesByID: (landLordId: string, propertiesId: string, isOwner: boolean) => Promise<any>;
    getRentalRequestsForLandlord: (landLordId: string) => Promise<any>;
    updateRentalRequestStatus: (landLordId: string, requestId: string, status: "approved" | "rejected") => Promise<any>;
};
//# sourceMappingURL=landlord.service.d.ts.map